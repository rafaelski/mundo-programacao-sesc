interface NavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
}

export function Navigation({ onPrevious, onNext, showPrevious = true, showNext = true }: NavigationProps) {
  const arrowButtonStyles = "absolute bottom-10 z-50 flex min-w-[180px] items-center justify-center gap-3 rounded-full border-[4px] border-[var(--sesc-ink)] px-7 py-4 text-[30px] font-black uppercase tracking-[0.08em] text-[var(--sesc-ink)] shadow-[0_10px_0_rgba(39,35,72,0.18)] transition-all duration-150 cursor-pointer select-none touch-none active:translate-y-[3px] active:shadow-[0_6px_0_rgba(39,35,72,0.18)] hover:-translate-y-[1px]";

  return (
    <>
      {showPrevious && onPrevious && (
        <button
          onClick={onPrevious}
          type="button"
          className={`${arrowButtonStyles} left-10 bg-[rgba(255,250,241,0.96)]`}
          aria-label="Tela anterior"
        >
          <span className="pointer-events-none text-[38px] leading-none">&lt;</span>
          <span className="pointer-events-none">Voltar</span>
        </button>
      )}

      {showNext && onNext && (
        <button
          onClick={onNext}
          type="button"
          className={`${arrowButtonStyles} right-10 bg-[linear-gradient(180deg,#ffe589_0%,#f9c843_100%)]`}
          aria-label="Próxima tela"
        >
          <span className="pointer-events-none">Avançar</span>
          <span className="pointer-events-none text-[38px] leading-none">&gt;</span>
        </button>
      )}
    </>
  );
}
