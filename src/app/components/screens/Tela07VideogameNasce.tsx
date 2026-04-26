import type { ScreenThemeConfig } from '../../config/screenTheme';
import { useEffect, useRef, useState } from 'react';
import { ScreenTitle } from '../ScreenTitle';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela07VideogameNasceProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA07_THEME: ScreenThemeConfig = {
  appBackgroundClassName: 'app-bg-tile app-bg-pink-grid',
  contentStageThemeClassName: 'content-stage-theme-cream',
};

const TELA07_LAYOUT = createStoryScreenLayout({
  columns: '0.94fr 1.06fr',
});

const GAME_WIDTH = 720;
const GAME_HEIGHT = 400;
const ARENA_INSET = 18;
const PADDLE_HEIGHT = 84;
const PADDLE_WIDTH = 18;
const BALL_SIZE = 18;
const PADDLE_INSET = 10;
const PLAYFIELD_LEFT = ARENA_INSET;
const PLAYFIELD_TOP = ARENA_INSET;
const PLAYFIELD_RIGHT = GAME_WIDTH - ARENA_INSET;
const PLAYFIELD_BOTTOM = GAME_HEIGHT - ARENA_INSET;
const PLAYFIELD_WIDTH = PLAYFIELD_RIGHT - PLAYFIELD_LEFT;
const PLAYFIELD_HEIGHT = PLAYFIELD_BOTTOM - PLAYFIELD_TOP;
const PLAYER_PADDLE_X = PLAYFIELD_LEFT + PADDLE_INSET;
const CPU_PADDLE_X = PLAYFIELD_RIGHT - PADDLE_INSET - PADDLE_WIDTH;
const BALL_START_X = PLAYFIELD_LEFT + PLAYFIELD_WIDTH / 2 - BALL_SIZE / 2;
const BALL_START_Y = PLAYFIELD_TOP + PLAYFIELD_HEIGHT / 2 - BALL_SIZE / 2;

