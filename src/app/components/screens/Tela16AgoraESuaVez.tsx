import type { ScreenThemeConfig } from '../../config/screenTheme';
import { Button } from '../Button';

interface Tela16AgoraESuaVezProps {
  onRestart: () => void;
}

export const TELA16_THEME: ScreenThemeConfig = {
  appBackgroundClassName: "app-bg-tile app-bg-blue-dots",
  contentStageThemeClassName: "",
};

export function Tela16AgoraESuaVez({ onRestart }: Tela16AgoraESuaVezProps) {
  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-gradient-to-br from-[var(--sesc-yellow-flower)] via-[var(--sesc-pink)] to-[var(--sesc-orange)]">
      {/* Personagens ao fundo acenando */}
      <div className="absolute inset-0 opacity-20">
        {/* Robô Otto */}
        <div className="absolute bottom-32 left-[200px] scale-75">
          <div className="w-[120px] h-[100px] bg-[var(--sesc-orange)] border-[6px] border-black rounded-3xl"></div>
          <div className="w-[100px] h-[80px] bg-[var(--sesc-blue-dark)] border-[6px] border-black rounded-2xl mx-auto -mt-2"></div>
        </div>

        {/* Python (cobra) */}
        <div className="absolute bottom-40 left-[500px] scale-75">
          <svg viewBox="0 0 200 150" className="w-[200px] h-[150px]">
            <path
              d="M 40 120 Q 60 80, 100 90 T 160 80"
              stroke="var(--sesc-green-grass)"
              strokeWidth="40"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* micro:bit */}
        <div className="absolute bottom-36 right-[500px] scale-75">
          <div className="w-[200px] h-[160px] bg-[var(--sesc-green-grass)] border-[8px] border-black rounded-[40px]"></div>
        </div>

        {/* Steve Minecraft */}
        <div className="absolute bottom-28 right-[200px] scale-75">
          <div className="w-[100px] h-[100px] bg-[#d4a574] border-[6px] border-black"></div>
          <div className="w-[80px] h-[100px] bg-[#4a9fd8] border-[6px] border-black mx-auto -mt-2"></div>
        </div>

        {/* Partículas/estrelas */}
        <div className="absolute top-20 left-[300px] text-[48px]">✨</div>
        <div className="absolute top-40 right-[300px] text-[48px]">⭐</div>
        <div className="absolute top-[200px] left-[800px] text-[48px]">💫</div>
        <div className="absolute top-[150px] right-[700px] text-[48px]">🌟</div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-12 px-20">
        {/* Título */}
        <h1 className="relative">
          <span className="absolute inset-0 text-[110px] font-black uppercase tracking-tight text-black transform translate-x-[8px] translate-y-[8px]">
            AGORA É SUA VEZ!
          </span>
          <span className="absolute inset-0 text-[110px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)] transform translate-x-[4px] translate-y-[4px]">
            AGORA É SUA VEZ!
          </span>
          <span className="relative text-[110px] font-black uppercase tracking-tight text-white">
            AGORA É SUA VEZ!
          </span>
        </h1>

        {/* Texto */}
        <div className="bg-white border-[8px] border-black rounded-3xl p-12 max-w-5xl shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-[36px] leading-relaxed font-bold text-black text-center">
            Você acabou de conhecer quase <span className="text-[var(--sesc-pink)]">200 anos de história</span> da programação — desde uma moça imaginando computadores em <span className="text-[var(--sesc-blue-dark)]">1843</span> até a inteligência artificial de hoje.
          </p>
          <p className="text-[36px] leading-relaxed font-bold text-black text-center mt-6">
            Mas a melhor parte ainda nem começou: a parte em que <span className="text-[var(--sesc-orange)]">VOCÊ</span> programa.
          </p>
        </div>

        {/* Frase de fechamento */}
        <div className="bg-[var(--sesc-blue-dark)] border-[10px] border-black rounded-3xl p-16 max-w-6xl shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
          <p className="text-[56px] font-black text-center text-white uppercase leading-tight">
            Todo grande programador um dia foi uma criança com uma ideia.
          </p>
          <div className="flex justify-center gap-6 mt-8 text-[72px]">
            <span>💡</span>
            <span>🚀</span>
            <span>⭐</span>
          </div>
        </div>

        {/* Grid de botões 2x2 */}
        <div className="grid grid-cols-2 gap-8 mt-8">
          <button
            type="button"
            className="bg-[var(--sesc-orange)] border-[8px] border-black rounded-3xl px-12 py-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 cursor-pointer select-none touch-none"
          >
            <div className="flex items-center gap-6 pointer-events-none">
              <span className="text-[64px]">🤖</span>
              <span className="text-[32px] font-black uppercase">Conhecer o Otto</span>
            </div>
          </button>

          <button
            type="button"
            className="bg-[var(--sesc-pink)] border-[8px] border-black rounded-3xl px-12 py-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 cursor-pointer select-none touch-none"
          >
            <div className="flex items-center gap-6 pointer-events-none">
              <span className="text-[64px]">🎨</span>
              <span className="text-[32px] font-black uppercase">Criar Arte com Código</span>
            </div>
          </button>

          <button
            type="button"
            className="bg-[var(--sesc-green-grass)] border-[8px] border-black rounded-3xl px-12 py-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 cursor-pointer select-none touch-none"
          >
            <div className="flex items-center gap-6 pointer-events-none">
              <span className="text-[64px]">💡</span>
              <span className="text-[32px] font-black uppercase">Brincar com o micro:bit</span>
            </div>
          </button>

          <button
            onClick={onRestart}
            type="button"
            className="bg-[var(--sesc-green-grass)] border-[10px] border-black rounded-3xl px-12 py-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 cursor-pointer select-none touch-none ring-8 ring-white ring-offset-4 ring-offset-[var(--sesc-orange)]"
          >
            <div className="flex items-center gap-6 pointer-events-none">
              <span className="text-[72px]">🔄</span>
              <span className="text-[36px] font-black uppercase">Recomeçar Tudo</span>
            </div>
          </button>
        </div>

        {/* Botão GRANDE para recomeçar */}
        <div className="mt-12">
          <Button
            variant="primary"
            onClick={onRestart}
            icon="🔄"
            className="scale-150 bg-[var(--sesc-green-grass)] animate-pulse"
          >
            RECOMEÇAR DO INÍCIO
          </Button>
        </div>

        {/* Rodapé */}
        <div className="mt-8 text-center">
          <p className="text-[24px] font-bold text-white">
            Uma experiência do SESC | O Mundo da Programação 🎮
          </p>
        </div>
      </div>
    </div>
  );
}
