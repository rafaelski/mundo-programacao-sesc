import { useState, useEffect } from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';

interface Tela08TartarugaDesenhaProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela08TartarugaDesenha({ onPrevious, onNext }: Tela08TartarugaDesenhaProps) {
  const [drawingStep, setDrawingStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDrawingStep(prev => (prev + 1) % 16);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-[var(--sesc-beige-light)]">
      <Header currentScreen={8} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex items-center gap-16">
        {/* Lado esquerdo - Conteúdo texto */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Título */}
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 text-[64px] font-black uppercase tracking-tight text-black transform translate-x-[6px] translate-y-[6px] leading-tight">
                UMA TARTARUGA QUE DESENHA
              </span>
              <span className="absolute inset-0 text-[64px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)] transform translate-x-[3px] translate-y-[3px] leading-tight">
                UMA TARTARUGA QUE DESENHA
              </span>
              <span className="relative text-[64px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)] leading-tight">
                UMA TARTARUGA QUE DESENHA
              </span>
            </h2>
            <p className="text-[48px] font-bold text-[var(--sesc-gray-stone)] mt-2">anos 1980</p>
          </div>

          {/* Texto principal */}
          <div className="text-[32px] leading-relaxed font-bold text-black space-y-6">
            <p>
              Nos anos 80, um professor chamado <span className="text-[var(--sesc-blue-dark)]">Seymour Papert</span> criou uma linguagem especial pra crianças: o <span className="text-[var(--sesc-orange)]">LOGO</span>.
            </p>
            <p>
              Ela tinha uma <span className="text-[var(--sesc-green-grass)]">tartaruguinha</span> na tela que andava, virava e desenhava conforme você mandava.
            </p>
            <p>
              Se você dizia <span className="text-[var(--sesc-pink)]">'ande 100, vire 90, ande 100, vire 90...'</span>
            </p>
            <p className="text-[40px]">
              — pronto, um <span className="text-[var(--sesc-yellow-flower)]">quadrado!</span>
            </p>
          </div>

          {/* Comandos exemplo */}
          <div className="bg-black border-[6px] border-white rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <code className="text-[28px] font-bold text-[var(--sesc-green-grass)] font-mono space-y-2 block">
              <div>FORWARD 100</div>
              <div>RIGHT 90</div>
              <div>FORWARD 100</div>
              <div>RIGHT 90</div>
              <div className="text-[var(--sesc-yellow-flower)]">REPEAT 4</div>
            </code>
          </div>
        </div>

        {/* Lado direito - Tartaruga animada desenhando */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[700px] h-[700px] bg-white border-[8px] border-black rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* Canvas de desenho */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 700">
              {/* Quadrado */}
              {drawingStep >= 1 && (
                <path
                  d="M 200 350 L 500 350"
                  stroke="var(--sesc-pink)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              )}
              {drawingStep >= 2 && (
                <path
                  d="M 500 350 L 500 650"
                  stroke="var(--sesc-pink)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              )}
              {drawingStep >= 3 && (
                <path
                  d="M 500 650 L 200 650"
                  stroke="var(--sesc-pink)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              )}
              {drawingStep >= 4 && (
                <path
                  d="M 200 650 L 200 350"
                  stroke="var(--sesc-pink)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              )}

              {/* Estrela */}
              {drawingStep >= 6 && (
                <path
                  d="M 100 200 L 180 100"
                  stroke="var(--sesc-yellow-flower)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              )}
              {drawingStep >= 7 && (
                <path
                  d="M 180 100 L 200 200"
                  stroke="var(--sesc-yellow-flower)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              )}
              {drawingStep >= 8 && (
                <path
                  d="M 200 200 L 280 150"
                  stroke="var(--sesc-yellow-flower)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              )}
              {drawingStep >= 9 && (
                <path
                  d="M 280 150 L 220 220"
                  stroke="var(--sesc-yellow-flower)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              )}
              {drawingStep >= 10 && (
                <path
                  d="M 220 220 L 100 200 Z"
                  stroke="var(--sesc-yellow-flower)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              )}

              {/* Flor/círculos */}
              {drawingStep >= 12 && (
                <circle cx="550" cy="120" r="40" fill="none" stroke="var(--sesc-orange)" strokeWidth="8" />
              )}
              {drawingStep >= 13 && (
                <circle cx="520" cy="80" r="30" fill="none" stroke="var(--sesc-orange)" strokeWidth="6" />
              )}
              {drawingStep >= 14 && (
                <circle cx="580" cy="80" r="30" fill="none" stroke="var(--sesc-orange)" strokeWidth="6" />
              )}
              {drawingStep >= 15 && (
                <circle cx="520" cy="150" r="25" fill="none" stroke="var(--sesc-orange)" strokeWidth="6" />
              )}

              {/* Setas indicando direção */}
              {drawingStep === 1 && (
                <path d="M 480 340 L 500 350 L 480 360" fill="var(--sesc-gray-stone)" />
              )}
              {drawingStep === 2 && (
                <path d="M 510 630 L 500 650 L 490 630" fill="var(--sesc-gray-stone)" />
              )}
              {drawingStep === 3 && (
                <path d="M 220 660 L 200 650 L 220 640" fill="var(--sesc-gray-stone)" />
              )}
              {drawingStep === 4 && (
                <path d="M 190 370 L 200 350 L 210 370" fill="var(--sesc-gray-stone)" />
              )}
            </svg>

            {/* Tartaruga */}
            <div
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                left: drawingStep < 1 ? '200px' :
                      drawingStep < 2 ? '500px' :
                      drawingStep < 3 ? '500px' :
                      drawingStep < 4 ? '200px' :
                      drawingStep < 6 ? '200px' :
                      drawingStep < 11 ? '150px' :
                      '550px',
                top: drawingStep < 1 ? '350px' :
                     drawingStep < 2 ? '350px' :
                     drawingStep < 3 ? '650px' :
                     drawingStep < 4 ? '650px' :
                     drawingStep < 6 ? '350px' :
                     drawingStep < 11 ? '150px' :
                     '120px',
                transform: `translate(-50%, -50%) rotate(${
                  drawingStep < 1 ? 0 :
                  drawingStep < 2 ? 90 :
                  drawingStep < 3 ? 180 :
                  drawingStep < 4 ? 270 :
                  drawingStep < 11 ? 45 :
                  0
                }deg)`
              }}
            >
              {/* Corpo da tartaruga */}
              <div className="relative">
                {/* Casco */}
                <div className="w-[80px] h-[60px] bg-[var(--sesc-green-grass)] border-[5px] border-black rounded-full relative">
                  {/* Padrão do casco */}
                  <div className="absolute inset-0 flex items-center justify-center gap-1">
                    <div className="w-[20px] h-[20px] bg-[#4a7c2f] border-[2px] border-black rounded-full"></div>
                    <div className="w-[20px] h-[20px] bg-[#4a7c2f] border-[2px] border-black rounded-full"></div>
                  </div>
                </div>

                {/* Cabeça */}
                <div className="absolute -top-2 -right-8 w-[30px] h-[25px] bg-[#6fb33f] border-[4px] border-black rounded-full">
                  {/* Olhos */}
                  <div className="absolute top-1 right-1 w-[6px] h-[6px] bg-black rounded-full"></div>
                </div>

                {/* Patas */}
                <div className="absolute -left-2 top-1 w-[15px] h-[12px] bg-[#6fb33f] border-[3px] border-black rounded-full"></div>
                <div className="absolute -left-2 bottom-1 w-[15px] h-[12px] bg-[#6fb33f] border-[3px] border-black rounded-full"></div>
                <div className="absolute -right-2 top-1 w-[15px] h-[12px] bg-[#6fb33f] border-[3px] border-black rounded-full"></div>
                <div className="absolute -right-2 bottom-1 w-[15px] h-[12px] bg-[#6fb33f] border-[3px] border-black rounded-full"></div>
              </div>
            </div>

            {/* Legenda */}
            <div className="absolute bottom-8 left-8 bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-xl px-6 py-3">
              <p className="text-[20px] font-bold">
                {drawingStep < 5 ? 'Desenhando quadrado...' :
                 drawingStep < 11 ? 'Desenhando estrela...' :
                 'Desenhando flor...'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
