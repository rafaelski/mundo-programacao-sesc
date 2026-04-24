import type { ScreenThemeConfig } from '../../config/screenTheme';
import { Card } from '../Card';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela09ComputadorEmCasaProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA09_THEME: ScreenThemeConfig = {
  appBackgroundClassName: "app-bg-tile app-bg-binary",
  contentStageThemeClassName: "content-stage-theme-frost",
};

const TELA09_LAYOUT = createStoryScreenLayout({
  leftBottomMinHeight: '10rem',
});

export function Tela09ComputadorEmCasa({ onPrevious, onNext }: Tela09ComputadorEmCasaProps) {
  return (
    <StoryScreenFrame
      currentScreen={9}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA09_LAYOUT}
      contentStageThemeClassName={TELA09_THEME.contentStageThemeClassName}
      leftMain={
        <>
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[64px] font-black uppercase leading-tight tracking-tight text-black">
                UM COMPUTADOR EM CADA CASA
              </span>
              <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[64px] font-black uppercase leading-tight tracking-tight text-[var(--sesc-yellow-flower)]">
                UM COMPUTADOR EM CADA CASA
              </span>
              <span className="relative text-[64px] font-black uppercase leading-tight tracking-tight text-[var(--sesc-blue-dark)]">
                UM COMPUTADOR EM CADA CASA
              </span>
            </h2>
            <p className="mt-2 text-[48px] font-bold text-[var(--sesc-gray-stone)]">anos 1990</p>
          </div>

          <div className="mt-8 space-y-6 text-[32px] font-bold leading-relaxed text-black">
            <p>
              Nos anos 90, os computadores <span className="text-[var(--sesc-pink)]">encolheram</span> e entraram nas casas das pessoas.
            </p>
            <p>
              Apareceram o <span className="text-[var(--sesc-blue-dark)]">Windows</span> e o{' '}
              <span className="text-[var(--sesc-gray-stone)]">Mac</span>, com janelas coloridas, mouse e cliques.
            </p>
            <p>
              E aconteceu algo mágico: um cientista britânico chamado{' '}
              <span className="text-[var(--sesc-orange)]">Tim Berners-Lee</span> inventou a{' '}
              <span className="text-[var(--sesc-green-grass)]">web</span> e conectou o mundo.
            </p>
            <p>
              Nascia a <span className="text-[var(--sesc-pink)]">internet</span> que a gente usa hoje.
            </p>
          </div>
        </>
      }
      leftBottom={
        <Card variant="you-knew">
          O primeiro site do mundo <span className="text-[var(--sesc-blue-dark)]">ainda está no ar</span>. Não tem imagens,
          só texto, e foi publicado em <span className="text-[var(--sesc-pink)]">1991</span>.
        </Card>
      }
      right={
        <div className="relative">
          <div className="relative">
            <div className="h-[80px] w-[600px] rounded-2xl border-[6px] border-black bg-[#8B4513] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="absolute left-[100px] top-[-380px]">
              <div className="mx-auto h-[40px] w-[180px] rounded-b-2xl border-[5px] border-black bg-[var(--sesc-gray-stone)]"></div>
              <div className="-mt-2 mx-auto h-[50px] w-[80px] rounded-lg border-[5px] border-black bg-[var(--sesc-gray-stone)]"></div>
              <div className="-mt-8 h-[320px] w-[400px] rounded-3xl border-[8px] border-black bg-[var(--sesc-gray-light)] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="relative m-6 h-[268px] overflow-hidden rounded-xl border-[4px] border-black bg-[#00a8e8]">
                  <div className="absolute left-4 top-4 h-[150px] w-[200px] rounded-lg border-[3px] border-black bg-[var(--sesc-gray-light)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                    <div className="flex h-[24px] items-center gap-2 bg-[var(--sesc-blue-dark)] px-2">
                      <div className="text-[14px] font-bold text-white">Documento.txt</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex h-[32px] items-center gap-2 border-t-[3px] border-black bg-[var(--sesc-gray-stone)] px-2">
                    <div className="rounded border-[2px] border-black bg-[var(--sesc-green-grass)] px-3 py-1 text-[12px] font-bold">Start</div>
                    <div className="flex-1"></div>
                    <div className="text-[12px] font-bold">12:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-32 -top-40 h-[200px] w-[200px] rounded-full border-[6px] border-black bg-[var(--sesc-green-grass)] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
          </div>
        </div>
      }
    />
  );
}
