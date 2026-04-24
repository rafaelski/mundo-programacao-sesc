interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
}

export function SpeechBubble({ children, className = '' }: SpeechBubbleProps) {
  return (
    <div className={`relative rounded-[28px] border-[4px] border-[var(--sesc-ink)] bg-[rgba(255,250,241,0.96)] p-8 shadow-[0_12px_24px_rgba(39,35,72,0.12)] ${className}`}>
      <div className="font-bold-text text-[28px] leading-[1.35] text-[var(--sesc-ink)]">
        {children}
      </div>
      <div className="absolute -bottom-6 left-10 h-0 w-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-t-[28px] border-t-[var(--sesc-ink)]"></div>
      <div className="absolute -bottom-5 left-[42px] h-0 w-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[24px] border-t-[rgba(255,250,241,0.96)]"></div>
    </div>
  );
}
