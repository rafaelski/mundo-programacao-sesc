import { Header } from '../Header';
import { Navigation } from '../Navigation';

interface Tela12EAgoraProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela12EAgora({ onPrevious, onNext }: Tela12EAgoraProps) {
  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-[var(--sesc-beige-light)]">
      <Header currentScreen={12} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex items-center gap-16">
        {/* Lado esquerdo - Conteúdo texto */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Título */}
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 text-[80px] font-black uppercase tracking-tight text-black transform translate-x-[6px] translate-y-[6px]">
                E AGORA?
              </span>
              <span className="absolute inset-0 text-[80px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)] transform translate-x-[3px] translate-y-[3px]">
                E AGORA?
              </span>
              <span className="relative text-[80px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)]">
                E AGORA?
              </span>
            </h2>
            <p className="text-[48px] font-bold text-[var(--sesc-gray-stone)] mt-2">anos 2020</p>
          </div>

          {/* Texto principal */}
          <div className="text-[32px] leading-relaxed font-bold text-black space-y-6">
            <p>
              Hoje, programadores usam ferramentas poderosas chamadas <span className="text-[var(--sesc-orange)]">MOTORES DE JOGO</span> — como a <span className="text-[var(--sesc-blue-dark)]">UNITY</span> e a Unreal — pra criar jogos incríveis em 3D.
            </p>
            <p>
              E a <span className="text-[var(--sesc-pink)]">INTELIGÊNCIA ARTIFICIAL</span> aprendeu a desenhar, conversar e até programar sozinha.
            </p>
          </div>

          {/* Caixa em destaque */}
          <div className="relative bg-[var(--sesc-green-grass)] border-[6px] border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Piquinha/balão */}
            <div className="absolute -top-4 left-12 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[24px] border-b-[var(--sesc-green-grass)]"></div>
            <div className="absolute -top-5 left-[44px] w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[28px] border-b-black"></div>

            <p className="text-[32px] font-bold text-white text-center">
              Este app que você tá usando agora foi feito com Unity! 🎮
            </p>
          </div>

          {/* Pergunta grande em destaque */}
          <div className="bg-[var(--sesc-yellow-flower)] border-[8px] border-black rounded-3xl p-12 mt-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <p className="text-[42px] font-black text-center text-[var(--sesc-blue-dark)] uppercase leading-tight">
              Se você pudesse programar qualquer coisa no mundo, o que seria?
            </p>
            <div className="text-center mt-6 text-[64px]">
              💭 🚀 🎨 🎮 🤖
            </div>
          </div>
        </div>

