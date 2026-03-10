import { escapeAttribute } from "./hugo-shortcode-utils.js";

const templateMap = {
  changeManagement: {
    heading: "change control template",
    url: "https://budibase.app/builder?template=app/change-request",
  },
  expenseApproval: {
    heading: "expense approval app template",
    url: "https://budibase.app/builder?template=app/expense-approval",
  },
  riskManagement: {
    heading: "risk management template",
    url: "https://budibase.app/builder?template=app/risk-management",
  },
  assetManagement: {
    heading: "asset management template",
    url: "https://budibase.app/builder?template=app/it-asset-management-software",
  },
  ticketingSystem: {
    heading: "ticketing system template",
    url: "https://budibase.app/builder?template=app/it-help-desk",
  },
  incidentReport: {
    heading: "incident report template",
    url: "https://budibase.app/builder?template=app/it-incident-report-form",
  },
};

function formatAttribution(value = "") {
  const parts = value.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

  return parts
    .map((part) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

      if (!match) {
        return escapeAttribute(part);
      }

      const [, label, href] = match;

      return `<a href="${escapeAttribute(href)}" rel="noopener" target="_blank">${escapeAttribute(label)}</a>`;
    })
    .join("");
}

export function renderCTAHtml() {
  return `<div class="bg-base-18 border rounded-sm cta-shortcode">
<p class="hero-description font-weight-medium text-white ">
Join 200,000 teams building workflow apps with Budibase
</p>
<a href="https://account.budibase.app/register?utm_source=website&utm_medium=blog&utm_campaign=cta"
rel="noopener"
class="no-underline"
target="_blank">
<button type="submit" class="btn btn-cta no-underline">
Get started for free
</button>
</a>
</div>`;
}

export function renderCustomCTAHtml({ text = "" }) {
  return `<div class="bg-base-18 border rounded-sm cta-shortcode">
<p class="hero-description font-weight-medium text-white">
${escapeAttribute(text)}
</p>
<a href="https://account.budibase.app/register?utm_source=website&utm_medium=blog&utm_campaign=cta"
rel="noopener"
class="no-underline"
target="_blank">
<button type="submit" class="btn btn-cta no-underline">
Get started for free
</button>
</a>
</div>`;
}

export function renderTemplateCTAHtml({ template = "" }) {
  const templateDetails = templateMap[template];

  if (!templateDetails) {
    return "";
  }

  return `<div class="bg-base-18 border rounded-sm cta-shortcode">
<p class="hero-description font-weight-medium text-white">
${escapeAttribute(templateDetails.heading)}
</p>
<a href="${escapeAttribute(templateDetails.url)}"
rel="noopener"
class="no-underline"
target="_blank">
<button type="submit" class="btn btn-cta no-underline">
Use template
</button>
</a>
</div>`;
}

export function renderVimeoHtml({ id = "", title = "Vimeo video" }) {
  const src = `https://player.vimeo.com/video/${escapeAttribute(id)}?autoplay=1&muted=1&loop=1&autopause=0&controls=0`;

  return `<div class="not-prose my-8">
<div class="aspect-video overflow-hidden rounded-sm border">
<iframe src="${src}" title="${escapeAttribute(title)}" class="h-full w-full" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>`;
}

export function renderYouTubeHtml({ id = "", title = "YouTube video" }) {
  const src = `https://www.youtube.com/embed/${escapeAttribute(id)}`;

  return `<div class="not-prose my-8">
<div class="aspect-video overflow-hidden rounded-sm border">
<iframe src="${src}" title="${escapeAttribute(title)}" class="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>`;
}

export function renderFigureHtml({
  src = "",
  alt = "",
  attr = "",
  target = "",
}) {
  const imageHtml = `<img src="${escapeAttribute(src)}" alt="${escapeAttribute(alt)}" class="w-full rounded-sm border" loading="lazy" />`;
  const wrappedImageHtml = target
    ? `<a href="${escapeAttribute(src)}" target="${escapeAttribute(target)}"${target === "_blank" ? ' rel="noopener"' : ""}>${imageHtml}</a>`
    : imageHtml;
  const figcaptionHtml = attr
    ? `<figcaption class="text-sm text-secondary">${formatAttribution(attr)}</figcaption>`
    : "";

  return `<figure class="not-prose my-8 space-y-3">
${wrappedImageHtml}
${figcaptionHtml}
</figure>`;
}
