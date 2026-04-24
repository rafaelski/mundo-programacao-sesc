interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
  showTail?: boolean;
}

export function SpeechBubble({ children, className = '', showTail = true }: SpeechBubbleProps) {
  return (
    <div className={`surface-panel relative surface-panel-pad-md ${className}`}>
      <div className="font-bold-text text-[28px] leading-[1.35] text-[var(--sesc-ink)]">
        {children}
      </div>
      {showTail && (
        <>
          <div className="absolute -bottom-6 left-10 h-0 w-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-t-[28px] border-t-[var(--sesc-ink)]"></div>
          <div className="absolute -bottom-5 left-[42px] h-0 w-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[24px] border-t-[var(--sesc-panel-bg)]"></div>
        </>
      )}
    </div>
  );
}
