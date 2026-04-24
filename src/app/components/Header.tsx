interface HeaderProps {
  currentScreen: number;
  totalScreens: number;
  onPrevious?: () => void;
  onNext?: () => void;
}

export function Header({ currentScreen, totalScreens }: HeaderProps) {
  const progress = Math.max((currentScreen / totalScreens) * 100, 8);

  return (
    <div className="absolute left-10 right-10 top-8 z-20">
      <div className="flex items-center justify-between gap-8 rounded-[30px] border-[4px] border-[var(--sesc-ink)] bg-[rgba(255,250,241,0.86)] px-8 py-4 shadow-[0_14px_30px_rgba(39,35,72,0.16)] backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[var(--sesc-ink)] bg-[var(--sesc-yellow-flower)] text-[28px] shadow-[0_6px_0_rgba(39,35,72,0.12)]">
            &lt;/&gt;
          </div>
          <div>
            <p className="text-[16px] font-black uppercase tracking-[0.22em] text-[var(--sesc-gray-stone)]">
              SESC apresenta
            </p>
            <p className="text-[34px] font-black leading-none text-[var(--sesc-ink)]">
              O Mundo da Programação
            </p>
          </div>
        </div>

        <div className="flex min-w-[420px] items-center gap-4">
          <div className="flex-1">
            <p className="mb-2 text-right text-[14px] font-black uppercase tracking-[0.22em] text-[var(--sesc-gray-stone)]">
              Progresso da jornada
            </p>
            <div className="h-5 overflow-hidden rounded-full border-[3px] border-[var(--sesc-ink)] bg-[#dbe8f2]">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,var(--sesc-green-grass)_0%,var(--sesc-blue-mid)_55%,var(--sesc-pink)_100%)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="rounded-full border-[3px] border-[var(--sesc-ink)] bg-white px-5 py-2 text-[24px] font-black text-[var(--sesc-ink)] shadow-[0_6px_0_rgba(39,35,72,0.12)]">
            {currentScreen} / {totalScreens}
          </div>
        </div>
      </div>
    </div>
  );
}
