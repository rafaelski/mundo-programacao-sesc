interface CardProps {
  children: React.ReactNode;
  variant?: 'content' | 'you-knew';
  className?: string;
}

export function Card({ children, variant = 'content', className = '' }: CardProps) {
  const baseStyles = "rounded-[32px] p-10 border-[4px] border-[var(--sesc-ink)] shadow-[0_14px_32px_rgba(39,35,72,0.14)]";
  const isYouKnew = variant === 'you-knew';

  const variantStyles = {
    content: "bg-[rgba(255,250,241,0.95)]",
    'you-knew': "bg-[linear-gradient(180deg,#fff0b9_0%,#f9d45b_100%)]"
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {isYouKnew && (
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[var(--sesc-ink)] bg-white text-4xl font-black shadow-[0_6px_0_rgba(39,35,72,0.12)]">!</div>
          <div>
            <h3 className="text-[20px] font-black uppercase leading-none text-[var(--sesc-ink)]">VOCÊ SABIA?</h3>
          </div>
        </div>
      )}
      <div className={`font-bold-text leading-[1.35] text-[var(--sesc-ink)] ${isYouKnew ? 'text-[26px]' : 'text-[18px]'}`}>
        {children}
      </div>
    </div>
  );
}
