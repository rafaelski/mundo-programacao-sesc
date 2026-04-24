import { Card } from '../Card';
import { STORY_SCREEN_THEMES } from '../../config/storyScreenThemes';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela11GamesNoBolsoProps {
  onPrevious: () => void;
  onNext: () => void;
}

const TELA11_LAYOUT = createStoryScreenLayout({
  leftBottomMinHeight: '12rem',
});

export function Tela11GamesNoBolso({ onPrevious, onNext }: Tela11GamesNoBolsoProps) {
  return (
    <StoryScreenFrame
      currentScreen={11}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA11_LAYOUT}
      contentStageThemeClassName={STORY_SCREEN_THEMES.tela11.contentStageThemeClassName}
      leftMain={
        <>
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[72px] font-black uppercase tracking-tight text-black">
                GAMES NO BOLSO
              </span>
              <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[72px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)]">
                GAMES NO BOLSO
              </span>
              <span className="relative text-[72px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)]">
                GAMES NO BOLSO
              </span>
            </h2>
            <p className="mt-2 text-[48px] font-bold text-[var(--sesc-gray-stone)]">anos 2000-2010</p>
          </div>

          <div className="mt-8 space-y-6 text-[32px] font-bold leading-relaxed text-black">
            <p>
              Os celulares viraram <span className="text-[var(--sesc-orange)]">minicomputadores</span>.
            </p>
            <p>
              De repente, dava para jogar, tirar foto e assistir vídeo, tudo{' '}
              <span className="text-[var(--sesc-pink)]">na palma da mão</span>.
            </p>
            <p>
              Angry Birds, Candy Crush, Among Us... <span className="text-[var(--sesc-green-grass)]">milhões de apps!</span>
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-6">
            <div className="text-[72px]">🐦</div>
            <div className="text-[72px]">🍬</div>
            <div className="text-[72px]">👾</div>
            <div className="text-[72px]">📱</div>
          </div>
        </>
      }
      leftBottom={
        <Card variant="you-knew">
          O <span className="text-[var(--sesc-green-grass)]">Minecraft</span>, um dos jogos mais famosos do mundo, começou
          sendo feito por <span className="text-[var(--sesc-orange)]">uma pessoa só</span>: o programador sueco Markus
          Persson. Hoje mais de <span className="text-[var(--sesc-pink)]">300 milhões</span> de cópias já foram vendidas.
        </Card>
      }
      right={
        <div className="relative">
          <div className="relative">
            <div className="mx-auto h-[200px] w-[200px] border-[6px] border-black bg-[#d4a574] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute left-0 right-0 top-0 h-[60px] border-b-0 border-[6px] border-black bg-[#6d4c3d]"></div>
            </div>
            <div className="-mt-[6px] mx-auto h-[200px] w-[160px] border-[6px] border-black bg-[#4a9fd8] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="absolute -left-[80px] top-[200px] h-[180px] w-[60px] border-[6px] border-black bg-[#4a9fd8] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="absolute -right-[80px] top-[200px] h-[180px] w-[60px] -rotate-45 origin-top transform border-[6px] border-black bg-[#4a9fd8] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="absolute bottom-[-220px] left-1/2 h-[220px] w-[60px] -translate-x-[90px] border-[6px] border-black bg-[#2c3e91] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="absolute bottom-[-220px] left-1/2 h-[220px] w-[60px] translate-x-[30px] border-[6px] border-black bg-[#2c3e91] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"></div>
          </div>
        </div>
      }
    />
  );
}
