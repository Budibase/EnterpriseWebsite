"""Build the official Geist font.

Requires fonttools[woff]==4.60.1 and brotli==1.2.0.
Run from any directory; original fonts and their licenses remain in public/.
"""

from pathlib import Path
import unicodedata

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "src/assets/fonts"


def build(source, filename, family, axes):
    source = ROOT / "public/fonts" / source
    font = TTFont(source, recalcTimestamp=False)

    # Retain Latin (including accented letters), marks, numbers, punctuation,
    # currencies and symbols. Other writing systems use the CSS fallback.
    unicodes = {
        cp for cp in font.getBestCmap()
        if not unicodedata.category(chr(cp)).startswith("L")
        or "LATIN" in unicodedata.name(chr(cp), "")
    }
    options = subset.Options()
    options.layout_features = ["*"]
    options.name_IDs = ["*"]
    options.name_legacy = True
    options.name_languages = ["*"]
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=unicodes)
    subsetter.subset(font)
    if axes:
        font = instantiateVariableFont(font, axes, inplace=True)

    # Give the subset its own derivative family name.
    names = font["name"]
    for record in list(names.names):
        value = None
        if record.nameID in (1, 16, 21):
            value = family
        elif record.nameID == 4:
            value = family + " Regular"
        elif record.nameID == 6:
            value = family.replace(" ", "") + "-Regular"
        elif record.nameID == 3:
            value = family.replace(" ", "") + ";1.0"
        if value is not None:
            names.setName(value, record.nameID, record.platformID,
                          record.platEncID, record.langID)
    if "fvar" in font:
        for instance in font["fvar"].instances:
            if instance.postscriptNameID != 0xFFFF:
                instance.postscriptNameID = 0xFFFF

    font.flavor = "woff2"
    OUTPUT.mkdir(parents=True, exist_ok=True)
    destination = OUTPUT / filename
    font.save(destination)
    result = TTFont(destination)
    assert set(result.getBestCmap()) == unicodes
    if "fvar" in result:
        assert "wdth" not in {axis.axisTag for axis in result["fvar"].axes}
    print(f"{filename}: {source.stat().st_size:,} → "
          f"{destination.stat().st_size:,} bytes; {len(unicodes)} characters")


if __name__ == "__main__":
    build("geist/Geist-Variable.ttf", "budibase-geist.woff2",
          "Budibase Geist", {"wght": (400, 700)})
