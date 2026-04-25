import type { ScreenThemeConfig } from '../../config/screenTheme';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela11EAgoraProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA11_THEME: ScreenThemeConfig = {
  appBackgroundClassName: "app-bg-tile app-bg-pink-grid",
  contentStageThemeClassName: "content-stage-theme-cream",
};

const TELA11_LAYOUT = createStoryScreenLayout({
  leftBottomMinHeight: '15rem',
  columns: '0.94fr 1.06fr',
});

export function Tela11EAgora({ onPrevious, onNext }: Tela11EAgoraProps) {
  return (
    <StoryScreenFrame
      currentScreen={11}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA11_LAYOUT}
      contentStageThemeClassName={TELA11_THEME.contentStageThemeClassName}
      leftMain={
        <>
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[80px] font-black uppercase tracking-tight text-black">
                E AGORA?
              </span>
              <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[80px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)]">
                E AGORA?
              </span>
              <span className="relative text-[80px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)]">
                E AGORA?
              </span>
            </h2>
            <p className="mt-2 text-[48px] font-bold text-[var(--sesc-gray-stone)]">anos 2020</p>
          </div>

          <div className="mt-8 space-y-6 text-[32px] font-bold leading-relaxed text-black">
            <p>
              Hoje, programadores usam ferramentas poderosas chamadas <span className="text-[var(--sesc-orange)]">motores de jogo</span>,
              como a <span className="text-[var(--sesc-blue-dark)]">Unity</span> e a Unreal, para criar jogos incríveis em 3D.
            </p>
            <p>
              E a <span className="text-[var(--sesc-pink)]">inteligência artificial</span> aprendeu a desenhar, conversar e até
              programar sozinha.
            </p>
          </div>

          <div className="relative mt-8 rounded-3xl border-[6px] border-black bg-[var(--sesc-green-grass)] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-center text-[32px] font-bold text-white">Este app que você está usando agora foi feito com Unity!</p>
          </div>
        </>
      }
      leftBottom={
        <div className="mt-8 rotate-[-1deg] transform rounded-3xl border-[8px] border-black bg-[var(--sesc-yellow-flower)] p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-center text-[42px] font-black uppercase leading-tight text-[var(--sesc-blue-dark)]">
            Se você pudesse programar qualquer coisa no mundo, o que seria?
          </p>
          <div className="mt-6 text-center text-[64px]">💭 🚀 🎨 🎮 🤖</div>
        </div>
      }
      right={
        <div className="relative h-[700px] w-full">
          <div className="absolute left-20 top-0 h-[350px] w-[500px] overflow-hidden rounded-3xl border-[8px] border-black bg-[var(--sesc-blue-dark)] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="relative h-full w-full bg-gradient-to-b from-[#4a9fd8] to-[var(--sesc-green-grass)]"></div>
          </div>
          <div className="absolute right-12 top-48 h-[240px] w-[240px] rounded-[120px_120px_100px_100px] border-[8px] border-black bg-[var(--sesc-pink)] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute bottom-24 left-12 rotate-3 transform rounded-2xl border-[6px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-1 font-mono text-[18px]">
              <div>
                <span className="text-[var(--sesc-pink)]">function</span>{' '}
                <span className="text-[var(--sesc-blue-dark)]">criar()</span>
              </div>
              <div className="text-[var(--sesc-green-grass)]">{'{'}</div>
              <div className="ml-4">
                <span className="text-[var(--sesc-orange)]">return</span> ✨
              </div>
              <div className="text-[var(--sesc-green-grass)]">{'}'}</div>
            </div>
          </div>
        </div>
      }
    />
  );
}
