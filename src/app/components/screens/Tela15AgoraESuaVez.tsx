import type { ScreenThemeConfig } from '../../config/screenTheme';

interface Tela15AgoraESuaVezProps {
  onRestart: () => void;
}

export const TELA15_THEME: ScreenThemeConfig = {
  appBackgroundClassName: 'app-bg-tile app-bg-final-gradient',
  contentStageThemeClassName: '',
};

const FLOATING_MARKS = [
  { label: '</>', left: '10%', top: '22%', color: 'var(--sesc-yellow-flower)', delay: '0s' },
  { label: '{}', left: '83%', top: '22%', color: 'var(--sesc-green-grass)', delay: '0.4s' },
  { label: 'IA', left: '13%', top: '64%', color: 'var(--sesc-pink)', delay: '0.8s' },
  { label: '3D', left: '82%', top: '63%', color: 'var(--sesc-blue-sky)', delay: '1.2s' },
];

const LOGO_CREDITS = [
  {
    label: 'realização',
    src: `${import.meta.env.BASE_URL}images/logos/sesc.png`,
    alt: 'SESC',
    logoClassName: 'h-[42px] max-w-[150px]',
  },
  {
    label: 'desenvolvimento',
    src: `${import.meta.env.BASE_URL}images/logos/vitro.png`,
    alt: 'VITRO',
    logoClassName: 'h-[38px] max-w-[180px]',
  },
  {
    label: 'direção',
    src: `${import.meta.env.BASE_URL}images/logos/rafaelski.png`,
    alt: 'Rafael Ski',
    logoClassName: 'h-[34px] max-w-[150px]',
  },
];

export function Tela15AgoraESuaVez({ onRestart }: Tela15AgoraESuaVezProps) {
  return (
    <div className="relative h-[1080px] w-[1920px] overflow-hidden bg-[radial-gradient(circle_at_20%_12%,rgba(249,200,67,0.7),transparent_25%),radial-gradient(circle_at_82%_78%,rgba(240,98,146,0.62),transparent_24%),linear-gradient(135deg,var(--sesc-yellow-flower)_0%,var(--sesc-orange)_35%,var(--sesc-pink)_100%)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(circle at 22px 22px, rgba(255,255,255,0.5) 2px, transparent 0)',
          backgroundSize: '44px 44px',
        }}
      />

      {FLOATING_MARKS.map((mark) => (
        <div
          key={mark.label}
          className="animate-symbol-float absolute z-0 rounded-3xl border-[5px] border-black bg-white/55 px-5 py-3 text-[28px] font-black text-[var(--sesc-blue-dark)] shadow-[7px_7px_0_rgba(39,35,72,0.16)]"
          style={{
            left: mark.left,
            top: mark.top,
            backgroundColor: mark.color,
            animationDelay: mark.delay,
          }}
        >
          {mark.label}
        </div>
      ))}

      <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[360px] w-[360px] rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[420px] w-[420px] rounded-full bg-white/18 blur-3xl" />

      <main className="relative z-10 mx-auto flex h-full w-[1500px] flex-col items-center justify-start pb-[34px] pt-[64px]">
        <h1 className="relative text-center">
          <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[86px] font-black uppercase leading-[0.9] tracking-tight text-black">
            Agora é sua vez!
          </span>
          <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[86px] font-black uppercase leading-[0.9] tracking-tight text-[var(--sesc-blue-dark)]">
            Agora é sua vez!
          </span>
          <span className="relative text-[86px] font-black uppercase leading-[0.9] tracking-tight text-white">
            Agora é sua vez!
          </span>
        </h1>

        <section className="mt-6 w-[1080px] rounded-[30px] border-[6px] border-black bg-white/94 px-12 py-7 text-center shadow-[12px_12px_0_rgba(0,0,0,0.88)]">
          <p className="text-[28px] font-bold leading-relaxed text-black">
            Você acabou de conhecer quase{' '}
            <span className="font-black text-[var(--sesc-pink)]">200 anos de história</span> da programação: de uma
            mulher imaginando computadores em <span className="font-black text-[var(--sesc-blue-dark)]">1843</span> até
            a inteligência artificial de hoje.
          </p>
          <p className="mt-4 text-[30px] font-bold leading-relaxed text-black">
            Mas a melhor parte ainda nem começou: a parte em que{' '}
            <span className="font-black text-[var(--sesc-orange)]">você</span> programa.
          </p>
        </section>

        <section className="mt-7 w-[1100px] rotate-1 rounded-[30px] border-[8px] border-black bg-[var(--sesc-blue-dark)] px-14 py-9 text-center shadow-[15px_15px_0_rgba(0,0,0,0.88)]">
          <p className="text-[44px] font-black uppercase leading-tight tracking-[0.02em] text-white">
            Todo grande programador um dia foi uma criança com uma ideia.
          </p>

          <div className="mt-6 flex justify-center gap-5">
            {['ideia', 'código', 'futuro'].map((item, index) => (
              <span
                key={item}
                className="rounded-full border-[4px] border-white px-7 py-2 text-[21px] font-black uppercase tracking-[0.12em] text-[var(--sesc-blue-dark)] shadow-[5px_5px_0_rgba(0,0,0,0.2)]"
                style={{
                  backgroundColor:
                    index === 0
                      ? 'var(--sesc-yellow-flower)'
                      : index === 1
                        ? 'var(--sesc-pink)'
                        : 'var(--sesc-green-grass)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-7 flex h-[130px] w-[1100px] items-center justify-center rounded-[28px] border-[5px] border-white/35 bg-[rgba(9,60,92,0.58)] px-10 shadow-[10px_10px_0_rgba(39,35,72,0.18)] backdrop-blur-sm">
          <div className="flex w-full items-center justify-center gap-9">
            {LOGO_CREDITS.map((credit) => (
              <div key={credit.label} className="flex min-w-0 items-center justify-center gap-4">
                <span className="text-[15px] font-black uppercase tracking-[0.14em] text-white/78">
                  {credit.label}
                </span>
                <img
                  src={credit.src}
                  alt={credit.alt}
                  className={`${credit.logoClassName} object-contain`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </section>

        <p className="mt-4 text-center text-[20px] font-black uppercase tracking-[0.16em] text-white drop-shadow-[3px_3px_0_rgba(39,35,72,0.55)]">
          Uma experiência interativa do SESC
        </p>
      </main>

      <button
        type="button"
        onClick={onRestart}
        className="absolute bottom-8 right-10 z-20 rounded-full border-[3px] border-white/70 bg-[rgba(255,250,241,0.72)] px-5 py-2 text-[16px] font-black uppercase tracking-[0.12em] text-[var(--sesc-blue-dark)] shadow-[4px_4px_0_rgba(39,35,72,0.18)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/90"
      >
        Reiniciar
      </button>
    </div>
  );
}