        {/* Lado direito - Cena futurista */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full h-[700px]">
            {/* Tela de jogo 3D */}
            <div className="absolute top-0 left-20 w-[500px] h-[350px] bg-[var(--sesc-blue-dark)] border-[8px] border-black rounded-3xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              {/* Cena 3D simplificada */}
              <div className="relative w-full h-full bg-gradient-to-b from-[#4a9fd8] to-[var(--sesc-green-grass)]">
                {/* Montanhas */}
                <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[180px] border-b-[var(--sesc-gray-stone)] opacity-80"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[120px] border-l-transparent border-r-[120px] border-r-transparent border-b-[150px] border-b-[#606060] opacity-70"></div>

                {/* Sol/Lua */}
                <div className="absolute top-8 right-12 w-[80px] h-[80px] bg-[var(--sesc-yellow-flower)] border-[5px] border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"></div>

                {/* Árvores pixeladas */}
                <div className="absolute bottom-12 left-32">
                  <div className="w-[15px] h-[60px] bg-[#8B4513] border-[3px] border-black mx-auto"></div>
                  <div className="w-[60px] h-[60px] bg-[var(--sesc-green-grass)] border-[4px] border-black rounded-full -mt-8"></div>
                </div>

                {/* Player/personagem */}
                <div className="absolute bottom-16 left-[250px]">
                  <div className="w-[40px] h-[40px] bg-[var(--sesc-orange)] border-[4px] border-black rounded-lg"></div>
                  <div className="w-[30px] h-[50px] bg-[var(--sesc-blue-dark)] border-[4px] border-black mx-auto -mt-1"></div>
                </div>

                {/* HUD */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 border-[3px] border-white rounded-lg px-4 py-2">
                  <p className="text-white text-[16px] font-bold">SCORE: 1000</p>
                </div>
              </div>

              {/* Logo Unity no canto */}
              <div className="absolute bottom-3 right-3 bg-white border-[3px] border-black rounded-lg px-3 py-1">
                <p className="text-[14px] font-bold">Unity</p>
              </div>
            </div>

            {/* Cérebro/IA */}
            <div className="absolute top-48 right-12 w-[280px] h-[280px]">
              {/* Cérebro robótico */}
              <div className="relative w-full h-full">
                {/* Círculo do cérebro */}
                <div className="w-[240px] h-[240px] bg-[var(--sesc-pink)] border-[8px] border-black rounded-[120px_120px_100px_100px] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mx-auto relative">
                  {/* Circuitos do cérebro */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 240">
                    <path d="M 60 80 Q 120 60, 180 80" stroke="white" strokeWidth="6" fill="none" />
                    <path d="M 60 120 Q 120 100, 180 120" stroke="white" strokeWidth="6" fill="none" />
                    <path d="M 60 160 Q 120 140, 180 160" stroke="white" strokeWidth="6" fill="none" />
                    <circle cx="60" cy="80" r="8" fill="var(--sesc-yellow-flower)" stroke="black" strokeWidth="3" />
                    <circle cx="180" cy="80" r="8" fill="var(--sesc-yellow-flower)" stroke="black" strokeWidth="3" />
                    <circle cx="120" cy="100" r="10" fill="var(--sesc-green-grass)" stroke="black" strokeWidth="3" />
                    <circle cx="60" cy="160" r="8" fill="var(--sesc-orange)" stroke="black" strokeWidth="3" />
                    <circle cx="180" cy="160" r="8" fill="var(--sesc-orange)" stroke="black" strokeWidth="3" />
                  </svg>

                  {/* Olhos de IA */}
                  <div className="absolute top-[60px] left-[50px] w-[50px] h-[50px] bg-[var(--sesc-yellow-flower)] border-[5px] border-black rounded-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-black rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute top-[60px] right-[50px] w-[50px] h-[50px] bg-[var(--sesc-yellow-flower)] border-[5px] border-black rounded-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-black rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Etiqueta IA */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[var(--sesc-blue-dark)] border-[5px] border-black rounded-xl px-8 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[28px] font-bold text-white uppercase">I.A.</p>
                </div>
              </div>
            </div>

            {/* Ferramentas de código flutuando */}
            <div className="absolute bottom-24 left-12 bg-white border-[6px] border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-3">
              <div className="text-[18px] font-mono space-y-1">
                <div className="flex gap-2">
                  <span className="text-[var(--sesc-pink)]">function</span>
                  <span className="text-[var(--sesc-blue-dark)]">criar()</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[var(--sesc-green-grass)]">&#123;</span>
                </div>
                <div className="flex gap-2 ml-4">
                  <span className="text-[var(--sesc-orange)]">return</span>
                  <span>✨</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[var(--sesc-green-grass)]">&#125;</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 right-32 bg-black border-[5px] border-white rounded-xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-6">
              <div className="text-[20px] font-mono text-[var(--sesc-green-grass)]">
                <div>&gt; npm install future</div>
                <div className="text-[var(--sesc-yellow-flower)]">✓ instalado!</div>
              </div>
            </div>

            {/* Estrelas/partículas futuristas */}
            <div className="absolute top-12 right-48 text-[32px] animate-pulse">✨</div>
            <div className="absolute top-32 left-8 text-[28px] animate-pulse" style={{ animationDelay: '0.5s' }}>⚡</div>
            <div className="absolute bottom-48 right-8 text-[36px] animate-pulse" style={{ animationDelay: '1s' }}>🚀</div>
          </div>
        </div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
