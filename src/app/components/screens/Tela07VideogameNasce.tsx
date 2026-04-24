import { useState, useEffect, useRef } from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';

interface Tela07VideogameNasceProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela07VideogameNasce({ onPrevious, onNext }: Tela07VideogameNasceProps) {
  const [ballPos, setBallPos] = useState({ x: 400, y: 250 });
  const [ballVel, setBallVel] = useState({ x: 4, y: 3 });
  const [paddleY, setPaddleY] = useState(200);
  const [score, setScore] = useState({ player: 0, cpu: 0 });
  const gameRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 500;
  const PADDLE_HEIGHT = 100;
  const PADDLE_WIDTH = 20;
  const BALL_SIZE = 20;

  useEffect(() => {
    const gameLoop = () => {
      setBallPos(prev => {
        let newX = prev.x + ballVel.x;
        let newY = prev.y + ballVel.y;
        let newVelX = ballVel.x;
        let newVelY = ballVel.y;

        // Colisão com topo e base
        if (newY <= 0 || newY >= GAME_HEIGHT - BALL_SIZE) {
          newVelY = -newVelY;
          newY = newY <= 0 ? 0 : GAME_HEIGHT - BALL_SIZE;
        }

        // Colisão com paddle do jogador (esquerda)
        if (newX <= PADDLE_WIDTH && newY + BALL_SIZE >= paddleY && newY <= paddleY + PADDLE_HEIGHT) {
          newVelX = Math.abs(newVelX);
          newX = PADDLE_WIDTH;
        }

        // Colisão com paddle CPU (direita)
        const cpuPaddleY = Math.max(0, Math.min(GAME_HEIGHT - PADDLE_HEIGHT, newY - PADDLE_HEIGHT / 2));
        if (newX >= GAME_WIDTH - PADDLE_WIDTH - BALL_SIZE && newY + BALL_SIZE >= cpuPaddleY && newY <= cpuPaddleY + PADDLE_HEIGHT) {
          newVelX = -Math.abs(newVelX);
          newX = GAME_WIDTH - PADDLE_WIDTH - BALL_SIZE;
        }

        // Pontuação
        if (newX <= 0) {
          setScore(s => ({ ...s, cpu: s.cpu + 1 }));
          newX = GAME_WIDTH / 2;
          newY = GAME_HEIGHT / 2;
          newVelX = 4;
          newVelY = 3;
        } else if (newX >= GAME_WIDTH - BALL_SIZE) {
          setScore(s => ({ ...s, player: s.player + 1 }));
          newX = GAME_WIDTH / 2;
          newY = GAME_HEIGHT / 2;
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
    if (gameRef.current) {
      const rect = gameRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      setPaddleY(Math.max(0, Math.min(GAME_HEIGHT - PADDLE_HEIGHT, y - PADDLE_HEIGHT / 2)));
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (gameRef.current && e.touches.length > 0) {
      e.preventDefault();
      const rect = gameRef.current.getBoundingClientRect();
      const y = e.touches[0].clientY - rect.top;
      setPaddleY(Math.max(0, Math.min(GAME_HEIGHT - PADDLE_HEIGHT, y - PADDLE_HEIGHT / 2)));
    }
  };

  const cpuPaddleY = Math.max(0, Math.min(GAME_HEIGHT - PADDLE_HEIGHT, ballPos.y - PADDLE_HEIGHT / 2));

  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-[var(--sesc-beige-light)]">
      <Header currentScreen={7} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex items-center gap-16">
        {/* Lado esquerdo - Conteúdo texto */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Título */}
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 text-[72px] font-black uppercase tracking-tight text-black transform translate-x-[6px] translate-y-[6px]">
                O VIDEOGAME NASCE!
              </span>
              <span className="absolute inset-0 text-[72px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)] transform translate-x-[3px] translate-y-[3px]">
                O VIDEOGAME NASCE!
              </span>
              <span className="relative text-[72px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)]">
                O VIDEOGAME NASCE!
              </span>
            </h2>
            <p className="text-[48px] font-bold text-[var(--sesc-gray-stone)] mt-2">anos 1970–80</p>
          </div>

          {/* Texto principal */}
          <div className="text-[32px] leading-relaxed font-bold text-black space-y-6">
            <p>
              Em <span className="text-[var(--sesc-orange)]">1972</span> apareceu o <span className="text-[var(--sesc-blue-dark)]">PONG</span> — uma bolinha quicando entre duas raquetes.
            </p>
            <p>
              Parece simples hoje, mas foi uma <span className="text-[var(--sesc-pink)]">revolução!</span>
            </p>
            <p>
              Depois vieram Space Invaders, Pac-Man e, em 1985, o <span className="text-[var(--sesc-green-grass)]">Super Mario Bros</span>.
            </p>
            <p>
              Cada pulo do Mario é uma <span className="text-[var(--sesc-orange)]">instrução</span> que um programador escreveu.
            </p>
          </div>

          {/* Ícones de jogos clássicos */}
          <div className="flex gap-6 mt-4">
            <div className="text-[64px]">👾</div>
            <div className="text-[64px]">🕹️</div>
            <div className="text-[64px]">🎮</div>
          </div>
        </div>

        {/* Lado direito - Mini Pong jogável */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          {/* Placar */}
          <div className="flex items-center gap-12 bg-white border-[6px] border-black rounded-3xl px-12 py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-center">
              <p className="text-[24px] font-bold text-[var(--sesc-gray-stone)] mb-2">VOCÊ</p>
              <p className="text-[72px] font-black text-[var(--sesc-blue-dark)]">{score.player}</p>
            </div>
            <div className="text-[48px] font-black">×</div>
            <div className="text-center">
              <p className="text-[24px] font-bold text-[var(--sesc-gray-stone)] mb-2">CPU</p>
              <p className="text-[72px] font-black text-[var(--sesc-pink)]">{score.cpu}</p>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-2xl px-8 py-4">
            <p className="text-[24px] font-bold text-black uppercase">
              ↕️ ARRASTE A RAQUETE PRA JOGAR
            </p>
          </div>

          {/* Quadra de Pong */}
          <div
            ref={gameRef}
            className="relative bg-black border-[8px] border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-none touch-none"
            style={{ width: `${GAME_WIDTH}px`, height: `${GAME_HEIGHT}px` }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchMove}
          >
            {/* Linha central pontilhada */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-white opacity-30"
              style={{
                backgroundImage: 'repeating-linear-gradient(to bottom, white 0px, white 20px, transparent 20px, transparent 40px)'
              }}
            ></div>

            {/* Paddle jogador (esquerda) */}
            <div
              className="absolute bg-white"
              style={{
                left: '0px',
                top: `${paddleY}px`,
                width: `${PADDLE_WIDTH}px`,
                height: `${PADDLE_HEIGHT}px`
              }}
            ></div>

            {/* Paddle CPU (direita) */}
            <div
              className="absolute bg-white"
              style={{
                right: '0px',
                top: `${cpuPaddleY}px`,
                width: `${PADDLE_WIDTH}px`,
                height: `${PADDLE_HEIGHT}px`
              }}
            ></div>

            {/* Bolinha */}
            <div
              className="absolute bg-white rounded-sm"
              style={{
                left: `${ballPos.x}px`,
                top: `${ballPos.y}px`,
                width: `${BALL_SIZE}px`,
                height: `${BALL_SIZE}px`
              }}
            ></div>
          </div>
        </div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
