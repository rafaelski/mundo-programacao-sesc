import { useState } from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Button } from '../Button';

interface Tela15StandMicroBitProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela15StandMicroBit({ onPrevious, onNext }: Tela15StandMicroBitProps) {
  const [isHeartLit, setIsHeartLit] = useState(true);

  const handleMicroBitClick = () => {
    setIsHeartLit(prev => !prev);
  };

  // Matriz 5x5 do coração
  const heartPattern = [
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0]
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-gradient-to-br from-[var(--sesc-green-grass)] to-[var(--sesc-blue-dark)]">
      <Header currentScreen={15} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex flex-col items-center justify-center gap-12">
        {/* Badge "VEJA AO LADO" */}
        <div className="bg-[var(--sesc-yellow-flower)] border-[6px] border-black rounded-full px-12 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
          <p className="text-[36px] font-black uppercase flex items-center gap-4">
            <span>VEJA AO LADO</span>
            <span className="text-[48px]">→</span>
          </p>
        </div>

        {/* Título */}
        <h2 className="relative">
          <span className="absolute inset-0 text-[120px] font-black uppercase tracking-tight text-black transform translate-x-[8px] translate-y-[8px]">
            micro:bit
          </span>
          <span className="absolute inset-0 text-[120px] font-black uppercase tracking-tight text-[var(--sesc-orange)] transform translate-x-[4px] translate-y-[4px]">
            micro:bit
          </span>
          <span className="relative text-[120px] font-black uppercase tracking-tight text-white">
            micro:bit
          </span>
        </h2>

        {/* micro:bit em destaque com coração */}
        <div className="relative">
          {/* Ícones flutuantes */}
          <div className="absolute -top-20 -left-32 text-[64px]">🧭</div>
          <div className="absolute -top-24 -right-32 text-[64px]">🌡️</div>
          <div className="absolute bottom-0 -left-40 text-[64px]">🎮</div>
          <div className="absolute bottom-0 -right-40 text-[64px]">👟</div>

          {/* micro:bit */}
          <button
            onClick={handleMicroBitClick}
            type="button"
            className="relative bg-[var(--sesc-green-grass)] border-[10px] border-black rounded-[80px] p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] active:scale-105 hover:scale-105 transition-transform cursor-pointer select-none touch-none"
            style={{ width: '500px', height: '400px' }}
            aria-label="Clique para alternar o coração do micro:bit"
          >
            {/* Logo no topo */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white border-[4px] border-black rounded-xl px-6 py-2">
              <p className="text-[24px] font-black">micro:bit</p>
            </div>

            {/* Matriz de LEDs 5x5 */}
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 grid grid-cols-5 gap-3 p-6 bg-black rounded-2xl">
              {heartPattern.map((row, i) =>
                row.map((cell, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`w-[40px] h-[40px] rounded-lg border-[3px] border-gray-700 transition-all duration-300 ${
                      cell === 1 && isHeartLit
                        ? 'bg-[var(--sesc-pink)] shadow-[0_0_20px_var(--sesc-pink)]'
                        : 'bg-gray-800'
                    }`}
                  ></div>
                ))
              )}
            </div>

            {/* Botões A e B */}
            <div className="absolute bottom-[80px] left-[40px] w-[60px] h-[60px] bg-white border-[5px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[28px] font-black">A</p>
            </div>
            <div className="absolute bottom-[80px] right-[40px] w-[60px] h-[60px] bg-white border-[5px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[28px] font-black">B</p>
            </div>

            {/* Pinos de conexão na parte inferior */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-[30px] h-[40px] bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-md"></div>
              ))}
            </div>

            {/* Furos de fixação */}
            <div className="absolute top-8 left-8 w-[24px] h-[24px] bg-black border-[4px] border-white rounded-full"></div>
            <div className="absolute top-8 right-8 w-[24px] h-[24px] bg-black border-[4px] border-white rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-[24px] h-[24px] bg-black border-[4px] border-white rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-[24px] h-[24px] bg-black border-[4px] border-white rounded-full"></div>
          </button>

          {/* Instrução de interação */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-white border-[5px] border-black rounded-2xl px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
            <p className="text-[24px] font-bold text-center">
              👆 Clique no micro:bit para {isHeartLit ? 'apagar' : 'acender'} o coração!
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className="bg-white bg-opacity-95 border-[6px] border-black rounded-3xl p-12 max-w-4xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mt-16">
          <p className="text-[32px] leading-relaxed font-bold text-black text-center">
            O micro:bit é um computador <span className="text-[var(--sesc-orange)]">pequenininho</span> — do tamanho de um cartão — feito especialmente pra crianças aprenderem a programar. Ele tem <span className="text-[var(--sesc-pink)]">luzes, botões e sensores</span>. Você pode fazer ele virar bússola, termômetro, videogame, ou até um <span className="text-[var(--sesc-green-grass)]">contador que mede quantos passos você deu hoje!</span>
          </p>
        </div>

        {/* Botão */}
        <Button variant="primary" onClick={onNext} icon="▶" className="scale-125">
          IR VER O MICRO:BIT
        </Button>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
