interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export function Button({ children, variant = 'primary', onClick, icon, className = '' }: ButtonProps) {
  const baseStyles = "min-h-[92px] rounded-[28px] px-12 py-5 font-black uppercase tracking-[0.08em] transition-all duration-150 flex items-center justify-center gap-4 select-none touch-none text-[28px]";
  const borderStyle = "border-[4px] border-[var(--sesc-ink)] shadow-[0_10px_0_rgba(39,35,72,0.18)]";
  const activeStyle = "active:translate-y-[3px] active:shadow-[0_6px_0_rgba(39,35,72,0.18)] hover:-translate-y-[1px] hover:shadow-[0_13px_0_rgba(39,35,72,0.2)]";
  const cursorStyle = "cursor-pointer font-display";

  const variantStyles = {
    primary: "bg-[linear-gradient(180deg,#ffe589_0%,#f9c843_100%)] text-[var(--sesc-ink)]",
    secondary: "bg-[rgba(255,250,241,0.95)] text-[var(--sesc-ink)]"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${borderStyle} ${activeStyle} ${cursorStyle} ${variantStyles[variant]} ${className}`}
      type="button"
    >
      <span className="pointer-events-none">{children}</span>
      {icon && <span className="pointer-events-none text-[36px] leading-none">{icon}</span>}
    </button>
  );
}
