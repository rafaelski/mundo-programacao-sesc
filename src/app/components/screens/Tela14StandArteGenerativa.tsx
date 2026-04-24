import { useState, useEffect } from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Button } from '../Button';

interface Tela14StandArteGenerativaProps {
  onPrevious: () => void;
  onNext: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
}

export function Tela14StandArteGenerativa({ onPrevious, onNext }: Tela14StandArteGenerativaProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      'var(--sesc-pink)',
      'var(--sesc-yellow-flower)',
      'var(--sesc-green-grass)',
      'var(--sesc-orange)',
      'var(--sesc-blue-dark)'
    ];

    const centerX = 960;
    const centerY = 540;

    const newParticles: Particle[] = [...Array(150)].map((_, i) => {
      const angle = (i / 150) * Math.PI * 2;
      const radius = 50 + Math.random() * 300;
      const speed = 0.5 + Math.random() * 2;

      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 20,
        angle: angle,
        speed: speed
      };
    });

    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => {
        const newAngle = p.angle + p.speed * 0.01;
        const radius = Math.sqrt(Math.pow(p.x - centerX, 2) + Math.pow(p.y - centerY, 2));

        return {
          ...p,
          x: centerX + Math.cos(newAngle) * radius,
          y: centerY + Math.sin(newAngle) * radius,
          angle: newAngle
        };
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-black">
      <div className="relative z-50">
        <Header currentScreen={14} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />
      </div>

      {/* Partículas animadas no fundo */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full border-[3px] border-black"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.03s linear',
              boxShadow: `0 0 ${particle.size / 2}px ${particle.color}`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-50 pt-32 px-20 h-full flex flex-col items-center justify-between pointer-events-auto">
        {/* Badge "VEJA AO LADO" */}
        <div className="bg-[var(--sesc-yellow-flower)] border-[6px] border-black rounded-full px-12 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
          <p className="text-[36px] font-black uppercase flex items-center gap-4">
            <span>VEJA AO LADO</span>
            <span className="text-[48px]">→</span>
          </p>
        </div>

        {/* Conteúdo central */}
        <div className="flex flex-col items-center gap-12">
          {/* Título */}
          <h2 className="relative">
            <span className="absolute inset-0 text-[100px] font-black uppercase tracking-tight text-black transform translate-x-[8px] translate-y-[8px]">
              ARTE GENERATIVA
            </span>
            <span className="absolute inset-0 text-[100px] font-black uppercase tracking-tight text-[var(--sesc-pink)] transform translate-x-[4px] translate-y-[4px]">
              ARTE GENERATIVA
            </span>
            <span className="relative text-[100px] font-black uppercase tracking-tight text-white">
              ARTE GENERATIVA
            </span>
          </h2>

          {/* Texto */}
          <div className="bg-black bg-opacity-80 border-[6px] border-white rounded-3xl p-12 max-w-4xl shadow-[0_0_40px_rgba(249,200,67,0.5)]">
            <p className="text-[32px] leading-relaxed font-bold text-white text-center">
              Programação não serve só pra jogos e robôs. Ela também faz <span className="text-[var(--sesc-yellow-flower)]">ARTE</span>. No stand ao lado, cada partícula que você vê na tela é uma <span className="text-[var(--sesc-pink)]">linha de código</span>. A cor, o tamanho, a velocidade — tudo programado.
            </p>
            <p className="text-[32px] leading-relaxed font-bold text-white text-center mt-6">
              E o mais legal: o desenho <span className="text-[var(--sesc-green-grass)]">NUNCA FICA IGUAL DUAS VEZES</span>. Foi feito com uma ferramenta chamada <span className="text-[var(--sesc-orange)]">p5.js</span>.
            </p>
          </div>

          {/* Tag p5.js */}
          <div className="bg-white border-[5px] border-black rounded-2xl px-8 py-4">
            <code className="text-[24px] font-bold font-mono text-black">
              <span className="text-[var(--sesc-pink)]">function</span> draw() &#123; <span className="text-[var(--sesc-green-grass)]">createParticle</span>(); &#125;
            </code>
          </div>
        </div>

        {/* Botão */}
        <div className="pb-20">
          <Button variant="primary" onClick={onNext} icon="▶" className="scale-125">
            IR VER A ARTE
          </Button>
        </div>
      </div>

      <div className="relative z-50">
        <Navigation onPrevious={onPrevious} onNext={onNext} />
      </div>
    </div>
  );
}
