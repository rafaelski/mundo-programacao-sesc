import type { ScreenThemeConfig } from '../../config/screenTheme';
import { Card } from '../Card';
import { ScreenTitle } from '../ScreenTitle';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela03PrimeiraProgramadoraProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA03_THEME: ScreenThemeConfig = {
  appBackgroundClassName: "app-bg-tile app-bg-binary",
  contentStageThemeClassName: "content-stage-theme-paper",
};

const TELA03_LAYOUT = createStoryScreenLayout({
  stageInsetX: '1rem',
  stageInsetY: '1rem',
  contentHorizontalPadding: '6rem',
  contentTopPadding: '9.5rem',
  contentBottomSafeArea: '9rem',
  leftBottomMinHeight: '8.75rem',
});

export function Tela03PrimeiraProgramadora({ onPrevious, onNext }: Tela03PrimeiraProgramadoraProps) {
  return (
    <StoryScreenFrame
      currentScreen={3}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA03_LAYOUT}
      contentStageThemeClassName={TELA03_THEME.contentStageThemeClassName}
      leftMainClassName="pt-8"
      leftMain={
        <>
          <ScreenTitle
            title="A primeira programadora"
            eyebrow="1843"
            gapClassName="gap-1"
            eyebrowClassName="text-[24px]"
          />

          <div className="mt-5 space-y-3 font-bold-text text-[26px] leading-[1.34] text-[var(--sesc-ink)]">
            <p>
              Há quase <span className="text-[var(--sesc-pink)]">200 anos</span>, uma mulher chamada{' '}
              <span className="text-[var(--sesc-blue-dark)]">Ada Lovelace</span> escreveu o primeiro programa de
              computador da história.
            </p>
            <p>
              O mais impressionante: <span className="text-[var(--sesc-orange)]">o computador ainda nem existia!</span>{' '}
              Ela só imaginou como seria.
            </p>
            <p>Ada viveu na Inglaterra, era filha de um poeta famoso e amava matemática desde pequena.</p>
          </div>
        </>
      }
      leftBottom={
        <Card variant="you-knew">
          A palavra <span className="text-[var(--sesc-blue-dark)]">ALGORITMO</span> vem do nome de um matemático árabe
          chamado <span className="text-[var(--sesc-pink)]">Al-Khwarizmi</span>, que viveu há mais de 1.000 anos.
        </Card>
      }
      right={
        <div className="relative scale-[0.96]">
          <div className="relative rounded-3xl border-[12px] border-black bg-[var(--sesc-blue-dark)] p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute -left-4 -top-4 h-12 w-12 rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)]"></div>
            <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)]"></div>
            <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)]"></div>
            <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)]"></div>

            <div className="relative h-[500px] w-[400px] overflow-hidden rounded-2xl border-[6px] border-black bg-[var(--sesc-pink)]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="h-[350px] w-[300px] rounded-t-full border-[4px] border-black bg-[var(--sesc-blue-dark)]"></div>
                <div className="animate-ada-head-sway absolute left-1/2 top-0">
                  <div className="h-[120px] w-[100px] rounded-full border-[4px] border-black bg-[#f5d3a8]"></div>
                  <div className="absolute -top-8 left-1/2 h-[100px] w-[140px] -translate-x-1/2 rounded-full border-[4px] border-black bg-black"></div>
                </div>
              </div>

              <div className="animate-symbol-float absolute left-8 top-8 -rotate-12 transform text-[32px] font-bold text-white" style={{ animationDelay: '0s' }}>π</div>
              <div className="animate-symbol-float absolute right-12 top-12 rotate-12 transform text-[28px] font-bold text-white" style={{ animationDelay: '0.8s' }}>∑</div>
              <div className="animate-symbol-float absolute bottom-20 left-12 -rotate-6 transform text-[24px] font-bold text-white" style={{ animationDelay: '1.2s' }}>x²</div>
              <div className="animate-symbol-float absolute bottom-32 right-8 rotate-15 transform text-[26px] font-bold text-white" style={{ animationDelay: '0.4s' }}>√</div>
              <div className="animate-symbol-float absolute right-16 top-1/3 text-[30px] font-bold text-white" style={{ animationDelay: '1.6s' }}>∞</div>
            </div>

            <div className="mt-6 rounded-xl border-[4px] border-black bg-[var(--sesc-yellow-flower)] p-4 text-center">
              <p className="text-[24px] font-bold uppercase">Ada Lovelace</p>
              <p className="text-[20px] font-bold">1815 - 1852</p>
            </div>
          </div>
        </div>
      }
    />
  );
}
