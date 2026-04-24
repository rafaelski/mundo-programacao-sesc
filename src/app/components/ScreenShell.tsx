import type { ReactNode } from "react";
import { cn } from "./ui/utils";

type ScreenTone = "beige" | "blue" | "mint" | "sky" | "gold" | "transparent";

interface ScreenShellProps {
  children: ReactNode;
  tone?: ScreenTone;
  className?: string;
  showDecorations?: boolean;
}

const toneClasses: Record<ScreenTone, string> = {
  beige: "bg-[#f7efdf]",
  blue: "bg-[linear-gradient(180deg,#0d4568_0%,#156189_100%)] text-white",
  mint: "bg-[#dff3df]",
  sky: "bg-[#dff1ff]",
  gold: "bg-[#ffe1a6]",
  transparent: "bg-transparent",
};

const accentClasses: Record<ScreenTone, string> = {
  beige: "bg-[rgba(249,200,67,0.22)]",
  blue: "bg-[rgba(255,255,255,0.14)]",
  mint: "bg-[rgba(111,179,63,0.18)]",
  sky: "bg-[rgba(21,130,196,0.16)]",
  gold: "bg-[rgba(240,98,146,0.16)]",
  transparent: "bg-transparent",
};

export function ScreenShell({ children, tone = "beige", className, showDecorations = true }: ScreenShellProps) {
  return (
    <div className={cn("relative h-[1080px] w-[1920px] overflow-hidden", toneClasses[tone], className)}>
      {showDecorations && (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18px 18px, rgba(255,255,255,0.38) 2px, transparent 0), linear-gradient(145deg, rgba(255,255,255,0.22), transparent 42%)",
              backgroundSize: "38px 38px, 100% 100%",
            }}
          />
          <div className={cn("pointer-events-none absolute -left-16 top-16 h-[280px] w-[280px] rounded-full blur-3xl", accentClasses[tone])} />
          <div className={cn("pointer-events-none absolute bottom-[-120px] right-[-80px] h-[340px] w-[420px] rounded-full blur-3xl", accentClasses[tone])} />
        </>
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
