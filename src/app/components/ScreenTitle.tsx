import { cn } from "./ui/utils";

interface ScreenTitleProps {
  title: string;
  eyebrow?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  className?: string;
  gapClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
}

const sizeClasses = {
  md: "text-[60px]",
  lg: "text-[68px]",
  xl: "text-[98px]",
};

export function ScreenTitle({
  title,
  eyebrow,
  tone = "light",
  align = "left",
  size = "lg",
  className,
  gapClassName,
  eyebrowClassName,
  titleClassName,
}: ScreenTitleProps) {
  const darkTone = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        gapClassName,
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "font-display text-[20px] font-black uppercase tracking-[0.22em]",
            darkTone ? "text-[rgba(255,232,156,0.95)]" : "text-[var(--sesc-orange)]",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          "font-display max-w-[860px] text-balance-pretty font-black uppercase leading-[0.92] tracking-[-0.04em]",
          sizeClasses[size],
          darkTone ? "text-white" : "text-[var(--sesc-ink)]",
          titleClassName,
        )}
        style={
          darkTone
            ? { textShadow: "0 6px 0 rgba(9,60,92,0.42), 0 14px 0 rgba(9,60,92,0.18)" }
            : { textShadow: "0 4px 0 rgba(249,200,67,0.75), 0 12px 0 rgba(39,35,72,0.1)" }
        }
      >
        {title}
      </h2>
    </div>
  );
}
