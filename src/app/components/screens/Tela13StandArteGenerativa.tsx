import type { ScreenThemeConfig } from '../../config/screenTheme';
import { ScreenTitle } from '../ScreenTitle';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela13StandArteGenerativaProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA13_THEME: ScreenThemeConfig = {
  appBackgroundClassName: 'app-bg-tile app-bg-binary',
  contentStageThemeClassName: 'content-stage-theme-frost',
};

const TELA13_LAYOUT = createStoryScreenLayout({
  columns: '0.92fr 1.08fr',
  columnGap: '2.75rem',
  leftBottomMinHeight: '12rem',
});

const PARTICLE_COLORS = [
  'var(--sesc-pink)',
  'var(--sesc-yellow-flower)',
  'var(--sesc-green-grass)',
  'var(--sesc-orange)',
  'var(--sesc-blue-sky)',
];

const GENERATIVE_PARTICLES = Array.from({ length: 30 }, (_, index) => ({
  angle: (index * 137) % 360,
  radius: 74 + (index % 6) * 32,
  size: 10 + (index % 5) * 7,
  color: PARTICLE_COLORS[index % PARTICLE_COLORS.length],
  duration: 5.8 + (index % 7) * 0.55,
  delay: -(index % 9) * 0.42,
}));

export function Tela13StandArteGenerativa({ onPrevious, onNext }: Tela13StandArteGenerativaProps) {
  return (
    <StoryScreenFrame
      currentScreen={13}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA13_LAYOUT}
      contentStageThemeClassName={TELA13_THEME.contentStageThemeClassName}
      rightClassName="overflow-hidden"
      leftMain={
        <>
          <div>
            <div className="mb-5 inline-flex rotate-[2deg] rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-6 py-2 shadow-[5px_5px_0_rgba(0,0,0,0.18)]">
              <span className="text-[22px] font-black uppercase tracking-[0.16em] text-[var(--sesc-blue-dark)]">
                stand ao lado
              </span>
            </div>

            <ScreenTitle title="Arte generativa" gapClassName="gap-1" />
          </div>

          <div className="mt-5 space-y-3 font-bold-text text-[26px] leading-[1.34] text-[var(--sesc-ink)]">
            <p>
              Programação não serve só para jogos e robôs. Ela também faz{' '}
              <span className="text-[var(--sesc-pink)]">arte</span>.
            </p>
            <p>
              No stand, cada partícula nasce de uma regra: cor, tamanho, posição e velocidade são{' '}
              <span className="text-[var(--sesc-orange)]">decisões do código</span>.
            </p>
            <p>
              O resultado nunca fica igual duas vezes. É desenho, matemática e imaginação trabalhando juntos.
            </p>
          </div>
        </>
      }
      leftBottom={
        <div className="grid h-full grid-cols-[1fr_auto] items-center gap-5 rounded-3xl border-[5px] border-black bg-[#111833] p-6 shadow-[8px_8px_0_rgba(39,35,72,0.18)]">
          <code className="font-mono text-[22px] font-black leading-relaxed text-white">
            <span className="text-[var(--sesc-pink)]">function</span>{' '}
            <span className="text-[var(--sesc-yellow-flower)]">draw</span>() {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-[var(--sesc-green-grass)]">criarParticula</span>();
            <br />
            {'}'}
          </code>
          <div className="rounded-2xl border-[4px] border-white bg-[var(--sesc-yellow-flower)] px-5 py-4 text-center text-[24px] font-black uppercase leading-tight text-[var(--sesc-blue-dark)]">
            p5.js
          </div>
        </div>
      }
      right={
        <div className="relative h-full w-full overflow-hidden rounded-[28px] border-[4px] border-black bg-[#111833] shadow-[10px_10px_0_rgba(39,35,72,0.16)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(21,130,196,0.42),transparent_38%),radial-gradient(circle_at_20%_22%,rgba(240,98,146,0.22),transparent_22%),radial-gradient(circle_at_84%_78%,rgba(249,200,67,0.2),transparent_24%)]" />

          <div className="animate-symbol-float absolute left-[58px] top-[58px] rounded-3xl border-[4px] border-white bg-[var(--sesc-pink)] px-5 py-3 text-[32px] font-black text-white shadow-[5px_5px_0_rgba(0,0,0,0.28)]">
            {'{}'}
          </div>
          <div
            className="animate-symbol-float absolute right-[68px] top-[86px] rounded-full border-[4px] border-white bg-[var(--sesc-yellow-flower)] px-5 py-3 text-[28px] font-black text-[var(--sesc-blue-dark)] shadow-[5px_5px_0_rgba(0,0,0,0.28)]"
            style={{ animationDelay: '0.35s' }}
          >
            cor
          </div>
          <div
            className="animate-symbol-float absolute bottom-[118px] left-[76px] rounded-full border-[4px] border-white bg-[var(--sesc-green-grass)] px-5 py-3 text-[30px] font-black text-white shadow-[5px_5px_0_rgba(0,0,0,0.28)]"
            style={{ animationDelay: '0.75s' }}
          >
            x,y
          </div>
          <div
            className="animate-symbol-float absolute bottom-[152px] right-[72px] rounded-3xl border-[4px] border-white bg-[var(--sesc-orange)] px-5 py-3 text-[28px] font-black text-white shadow-[5px_5px_0_rgba(0,0,0,0.28)]"
            style={{ animationDelay: '1.1s' }}
          >
            loop
          </div>

          <div className="absolute left-1/2 top-[52%] h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[rgba(255,255,255,0.2)]">
            <div className="absolute inset-[74px] rounded-full border-[3px] border-dashed border-[rgba(255,255,255,0.2)]" />
            <div className="absolute inset-[150px] rounded-full border-[3px] border-[rgba(255,255,255,0.18)]" />

            <div className="absolute left-1/2 top-1/2 h-[142px] w-[142px] -translate-x-1/2 -translate-y-1/2 rounded-[34px] border-[6px] border-white bg-[var(--sesc-blue-dark)] shadow-[0_0_44px_rgba(249,200,67,0.42)]">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="text-[42px] font-black text-[var(--sesc-yellow-flower)]">p5</span>
                <span className="text-[20px] font-black uppercase tracking-[0.12em] text-white">arte</span>
              </div>
            </div>

            {GENERATIVE_PARTICLES.map((particle, index) => (
              <div
                key={index}
                className="generative-orbit absolute left-1/2 top-1/2"
                style={{
                  animationDuration: `${particle.duration}s`,
                  animationDelay: `${particle.delay}s`,
                }}
              >
                <div
                  className="rounded-full border-[3px] border-black shadow-[0_0_18px_rgba(255,255,255,0.35)]"
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                    transform: `rotate(${particle.angle}deg) translateX(${particle.radius}px)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
