import type { ScreenThemeConfig } from '../../config/screenTheme';
import { Card } from '../Card';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela08ComputadorEmCasaProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA08_THEME: ScreenThemeConfig = {
  appBackgroundClassName: "app-bg-tile app-bg-binary",
  contentStageThemeClassName: "content-stage-theme-frost",
};

const TELA08_LAYOUT = createStoryScreenLayout({
  leftBottomMinHeight: '10rem',
});

export function Tela08ComputadorEmCasa({ onPrevious, onNext }: Tela08ComputadorEmCasaProps) {
  return (
    <StoryScreenFrame
      currentScreen={8}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA08_LAYOUT}
      contentStageThemeClassName={TELA08_THEME.contentStageThemeClassName}
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
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <div className="relative h-[620px] w-[690px]">
            <div className="absolute bottom-[78px] left-[62px] h-[58px] w-[496px] rounded-[16px] border-[6px] border-black bg-[#9a4f18] shadow-[8px_8px_0_rgba(0,0,0,1)]" />

            <div className="absolute bottom-[124px] left-[78px]">
              <div className="relative h-[382px] w-[474px] rounded-[42px] border-[8px] border-black bg-[#d8d3bf] shadow-[10px_10px_0_rgba(0,0,0,1)]">
                <div className="absolute inset-x-[24px] top-[28px] h-[274px] overflow-hidden rounded-[24px] border-[6px] border-black bg-[#16a9d4] animate-retro-screen-glow">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,transparent_38%,rgba(9,60,92,0.18)_100%)]" />

                  <div className="animate-retro-window-pop absolute left-[32px] top-[32px] h-[132px] w-[190px] rounded-[10px] border-[4px] border-black bg-[#f1eee2] shadow-[5px_5px_0_rgba(39,35,72,0.35)]">
                    <div className="flex h-[28px] items-center justify-between rounded-t-[5px] bg-[var(--sesc-blue-dark)] px-3">
                      <span className="text-[13px] font-black text-white">Documento.txt</span>
                      <span className="text-[13px] font-black text-white">x</span>
                    </div>
                    <div className="space-y-2 px-4 py-4">
                      <div className="h-[7px] w-[130px] rounded-full bg-[var(--sesc-gray-stone)]" />
                      <div className="h-[7px] w-[96px] rounded-full bg-[var(--sesc-gray-stone)]" />
                      <div className="h-[7px] w-[148px] rounded-full bg-[var(--sesc-gray-stone)]" />
                    </div>
                  </div>

                  <div
                    className="animate-retro-window-pop absolute left-[178px] top-[88px] h-[118px] w-[174px] rounded-[10px] border-[4px] border-black bg-[var(--sesc-yellow-soft)] shadow-[5px_5px_0_rgba(39,35,72,0.35)]"
                    style={{ animationDelay: '1.1s' }}
                  >
                    <div className="h-[26px] rounded-t-[5px] bg-[var(--sesc-pink)] px-3 text-[13px] font-black text-white">
                      Pintura.bmp
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-4">
                      <div className="h-8 rounded-md border-[3px] border-black bg-[var(--sesc-green-grass)]" />
                      <div className="h-8 rounded-md border-[3px] border-black bg-[var(--sesc-yellow-flower)]" />
                      <div className="h-8 rounded-md border-[3px] border-black bg-[var(--sesc-orange)]" />
                    </div>
                  </div>

                  <div
                    className="animate-retro-window-pop absolute left-[70px] top-[154px] h-[74px] w-[148px] rounded-[10px] border-[4px] border-black bg-white shadow-[5px_5px_0_rgba(39,35,72,0.35)]"
                    style={{ animationDelay: '2.2s' }}
                  >
                    <div className="h-[24px] rounded-t-[5px] bg-[var(--sesc-green-grass)] px-3 text-[12px] font-black text-black">
                      Internet
                    </div>
                    <div className="px-4 py-3 text-[18px] font-black text-[var(--sesc-blue-dark)]">www</div>
                  </div>

                  <svg
                    className="animate-retro-cursor-path absolute left-0 top-0 h-[42px] w-[42px]"
                    viewBox="0 0 42 42"
                    aria-hidden="true"
                  >
                    <path d="M5 3 L34 24 L20 27 L14 39 Z" fill="white" stroke="black" strokeWidth="4" strokeLinejoin="round" />
                  </svg>

                  <div className="absolute bottom-0 left-0 right-0 flex h-[34px] items-center gap-3 border-t-[4px] border-black bg-[#8a8a82] px-3">
                    <div className="rounded-md border-[3px] border-black bg-[var(--sesc-green-grass)] px-4 py-1 text-[13px] font-black">
                      Start
                    </div>
                    <div className="h-[18px] flex-1 rounded bg-[#6f6f6a]" />
                    <div className="text-[13px] font-black text-[var(--sesc-ink)]">12:00</div>
                  </div>
                </div>

                <div className="absolute bottom-[34px] left-1/2 h-[26px] w-[92px] -translate-x-1/2 rounded-full border-[5px] border-black bg-[#aaa58f]" />
              </div>

              <div className="mx-auto h-[52px] w-[132px] rounded-b-[22px] border-x-[7px] border-b-[7px] border-black bg-[#b9b39d]" />
              <div className="-mt-[7px] mx-auto h-[38px] w-[240px] rounded-[18px] border-[7px] border-black bg-[#d8d3bf] shadow-[8px_8px_0_rgba(0,0,0,1)]" />
            </div>

            <div className="absolute bottom-[158px] right-[30px] h-[320px] w-[108px] rounded-[22px] border-[7px] border-black bg-[#c9c2aa] shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <div className="mx-auto mt-8 h-[52px] w-[52px] rounded-full border-[5px] border-black bg-[var(--sesc-blue-dark)]" />
              <div className="mx-auto mt-8 h-[22px] w-[60px] rounded-full border-[4px] border-black bg-[var(--sesc-green-grass)]" />
              <div className="mx-auto mt-5 h-[22px] w-[60px] rounded-full border-[4px] border-black bg-[var(--sesc-pink)]" />
              <div className="absolute bottom-6 left-1/2 h-[74px] w-[48px] -translate-x-1/2 rounded-xl border-[4px] border-black bg-[#8a8a82]" />
            </div>

            <div className="absolute bottom-[26px] left-[96px] h-[78px] w-[420px] -skew-x-6 rounded-[16px] border-[6px] border-black bg-[#e6dfc8] shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <div className="grid grid-cols-12 gap-2 p-4">
                {Array.from({ length: 36 }).map((_, index) => (
                  <div key={index} className="h-[10px] rounded-full border-[2px] border-black bg-white" />
                ))}
              </div>
            </div>

            <div className="absolute bottom-[30px] right-[76px] h-[76px] w-[110px] rounded-[52px_52px_38px_38px] border-[6px] border-black bg-[#d8d3bf] shadow-[7px_7px_0_rgba(0,0,0,1)]">
              <div className="absolute left-1/2 top-0 h-[34px] w-[5px] -translate-x-1/2 bg-black" />
            </div>
          </div>
        </div>
      }
    />
  );
}