export function Tela07VideogameNasce({ onPrevious, onNext }: Tela07VideogameNasceProps) {
  const [ballPos, setBallPos] = useState({ x: BALL_START_X, y: BALL_START_Y });
  const [ballVel, setBallVel] = useState({ x: 4, y: 3 });
  const [paddleY, setPaddleY] = useState(PLAYFIELD_TOP + PLAYFIELD_HEIGHT / 2 - PADDLE_HEIGHT / 2);
  const [score, setScore] = useState({ player: 0, cpu: 0 });
  const gameRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const gameLoop = () => {
      setBallPos((prev) => {
        let newX = prev.x + ballVel.x;
        let newY = prev.y + ballVel.y;
        let newVelX = ballVel.x;
        let newVelY = ballVel.y;

        if (newY <= PLAYFIELD_TOP || newY >= PLAYFIELD_BOTTOM - BALL_SIZE) {
          newVelY = -newVelY;
          newY = newY <= PLAYFIELD_TOP ? PLAYFIELD_TOP : PLAYFIELD_BOTTOM - BALL_SIZE;
        }

        if (
          newX <= PLAYER_PADDLE_X + PADDLE_WIDTH &&
          newX + BALL_SIZE >= PLAYER_PADDLE_X &&
          newY + BALL_SIZE >= paddleY &&
          newY <= paddleY + PADDLE_HEIGHT
        ) {
          newVelX = Math.abs(newVelX);
          newX = PLAYER_PADDLE_X + PADDLE_WIDTH;
        }

        const cpuPaddleY = Math.max(
          PLAYFIELD_TOP,
          Math.min(PLAYFIELD_BOTTOM - PADDLE_HEIGHT, newY - PADDLE_HEIGHT / 2),
        );

        if (
          newX + BALL_SIZE >= CPU_PADDLE_X &&
          newX <= CPU_PADDLE_X + PADDLE_WIDTH &&
          newY + BALL_SIZE >= cpuPaddleY &&
          newY <= cpuPaddleY + PADDLE_HEIGHT
        ) {
          newVelX = -Math.abs(newVelX);
          newX = CPU_PADDLE_X - BALL_SIZE;
        }

        if (newX <= PLAYFIELD_LEFT - BALL_SIZE) {
          setScore((current) => ({ ...current, cpu: current.cpu + 1 }));
          newX = BALL_START_X;
          newY = BALL_START_Y;
          newVelX = 4;
          newVelY = 3;
        } else if (newX >= PLAYFIELD_RIGHT) {
          setScore((current) => ({ ...current, player: current.player + 1 }));
          newX = BALL_START_X;
          newY = BALL_START_Y;
          newVelX = -4;
          newVelY = -3;
        }

        setBallVel({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    animationRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [ballVel, paddleY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gameRef.current) {
      return;
    }

    const rect = gameRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setPaddleY(Math.max(PLAYFIELD_TOP, Math.min(PLAYFIELD_BOTTOM - PADDLE_HEIGHT, y - PADDLE_HEIGHT / 2)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!gameRef.current || e.touches.length === 0) {
      return;
    }

    e.preventDefault();
    const rect = gameRef.current.getBoundingClientRect();
    const y = e.touches[0].clientY - rect.top;
    setPaddleY(Math.max(PLAYFIELD_TOP, Math.min(PLAYFIELD_BOTTOM - PADDLE_HEIGHT, y - PADDLE_HEIGHT / 2)));
  };

  const cpuPaddleY = Math.max(
    PLAYFIELD_TOP,
    Math.min(PLAYFIELD_BOTTOM - PADDLE_HEIGHT, ballPos.y - PADDLE_HEIGHT / 2),
  );

  return (
    <StoryScreenFrame
      currentScreen={7}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA07_LAYOUT}
      contentStageThemeClassName={TELA07_THEME.contentStageThemeClassName}
      rightClassName="items-stretch"
      leftMainClassName="pt-8"
      leftMain={
        <>
          <ScreenTitle
            title="O videogame nasce!"
            eyebrow="anos 1970-80"
            gapClassName="gap-1"
            eyebrowClassName="text-[24px]"
          />

          <div className="mt-5 space-y-3 font-bold-text text-[26px] leading-[1.34] text-[var(--sesc-ink)]">
            <p>
              Em <span className="text-[var(--sesc-orange)]">1972</span> apareceu o{' '}
              <span className="text-[var(--sesc-blue-dark)]">PONG</span>: uma bolinha quicando entre duas raquetes.
            </p>
            <p>
              Parece simples hoje, mas foi uma <span className="text-[var(--sesc-pink)]">revolução!</span>
            </p>
            <p>
              Depois vieram Space Invaders, Pac-Man e, em 1985, o{' '}
              <span className="text-[var(--sesc-green-grass)]">Super Mario Bros.</span>
            </p>
            <p>
              Cada pulo do Mario é uma <span className="text-[var(--sesc-orange)]">instrução</span> que um programador
              escreveu.
            </p>
          </div>

          <div className="mt-4 flex gap-6">
            <div className="text-[64px]">👾</div>
            <div className="text-[64px]">🕹️</div>
            <div className="text-[64px]">🎮</div>
          </div>
        </>
      }
      right={
        <div className="flex h-full w-full flex-col items-center justify-center gap-5">
          <div className="flex items-center gap-8 rounded-[28px] border-[6px] border-black bg-white px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-center">
              <p className="mb-1 text-[18px] font-black uppercase tracking-[0.08em] text-[var(--sesc-gray-stone)]">VOCÊ</p>
              <p className="text-[54px] font-black text-[var(--sesc-blue-dark)]">{score.player}</p>
            </div>
            <div className="text-[36px] font-black text-[var(--sesc-orange)]">×</div>
            <div className="text-center">
              <p className="mb-1 text-[18px] font-black uppercase tracking-[0.08em] text-[var(--sesc-gray-stone)]">CPU</p>
              <p className="text-[54px] font-black text-[var(--sesc-pink)]">{score.cpu}</p>
            </div>
          </div>

          <div className="rounded-2xl border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-7 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-[20px] font-black uppercase text-black">Arraste a raquete para jogar</p>
          </div>

          <div
            ref={gameRef}
            className="relative cursor-none touch-none overflow-hidden rounded-[22px] border-[8px] border-white bg-[#120826] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            style={{ width: `${GAME_WIDTH}px`, height: `${GAME_HEIGHT}px` }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchMove}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 24% 18%, rgba(249, 200, 67, 0.22), transparent 18%), radial-gradient(circle at 78% 26%, rgba(240, 98, 146, 0.2), transparent 20%), radial-gradient(circle at 52% 82%, rgba(21, 130, 196, 0.24), transparent 24%), linear-gradient(180deg, #181131 0%, #09070f 100%)',
              }}
            />
            <div
              className="absolute opacity-80"
              style={{
                left: `${GAME_WIDTH / 2 - 2}px`,
                top: `${PLAYFIELD_TOP}px`,
                width: '4px',
                height: `${PLAYFIELD_HEIGHT}px`,
                backgroundImage:
                  'repeating-linear-gradient(to bottom, #5fd4ff 0px, #5fd4ff 18px, transparent 18px, transparent 34px)',
              }}
            />
            <div
              className="absolute inset-[18px] rounded-[12px] border border-white/10"
              style={{ boxShadow: 'inset 0 0 0 3px rgba(255,255,255,0.06)' }}
            />

            <div
              className="absolute rounded-full"
              style={{
                left: `${PLAYER_PADDLE_X}px`,
                top: `${paddleY}px`,
                width: `${PADDLE_WIDTH}px`,
                height: `${PADDLE_HEIGHT}px`,
                background: 'linear-gradient(180deg, #5fd4ff 0%, #0eb0ff 100%)',
                boxShadow: '0 0 0 3px rgba(255,255,255,0.12), 0 0 18px rgba(95,212,255,0.6)',
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                left: `${CPU_PADDLE_X}px`,
                top: `${cpuPaddleY}px`,
                width: `${PADDLE_WIDTH}px`,
                height: `${PADDLE_HEIGHT}px`,
                background: 'linear-gradient(180deg, #ff7ab8 0%, #f06292 100%)',
                boxShadow: '0 0 0 3px rgba(255,255,255,0.12), 0 0 18px rgba(240,98,146,0.55)',
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                left: `${ballPos.x}px`,
                top: `${ballPos.y}px`,
                width: `${BALL_SIZE}px`,
                height: `${BALL_SIZE}px`,
                background: 'radial-gradient(circle at 35% 35%, #fff8d1 0%, #f9c843 50%, #ff8a65 100%)',
                boxShadow: '0 0 16px rgba(249,200,67,0.9), 0 0 28px rgba(255,138,101,0.48)',
              }}
            />
          </div>
        </div>
      }
    />
  );
}
