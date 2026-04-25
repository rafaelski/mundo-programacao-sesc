import type { ScreenThemeConfig } from '../../config/screenTheme';
import { Card } from '../Card';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela10GamesNoBolsoProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA10_THEME: ScreenThemeConfig = {
  appBackgroundClassName: "app-bg-tile app-bg-blue-dots",
  contentStageThemeClassName: "content-stage-theme-paper",
};

const TELA10_LAYOUT = createStoryScreenLayout({
  leftBottomMinHeight: '12rem',
});

const MINECRAFT_CHARACTER_SRC = `${import.meta.env.BASE_URL}images/illustrations/minecraft.png`;

export function Tela10GamesNoBolso({ onPrevious, onNext }: Tela10GamesNoBolsoProps) {
  return (
    <StoryScreenFrame
      currentScreen={10}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA10_LAYOUT}
      contentStageThemeClassName={TELA10_THEME.contentStageThemeClassName}
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
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#8b5a2b]">
          <svg viewBox="0 0 720 620" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <rect width="720" height="620" fill="#9ed9ff" />
            <rect x="0" y="380" width="720" height="72" fill="#4fbf45" />
            <rect x="0" y="452" width="720" height="190" fill="#8b5a2b" />
            <g className="minecraft-ground-pattern" opacity="0.28">
              {Array.from({ length: 18 }).map((_, index) => (
                <rect key={`grass-${index}`} x={index * 42 - 10} y="380" width="24" height="24" fill="#2d9f36" />
              ))}
              {Array.from({ length: 18 }).map((_, index) => (
                <rect key={`dirt-${index}`} x={index * 46 + 8} y="468" width="26" height="26" fill="#6d3f1d" />
              ))}
              {Array.from({ length: 12 }).map((_, index) => (
                <rect key={`stone-${index}`} x={index * 66 + 20} y="536" width="34" height="34" fill="#a27a4c" />
              ))}
            </g>

            <g className="minecraft-trees">
              <rect x="64" y="246" width="46" height="134" fill="#6f3d1d" />
              <rect x="20" y="168" width="140" height="72" fill="#2f8f3a" />
              <rect x="44" y="112" width="96" height="78" fill="#3fb34b" />
              <rect x="88" y="190" width="96" height="86" fill="#2f8f3a" />
              <rect x="552" y="268" width="48" height="112" fill="#6f3d1d" />
              <rect x="504" y="196" width="146" height="74" fill="#2f8f3a" />
              <rect x="530" y="136" width="104" height="82" fill="#3fb34b" />
              <rect x="590" y="220" width="92" height="82" fill="#2f8f3a" />
            </g>

            <g className="minecraft-clouds" opacity="0.9">
              <rect x="76" y="76" width="64" height="32" fill="white" />
              <rect x="140" y="98" width="88" height="32" fill="white" />
              <rect x="484" y="66" width="80" height="32" fill="white" />
              <rect x="564" y="88" width="58" height="32" fill="white" />
            </g>
          </svg>

          <img
            src={MINECRAFT_CHARACTER_SRC}
            alt="Personagem inspirado em Minecraft segurando uma placa de código"
            className="pointer-events-none absolute bottom-[-38px] left-1/2 z-10 h-[92%] max-h-[620px] w-auto -translate-x-1/2 object-contain"
          />
        </div>
      }
    />
  );
}
