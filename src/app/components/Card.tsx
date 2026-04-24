interface CardProps {
  children: React.ReactNode;
  variant?: 'content' | 'you-knew';
  className?: string;
}

export function Card({ children, variant = 'content', className = '' }: CardProps) {
  const baseStyles = "rounded-[32px] p-10 border-[4px] border-[var(--sesc-ink)] shadow-[0_14px_32px_rgba(39,35,72,0.14)]";

  const variantStyles = {
    content: "bg-[rgba(255,250,241,0.95)]",
    'you-knew': "bg-[linear-gradient(180deg,#fff0b9_0%,#f9d45b_100%)]"
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {variant === 'you-knew' && (
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[var(--sesc-ink)] bg-white text-4xl font-black shadow-[0_6px_0_rgba(39,35,72,0.12)]">!</div>
          <div>
            <p className="text-[18px] font-black uppercase tracking-[0.18em] text-[var(--sesc-orange)]">Curiosidade</p>
            <h3 className="text-[34px] font-black uppercase text-[var(--sesc-ink)]">VOCE SABIA?</h3>
          </div>
        </div>
      )}
      <div className="font-bold-text text-[28px] leading-[1.35] text-[var(--sesc-ink)]">
        {children}
      </div>
    </div>
  );
}
