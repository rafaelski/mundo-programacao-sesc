import type { ScreenThemeConfig } from '../../config/screenTheme';
import { ScreenTitle } from '../ScreenTitle';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela05ElasEnsinaramProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA05_THEME: ScreenThemeConfig = {
  appBackgroundClassName: "app-bg-tile app-bg-mint-hex",
  contentStageThemeClassName: "content-stage-theme-frost",
};

const TELA05_LAYOUT = createStoryScreenLayout({
  columns: '1fr 1fr',
});

export function Tela05ElasEnsinaram({ onPrevious, onNext }: Tela05ElasEnsinaramProps) {
  return (
    <StoryScreenFrame
      currentScreen={5}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA05_LAYOUT}
      contentStageThemeClassName={TELA05_THEME.contentStageThemeClassName}
      leftMainClassName="pt-8"
      leftMain={
        <>
          <ScreenTitle title="Elas ensinaram os computadores" gapClassName="gap-1" />

          <div className="mt-5 space-y-3 font-bold-text text-[26px] leading-[1.34] text-[var(--sesc-ink)]">
            <p>
              Quem programava aquelas máquinas gigantes? Um grupo de <span className="text-[var(--sesc-pink)]">seis mulheres</span>:
            </p>
            <p>
              <span className="text-[var(--sesc-blue-dark)]">Kathleen</span>, <span className="text-[var(--sesc-orange)]">Jean</span>,{' '}
              <span className="text-[var(--sesc-pink)]">Frances</span>, <span className="text-[var(--sesc-green-grass)]">Marlyn</span>,{' '}
              <span className="text-[var(--sesc-blue-dark)]">Ruth</span> e <span className="text-[var(--sesc-orange)]">Betty</span>:
              as programadoras do ENIAC.
            </p>
            <p>
              E em <span className="text-[var(--sesc-orange)]">1969</span>, quando astronautas pousaram na{' '}
              <span className="text-[var(--sesc-yellow-flower)]">Lua</span> pela primeira vez, o código que guiou a nave Apollo 11
              foi feito por uma equipe chefiada por <span className="text-[var(--sesc-blue-dark)]">Margaret Hamilton</span>.
            </p>
            <p>
              A pilha de papel com o programa dela era <span className="text-[var(--sesc-pink)]">quase do tamanho dela mesma!</span>
            </p>
          </div>
        </>
      }
      right={
        <div className="relative scale-[0.96]">
          <div className="relative rounded-3xl border-[12px] border-black bg-[var(--sesc-blue-dark)] p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute -left-4 -top-4 h-12 w-12 rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)]"></div>
            <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)]"></div>
            <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)]"></div>
            <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)]"></div>

            <div className="relative h-[500px] w-[400px] overflow-hidden rounded-2xl border-[6px] border-black bg-[var(--sesc-pink)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.18),transparent_18%),radial-gradient(circle_at_80%_16%,rgba(255,255,255,0.18),transparent_14%),radial-gradient(circle_at_82%_74%,rgba(255,255,255,0.14),transparent_12%)]"></div>

              <div className="absolute -left-14 bottom-8 h-[172px] w-[172px] overflow-hidden rounded-full border-[4px] border-black bg-[#1197b7] shadow-[0_10px_0_rgba(9,60,92,0.18)]">
                <div className="animate-earth-spin absolute inset-0">
                  <div className="absolute left-0 top-10 h-[52px] w-[84px] rounded-r-full bg-[#8cf400]"></div>
                  <div className="absolute left-7 top-0 h-[172px] w-[24px] bg-[#18c2a7] opacity-95"></div>
                  <div className="absolute left-[88px] top-0 h-[172px] w-[18px] bg-[#0f7f99] opacity-95"></div>
                  <div className="absolute inset-x-0 top-[58px] h-[18px] bg-[#087b94] opacity-85"></div>
                  <div className="absolute inset-x-0 bottom-[42px] h-[18px] bg-[#087b94] opacity-85"></div>
                  <div className="absolute right-7 top-8 h-[26px] w-[58px] rounded-full bg-[#0d7e96]"></div>
                  <div className="absolute right-8 bottom-12 h-[24px] w-[72px] rounded-full bg-[#0d7e96]"></div>
                </div>
              </div>

              <div className="absolute right-4 top-4 rotate-[28deg] scale-[0.92]">
                <div className="absolute -left-3 top-[94px] h-[40px] w-[24px] skew-y-[18deg] rounded-bl-[18px] rounded-tl-[10px] border-[4px] border-black bg-[#b4b4bc]"></div>
                <div className="absolute -right-3 top-[94px] h-[40px] w-[24px] -skew-y-[18deg] rounded-br-[18px] rounded-tr-[10px] border-[4px] border-black bg-[#b4b4bc]"></div>
                <div className="relative h-[154px] w-[92px] rounded-b-[34px] rounded-t-[44px] border-[4px] border-black bg-[#e8e8ee]">
                  <div className="absolute inset-x-0 top-0 h-[42px] rounded-t-[40px] bg-[var(--sesc-blue-mid)]"></div>
                  <div className="absolute left-1/2 top-[38px] h-[66px] w-[18px] -translate-x-1/2 bg-[#c9c9cf]"></div>
                  <div className="absolute left-[14px] top-[52px] h-[16px] w-[18px] rounded-sm bg-[#2d2d35]"></div>
                  <div className="absolute right-[14px] top-[52px] h-[16px] w-[18px] rounded-sm bg-[#2d2d35]"></div>
                  <div className="absolute left-[12px] bottom-[28px] h-[14px] w-[20px] rounded-sm bg-[#2d2d35]"></div>
                  <div className="absolute right-[12px] bottom-[28px] h-[14px] w-[20px] rounded-sm bg-[#2d2d35]"></div>
                  <div className="absolute inset-x-0 bottom-0 h-[24px] rounded-b-[30px] bg-[#bebec6]"></div>
                </div>
                <div className="absolute left-[14px] top-[146px] h-[42px] w-[16px] rounded-b-full bg-white"></div>
                <div className="absolute left-[38px] top-[150px] h-[48px] w-[16px] rounded-b-full bg-white"></div>
                <div className="absolute right-[14px] top-[146px] h-[42px] w-[16px] rounded-b-full bg-white"></div>
                <div className="animate-rocket-flame absolute left-[10px] top-[174px] h-[24px] w-[24px] rotate-[14deg] rounded-bl-full rounded-tr-full border-[4px] border-[var(--sesc-pink)] bg-[var(--sesc-orange)]" style={{ animationDelay: '0s' }}></div>
                <div className="animate-rocket-flame absolute left-[34px] top-[182px] h-[26px] w-[26px] rotate-[14deg] rounded-bl-full rounded-tr-full border-[4px] border-[var(--sesc-pink)] bg-[var(--sesc-orange)]" style={{ animationDelay: '0.12s' }}></div>
                <div className="animate-rocket-flame absolute right-[10px] top-[174px] h-[24px] w-[24px] rotate-[14deg] rounded-bl-full rounded-tr-full border-[4px] border-[var(--sesc-pink)] bg-[var(--sesc-orange)]" style={{ animationDelay: '0.24s' }}></div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="h-[312px] w-[252px] rounded-t-full border-[4px] border-black bg-[var(--sesc-blue-dark)]"></div>
                <div className="animate-ada-head-sway absolute left-1/2 top-3">
                  <div className="absolute left-1/2 top-2 h-[140px] w-[150px] -translate-x-1/2 rounded-[44%_44%_52%_52%] border-[4px] border-black bg-[#7b5c4d]"></div>
                  <div className="absolute left-1/2 top-[64px] h-[108px] w-[40px] -translate-x-[70px] rounded-b-[36px] rounded-t-[24px] border-[4px] border-black bg-[#7b5c4d]"></div>
                  <div className="absolute left-1/2 top-[64px] h-[108px] w-[40px] translate-x-[30px] rounded-b-[36px] rounded-t-[24px] border-[4px] border-black bg-[#7b5c4d]"></div>
                  <div className="relative h-[112px] w-[92px] rounded-full border-[4px] border-black bg-[#f5d3a8]"></div>
                  <div className="absolute -top-10 left-1/2 h-[78px] w-[130px] -translate-x-1/2 rounded-full border-[4px] border-black bg-[#6d4c3d]"></div>
                  <div className="absolute left-1/2 top-[12px] h-[28px] w-[90px] -translate-x-1/2 rounded-b-[24px] rounded-t-[18px] border-[4px] border-black bg-[#6d4c3d]"></div>
                  <div className="absolute left-1/2 top-[48px] flex -translate-x-1/2 items-center gap-2.5">
                    <div className="h-[26px] w-[26px] rounded-full border-[4px] border-black bg-[rgba(255,255,255,0.16)]"></div>
                    <div className="h-[26px] w-[26px] rounded-full border-[4px] border-black bg-[rgba(255,255,255,0.16)]"></div>
                  </div>
                </div>
              </div>

              <div className="absolute left-10 top-10 text-[30px] font-bold text-white">✦</div>
              <div className="absolute right-12 top-24 text-[22px] font-bold text-white">✦</div>
              <div className="absolute right-10 bottom-20 text-[28px] font-bold text-white">✦</div>

              <div className="absolute right-5 bottom-6 rotate-[11deg] rounded-xl border-[4px] border-black bg-[var(--sesc-pink)] px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-[24px] font-bold uppercase">Apollo 11</p>
                <p className="text-[18px] font-bold">1969</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border-[4px] border-black bg-[var(--sesc-yellow-flower)] p-4 text-center">
              <p className="text-[24px] font-bold">Margaret Hamilton</p>
            </div>
          </div>
        </div>
      }
    />
  );
}
