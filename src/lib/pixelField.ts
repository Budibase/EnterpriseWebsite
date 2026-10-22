// Field geometry measured from https://craft.wild.as/. Keep the sampling and
// thresholds separate from the palette so recoloring does not change the motion.
export const PIXEL_FIELD_CELL = 9;
export const PIXEL_FIELD_SEED = 13;
export const PIXEL_FIELD_CROP_TOP = 0.18;
export const PIXEL_FIELD_CROP_HEIGHT = 0.55;
export const PIXEL_FIELD_THRESHOLDS = [0.3, 0.46, 0.62, 0.78, 0.86] as const;

export function fieldHash(column: number, row: number, seed: number): number {
  const value =
    Math.sin(column * 127.1 + row * 311.7 + seed * 0.13) * 43758.5453;
  return value - Math.floor(value);
}

export function fieldValue(
  x: number,
  y: number,
  seconds: number,
  seed: number,
): number {
  x += Math.sin(y * 5 + seconds * 0.5 + seed) * 0.05;
  y += Math.cos(x * 5 - seconds * 0.4) * 0.05;

  const value =
    Math.sin(x * 5.6 + seed * 1.3 + seconds * 0.3) *
      Math.cos(y * 4.7 - seed * 0.7 + seconds * 0.22) +
    Math.sin((x * 1.4 + y * 1.7) * 4.1 - seed + seconds * 0.16) +
    Math.sin(y * 9 + seed * 2.1 + x * 3) * 0.5 +
    Math.sin(x * 13 - seed * 1.7) * 0.28;

  return 0.5 + (0.5 * value) / 2.55;
}

export function fieldRegion(
  x: number,
  y: number,
  seconds: number,
  seed: number,
): number {
  return (
    0.5 +
    0.5 *
      Math.sin(x * 2.1 + seconds * 0.12 + seed * 0.7) *
      Math.cos(y * 1.8 - seconds * 0.09 + seed * 0.3)
  );
}

export interface FieldCell {
  x: number;
  y: number;
  column: number;
  row: number;
  variation: number;
  reveal: number;
  cutoff: number;
}

export function createFieldCells(
  width: number,
  height: number,
  cellSize: number,
  seed: number,
): FieldCell[] {
  // Crop the same band that sits below the reference's masthead. Use a virtual
  // viewport so its wave proportions and ragged fade survive component resizing.
  const worldHeight = height / PIXEL_FIELD_CROP_HEIGHT;
  const topRow = Math.floor((worldHeight * PIXEL_FIELD_CROP_TOP) / cellSize);
  const cells: FieldCell[] = [];

  for (let y = 0; y < height; y += cellSize) {
    const row = topRow + y / cellSize;
    const worldY = row * cellSize;
    for (let x = 0; x < width; x += cellSize) {
      const column = x / cellSize;
      const edge = Math.max(
        0,
        (Math.sin(column * 0.5 + seed) + Math.sin(column * 0.21 - seed * 1.3)) *
          0.16 +
          fieldHash(Math.floor(column / 2) + 3.3, Math.floor(row / 4), seed) *
            0.6 +
          0.15,
      );
      cells.push({
        x,
        y,
        column,
        row,
        variation: (fieldHash(column, row, seed) - 0.5) * 0.12,
        reveal: fieldHash(column * 1.7 + 11.3, row * 1.3 + 5.1, seed),
        cutoff: Math.max(
          0,
          Math.min(1, (worldY / worldHeight + edge * 0.14 - 0.55) / 0.18),
        ),
      });
    }
  }
  return cells;
}

export function sampleField(
  cell: FieldCell,
  width: number,
  height: number,
  cellSize: number,
  seconds: number,
  seed: number,
): number {
  const x = (cell.column * cellSize) / width;
  const y = (cell.row * cellSize) / (height / PIXEL_FIELD_CROP_HEIGHT);
  if (fieldRegion(x, y, seconds, seed) <= cell.cutoff) return 0;

  return (
    fieldValue(x, y, seconds, seed) +
    cell.variation +
    Math.sin(cell.column * 0.6 + cell.row * 0.8 + seconds * 1.7) * 0.045
  );
}

export function fieldBand(value: number): number {
  if (value < PIXEL_FIELD_THRESHOLDS[0]) return -1;
  // The reference's brightest band wraps back to the fourth color above 1.02.
  if (value >= PIXEL_FIELD_THRESHOLDS[4] && value < 1.02) return 4;
  if (value >= PIXEL_FIELD_THRESHOLDS[3]) return 3;
  if (value >= PIXEL_FIELD_THRESHOLDS[2]) return 2;
  if (value >= PIXEL_FIELD_THRESHOLDS[1]) return 1;
  return 0;
}
