import type { ScreenThemeConfig } from '../../config/screenTheme';
import { Card } from '../Card';
import { ScreenTitle } from '../ScreenTitle';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela04MaquinasGigantesProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA04_THEME: ScreenThemeConfig = {
  appBackgroundClassName: "app-bg-tile app-bg-pink-grid",
  contentStageThemeClassName: "content-stage-theme-soft",
};

const TELA04_LAYOUT = createStoryScreenLayout({
  stageInsetX: '1rem',
  stageInsetY: '1rem',
  contentHorizontalPadding: '6rem',
  contentTopPadding: '9.5rem',
  contentBottomSafeArea: '9rem',
  leftBottomMinHeight: '8.75rem',
});

export function Tela04MaquinasGigantes({ onPrevious, onNext }: Tela04MaquinasGigantesProps) {
  return (
    <StoryScreenFrame
      currentScreen={4}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA04_LAYOUT}
      contentStageThemeClassName={TELA04_THEME.contentStageThemeClassName}
      leftMainClassName="pt-8"
      leftMain={
        <>
          <ScreenTitle
            title={"M\u00E1quinas gigantes"}
            eyebrow="1940"
            gapClassName="gap-1"
            eyebrowClassName="text-[22px]"
          />

          <div className="mt-5 space-y-3 font-bold-text text-[26px] leading-[1.34] text-[var(--sesc-ink)]">
            <p>
              Os primeiros computadores de verdade eram <span className="text-[var(--sesc-orange)]">ENORMES</span>.
            </p>
            <p>
              O <span className="text-[var(--sesc-blue-dark)]">ENIAC</span> pesava{' '}
              <span className="text-[var(--sesc-pink)]">30 toneladas</span> e ocupava uma sala inteira.
            </p>
            <p>
              Tinha mais de 17 mil v{'\u00E1'}lvulas e esquentava tanto que precisava de ventiladores gigantes.
            </p>
          </div>
        </>
      }
      leftBottom={
        <Card variant="you-knew">
          Em <span className="text-[var(--sesc-blue-dark)]">1947</span>, a cientista{' '}
          <span className="text-[var(--sesc-pink)]">Grace Hopper</span> encontrou uma{' '}
          <span className="text-[var(--sesc-orange)]">mariposa</span> de verdade presa dentro de um computador,
          causando defeito. Ela colou o bichinho no caderno e escreveu: &quot;primeiro bug de verdade encontrado&quot;.
          {'\u00C9'} por isso que at{'\u00E9'} hoje a gente chama erro de programa de{' '}
          <span className="text-[var(--sesc-blue-dark)]">bug</span>!
        </Card>
      }
      right={
        <div className="relative">
          <div className="relative">
            <div className="animate-machine-body-hum relative h-[600px] w-[500px] rounded-3xl border-[8px] border-black bg-[var(--sesc-gray-stone)] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid grid-cols-8 gap-3 p-8">
                {[...Array(32)].map((_, i) => (
                  <div
                    key={i}
                    className={`animate-machine-light-twinkle h-[40px] w-[40px] rounded-full border-[3px] border-black ${
                      i % 3 === 0
                        ? 'bg-[var(--sesc-yellow-flower)]'
                        : i % 3 === 1
                          ? 'bg-[var(--sesc-orange)]'
                          : 'bg-[var(--sesc-pink)]'
                    }`}
                    style={{ animationDelay: `${i * 0.08}s` }}
                  ></div>
                ))}
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex h-[120px] gap-4 rounded-xl border-[4px] border-white bg-black p-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="animate-machine-light-twinkle flex-1 rounded-lg border-[3px] border-white bg-[var(--sesc-blue-dark)]"
                    style={{ animationDelay: `${0.35 + i * 0.14}s` }}
                  ></div>
                ))}
              </div>

              <div className="absolute -right-24 top-1/3 h-[120px] w-[120px] rounded-full border-[6px] border-black bg-[var(--sesc-gray-light)]">
                <div className="animate-machine-dial-spin absolute inset-0 flex items-center justify-center">
                  <div className="h-[4px] w-[80px] rotate-0 bg-black"></div>
                  <div className="absolute h-[4px] w-[80px] rotate-90 bg-black"></div>
                  <div className="absolute h-[4px] w-[80px] rotate-45 bg-black"></div>
                  <div className="absolute h-[4px] w-[80px] -rotate-45 bg-black"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[24px] w-[24px] rounded-full bg-black"></div>
                </div>
              </div>
            </div>

            <div className="animate-bug-hover absolute left-1/2 top-4">
              <div className="text-[120px]">{"\u{1F98B}"}</div>
              <div className="absolute -right-12 -top-4 rounded-full border-[3px] border-black bg-[var(--sesc-yellow-flower)] px-4 py-2">
                <p className="whitespace-nowrap text-[20px] font-bold">BUG!</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-32 flex gap-4">
              <div className="w-[60px]">
                <div className="mx-auto h-[32px] w-[32px] rounded-full border-[3px] border-black bg-[#f5d3a8]"></div>
                <div className="mx-auto mt-1 h-[60px] w-[40px] rounded-lg border-[3px] border-black bg-[var(--sesc-blue-dark)]"></div>
                <div className="flex justify-center gap-1">
                  <div className="h-[24px] w-[8px] border-[2px] border-black bg-[var(--sesc-blue-dark)]"></div>
                  <div className="h-[24px] w-[8px] border-[2px] border-black bg-[var(--sesc-blue-dark)]"></div>
                </div>
              </div>

              <div className="w-[60px]">
                <div className="mx-auto h-[32px] w-[32px] rounded-full border-[3px] border-black bg-[#f5d3a8]"></div>
                <div className="mx-auto mt-1 h-[60px] w-[40px] rounded-lg border-[3px] border-black bg-[var(--sesc-pink)]"></div>
                <div className="flex justify-center gap-1">
                  <div className="h-[24px] w-[8px] border-[2px] border-black bg-[var(--sesc-pink)]"></div>
                  <div className="h-[24px] w-[8px] border-[2px] border-black bg-[var(--sesc-pink)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
