import type { ScreenThemeConfig } from '../../config/screenTheme';

interface Tela15AgoraESuaVezProps {
  onRestart: () => void;
}

export const TELA15_THEME: ScreenThemeConfig = {
  appBackgroundClassName: 'app-bg-tile app-bg-blue-dots',
  contentStageThemeClassName: '',
};

const FLOATING_MARKS = [
  { label: '</>', left: '9%', top: '18%', color: 'var(--sesc-yellow-flower)', delay: '0s' },
  { label: '{}', left: '83%', top: '17%', color: 'var(--sesc-green-grass)', delay: '0.4s' },
  { label: 'IA', left: '13%', top: '70%', color: 'var(--sesc-pink)', delay: '0.8s' },
  { label: '3D', left: '80%', top: '72%', color: 'var(--sesc-blue-sky)', delay: '1.2s' },
];

export function Tela15AgoraESuaVez(_props: Tela15AgoraESuaVezProps) {
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
          className="animate-symbol-float absolute z-0 rounded-3xl border-[5px] border-black bg-white/55 px-6 py-4 text-[30px] font-black text-[var(--sesc-blue-dark)] shadow-[7px_7px_0_rgba(39,35,72,0.16)]"
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

      <main className="relative z-10 mx-auto flex h-full w-[1500px] flex-col items-center justify-center py-[58px]">
        <h1 className="relative text-center">
          <span className="absolute inset-0 translate-x-[8px] translate-y-[8px] transform text-[104px] font-black uppercase leading-[0.9] tracking-tight text-black">
            Agora é sua vez!
          </span>
          <span className="absolute inset-0 translate-x-[4px] translate-y-[4px] transform text-[104px] font-black uppercase leading-[0.9] tracking-tight text-[var(--sesc-blue-dark)]">
            Agora é sua vez!
          </span>
          <span className="relative text-[104px] font-black uppercase leading-[0.9] tracking-tight text-white">
            Agora é sua vez!
          </span>
        </h1>

        <section className="mt-8 w-[1120px] rounded-[34px] border-[7px] border-black bg-white/94 px-14 py-9 text-center shadow-[14px_14px_0_rgba(0,0,0,0.92)]">
          <p className="text-[32px] font-bold leading-relaxed text-black">
            Você acabou de conhecer quase{' '}
            <span className="font-black text-[var(--sesc-pink)]">200 anos de história</span> da programação: de uma
            mulher imaginando computadores em <span className="font-black text-[var(--sesc-blue-dark)]">1843</span> até
            a inteligência artificial de hoje.
          </p>
          <p className="mt-5 text-[34px] font-bold leading-relaxed text-black">
            Mas a melhor parte ainda nem começou: a parte em que{' '}
            <span className="font-black text-[var(--sesc-orange)]">você</span> programa.
          </p>
        </section>

        <section className="mt-9 w-[1160px] rotate-1 rounded-[34px] border-[9px] border-black bg-[var(--sesc-blue-dark)] px-16 py-12 text-center shadow-[18px_18px_0_rgba(0,0,0,0.92)]">
          <p className="text-[51px] font-black uppercase leading-tight tracking-[0.02em] text-white">
            Todo grande programador um dia foi uma criança com uma ideia.
          </p>

          <div className="mt-8 flex justify-center gap-5">
            {['ideia', 'código', 'futuro'].map((item, index) => (
              <span
                key={item}
                className="rounded-full border-[4px] border-white px-7 py-3 text-[23px] font-black uppercase tracking-[0.12em] text-[var(--sesc-blue-dark)] shadow-[5px_5px_0_rgba(0,0,0,0.2)]"
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

        <section className="mt-9 flex h-[156px] w-[1160px] items-center justify-between rounded-[30px] border-[6px] border-dashed border-[rgba(39,35,72,0.72)] bg-white/58 px-10 shadow-[10px_10px_0_rgba(39,35,72,0.12)] backdrop-blur-sm">
          <div>
            <p className="text-[24px] font-black uppercase tracking-[0.16em] text-[var(--sesc-blue-dark)]">
              Espaço reservado
            </p>
            <p className="mt-1 text-[25px] font-bold text-black/70">Cartela de logos entra aqui depois.</p>
          </div>

          <div className="flex items-center gap-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex h-[82px] w-[150px] items-center justify-center rounded-2xl border-[4px] border-[rgba(39,35,72,0.42)] bg-white/70 text-[18px] font-black uppercase tracking-[0.12em] text-[rgba(39,35,72,0.5)]"
              >
                logo
              </div>
            ))}
          </div>
        </section>

        <p className="mt-6 text-center text-[22px] font-black uppercase tracking-[0.16em] text-white drop-shadow-[3px_3px_0_rgba(39,35,72,0.55)]">
          Uma experiência interativa do SESC
        </p>
      </main>
    </div>
  );
}
