const variantClasses = {
  primary:
    "bg-[var(--bb-brand-bright-green)] !text-[var(--bb-celery-1400)] hover:bg-[var(--bb-brand-bright-green)] ",
  secondary:
    "border bg-white !text-[var(--bb-text-base)] hover:bg-[var(--bb-background-surface)] hover:!text-brand",
  cta: "bg-[var(--bb-celery-1300)] !text-[var(--bb-text-on-base)] hover:bg-[var(--bb-celery-1400)] active:bg-[var(--bb-celery-1400)] ",
  "cta-on-base":
    "border-transparent bg-[var(--bb-brand-bright-green)] !text-[var(--bb-celery-1400)] hover:bg-[var(--bb-brand-bright-green)]",
  "outline-on-base":
    "border border-[var(--bb-brand-bright-green)] bg-transparent !text-[var(--bb-brand-bright-green)] hover:border-[var(--bb-brand-bright-green)] hover:bg-[var(--bb-transparent-white-75)] hover:!text-[var(--bb-celery-100)]",
  large: "bg-brand text-on-brand hover:bg-brand-hover active:bg-brand-hover ",
};

const sizeClasses = {
  small: "px-2.5 py-[4.5px] text-base",
  medium: "px-3 py-1.5 text-base",
  large: "px-4 py-2 text-base",
};

const gapClasses = {
  small: "gap-1",
  medium: "gap-1.5",
  large: "gap-2",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-[50px] !font-semibold transition-colors duration-150 active:scale-[0.98] !no-underline cursor-pointer font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

function normalizeSize(size = "medium") {
  return size === "sm" ? "small" : size;
}

export function getButtonClasses({
  variant = "primary",
  size = "medium",
  className = "",
} = {}) {
  const normalizedSize = normalizeSize(size);

  return [
    baseClasses,
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses[normalizedSize] ?? sizeClasses.medium,
    gapClasses[normalizedSize] ?? gapClasses.medium,
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function getButtonRel({ target, rel } = {}) {
  return rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
}

export function getButtonIconSize(size = "medium") {
  const normalizedSize = normalizeSize(size);
  const iconSizes = {
    small: "16",
    medium: "18",
    large: "20",
  };

  return iconSizes[normalizedSize] ?? iconSizes.medium;
}
