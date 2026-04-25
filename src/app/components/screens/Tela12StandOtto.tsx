import type { ScreenThemeConfig } from '../../config/screenTheme';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela12StandOttoProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA12_THEME: ScreenThemeConfig = {
  appBackgroundClassName: 'app-bg-tile app-bg-mint-hex',
  contentStageThemeClassName: 'content-stage-theme-frost',
};

const TELA12_LAYOUT = createStoryScreenLayout({
  columns: '0.9fr 1.1fr',
  leftBottomMinHeight: '12rem',
  columnGap: '2.75rem',
});

const OTTO_IMAGE_SRC = `${import.meta.env.BASE_URL}images/illustrations/otto.png`;

export function Tela12StandOtto({ onPrevious, onNext }: Tela12StandOttoProps) {
  return (
    <StoryScreenFrame
      currentScreen={12}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA12_LAYOUT}
      contentStageThemeClassName={TELA12_THEME.contentStageThemeClassName}
      rightClassName="overflow-hidden"
      leftMain={
        <>
          <div>
            <div className="mb-5 inline-flex rotate-[-2deg] rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-6 py-2 shadow-[5px_5px_0_rgba(0,0,0,0.18)]">
              <span className="text-[22px] font-black uppercase tracking-[0.16em] text-[var(--sesc-blue-dark)]">
                stand ao lado
              </span>
            </div>

            <h2 className="relative inline-block">
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[74px] font-black uppercase leading-[0.95] tracking-tight text-black">
                OTTO DIY
              </span>
              <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[74px] font-black uppercase leading-[0.95] tracking-tight text-[var(--sesc-yellow-flower)]">
                OTTO DIY
              </span>
              <span className="relative text-[74px] font-black uppercase leading-[0.95] tracking-tight text-[var(--sesc-blue-dark)]">
                OTTO DIY
              </span>
            </h2>
          </div>

          <div className="mt-8 space-y-5 text-[30px] font-bold leading-relaxed text-black">
            <p>
              No stand ao lado, robôs Otto estão esperando por você. Eles são{' '}
              <span className="text-[var(--sesc-orange)]">abertos</span>: qualquer pessoa pode montar, programar e até
              imprimir as peças numa impressora 3D.
            </p>
            <p>
              Você pode fazer o Otto <span className="text-[var(--sesc-pink)]">dançar</span>,{' '}
              <span className="text-[var(--sesc-green-grass)]">andar</span>, desviar de obstáculos e piscar os olhos.
            </p>
          </div>
        </>
      }
      leftBottom={
        <div className="grid h-full grid-cols-3 gap-4">
          {[
            { label: 'montar', icon: '🧩', color: 'var(--sesc-yellow-flower)' },
            { label: 'programar', icon: '</>', color: 'var(--sesc-blue-sky)' },
            { label: 'brincar', icon: '♪', color: 'var(--sesc-pink-soft)' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex min-h-[132px] flex-col items-center justify-center rounded-3xl border-[4px] border-black px-3 text-center shadow-[6px_6px_0_rgba(39,35,72,0.16)]"
              style={{ backgroundColor: item.color }}
            >
              <span className="text-[42px] font-black text-[var(--sesc-blue-dark)]">{item.icon}</span>
              <span className="mt-2 text-[22px] font-black uppercase tracking-[0.08em] text-[var(--sesc-blue-dark)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      }
      right={
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#dff3ff_0%,#fffaf1_72%)]">
          <div className="absolute inset-x-0 bottom-0 h-[150px] bg-[linear-gradient(180deg,rgba(111,179,63,0.18),rgba(111,179,63,0.42))]" />
          <div className="absolute bottom-[58px] left-1/2 h-[42px] w-[520px] -translate-x-1/2 rounded-full bg-[rgba(39,35,72,0.18)] blur-sm" />

          <div className="animate-symbol-float absolute left-[72px] top-[74px] rounded-3xl border-[4px] border-black bg-white px-5 py-3 text-[34px] font-black text-[var(--sesc-blue-dark)] shadow-[5px_5px_0_rgba(39,35,72,0.18)]">
            {'{}'}
          </div>
          <div
            className="animate-symbol-float absolute right-[90px] top-[98px] rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-5 py-3 text-[34px] font-black text-[var(--sesc-blue-dark)] shadow-[5px_5px_0_rgba(39,35,72,0.18)]"
            style={{ animationDelay: '0.35s' }}
          >
            ⚙
          </div>
          <div
            className="animate-symbol-float absolute left-[112px] bottom-[210px] rounded-full border-[4px] border-black bg-[var(--sesc-pink)] px-5 py-3 text-[34px] font-black text-white shadow-[5px_5px_0_rgba(39,35,72,0.18)]"
            style={{ animationDelay: '0.7s' }}
          >
            ♪
          </div>
          <div
            className="animate-symbol-float absolute right-[118px] bottom-[236px] rounded-3xl border-[4px] border-black bg-[var(--sesc-green-grass)] px-5 py-3 text-[32px] font-black text-white shadow-[5px_5px_0_rgba(39,35,72,0.18)]"
            style={{ animationDelay: '1s' }}
          >
            3D
          </div>

          <img
            src={OTTO_IMAGE_SRC}
            alt="Robô Otto DIY"
            className="absolute bottom-[34px] left-1/2 z-10 h-[92%] max-h-[720px] w-auto -translate-x-1/2 object-contain"
          />
        </div>
      }
    />
  );
}
