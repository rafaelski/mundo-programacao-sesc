import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Card } from '../Card';

interface Tela11GamesNoBolsoProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela11GamesNoBolso({ onPrevious, onNext }: Tela11GamesNoBolsoProps) {
  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-[var(--sesc-beige-light)]">
      <Header currentScreen={11} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex items-center gap-16">
        {/* Lado esquerdo - Conteúdo texto */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Título */}
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 text-[72px] font-black uppercase tracking-tight text-black transform translate-x-[6px] translate-y-[6px]">
                GAMES NO BOLSO
              </span>
              <span className="absolute inset-0 text-[72px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)] transform translate-x-[3px] translate-y-[3px]">
                GAMES NO BOLSO
              </span>
              <span className="relative text-[72px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)]">
                GAMES NO BOLSO
              </span>
            </h2>
            <p className="text-[48px] font-bold text-[var(--sesc-gray-stone)] mt-2">anos 2000–2010</p>
          </div>

          {/* Texto principal */}
          <div className="text-[32px] leading-relaxed font-bold text-black space-y-6">
            <p>
              Os celulares viraram <span className="text-[var(--sesc-orange)]">minicomputadores</span>.
            </p>
            <p>
              De repente, dava pra jogar, tirar foto, assistir vídeo — tudo <span className="text-[var(--sesc-pink)]">na palma da mão</span>.
            </p>
            <p>
              Angry Birds, Candy Crush, Among Us… <span className="text-[var(--sesc-green-grass)]">milhões de apps!</span>
            </p>
          </div>

          {/* Ícones de apps */}
          <div className="flex gap-6 flex-wrap">
            <div className="text-[72px]">🐦</div>
            <div className="text-[72px]">🍬</div>
            <div className="text-[72px]">👾</div>
            <div className="text-[72px]">📱</div>
          </div>

          {/* Card "Você Sabia?" */}
          <Card variant="you-knew">
            <div className="flex items-start gap-4">
              <span className="text-[48px]">⛏️</span>
              <div>
                O <span className="text-[var(--sesc-green-grass)]">MINECRAFT</span>, um dos jogos mais famosos do mundo, começou sendo feito por <span className="text-[var(--sesc-orange)]">UMA PESSOA SÓ</span>: o programador sueco Markus Persson. Ele usou uma linguagem chamada <span className="text-[var(--sesc-blue-dark)]">Java</span> e publicou o jogo em 2009. Hoje mais de <span className="text-[var(--sesc-pink)]">300 milhões</span> de cópias já foram vendidas!
              </div>
            </div>
          </Card>
        </div>

        {/* Lado direito - Steve do Minecraft */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Steve - estilo blocky/pixelado do Minecraft */}
            <div className="relative">
              {/* Cabeça (cubo) */}
              <div className="w-[200px] h-[200px] bg-[#d4a574] border-[6px] border-black relative mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {/* Cabelo */}
                <div className="absolute -top-[6px] left-0 right-0 h-[60px] bg-[#6d4c3d] border-[6px] border-black border-b-0"></div>

                {/* Olhos */}
                <div className="absolute top-[80px] left-[40px] w-[35px] h-[35px] bg-[#3b9c9c] border-[4px] border-black">
                  <div className="w-[15px] h-[15px] bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="absolute top-[80px] right-[40px] w-[35px] h-[35px] bg-[#3b9c9c] border-[4px] border-black">
                  <div className="w-[15px] h-[15px] bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Nariz */}
                <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[30px] h-[40px] bg-[#c49361] border-[4px] border-black"></div>

                {/* Boca */}
                <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[80px] h-[3px] bg-black"></div>
              </div>

              {/* Corpo */}
              <div className="w-[160px] h-[200px] bg-[#4a9fd8] border-[6px] border-black mx-auto -mt-[6px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {/* Detalhes da camisa */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[80px] bg-[#3b7fb5] border-[3px] border-black"></div>
              </div>

              {/* Braços */}
              <div className="absolute top-[200px] -left-[80px] w-[60px] h-[180px] bg-[#4a9fd8] border-[6px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {/* Manga */}
                <div className="w-full h-[60px] bg-[#3b7fb5] border-b-[3px] border-black"></div>
                {/* Mão */}
                <div className="absolute -bottom-[60px] left-0 right-0 w-[60px] h-[60px] bg-[#d4a574] border-[6px] border-black"></div>
              </div>

              <div className="absolute top-[200px] -right-[80px] w-[60px] h-[180px] bg-[#4a9fd8] border-[6px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-45 origin-top">
                {/* Manga */}
                <div className="w-full h-[60px] bg-[#3b7fb5] border-b-[3px] border-black"></div>
                {/* Mão segurando laptop */}
                <div className="absolute -bottom-[60px] left-0 right-0 w-[60px] h-[60px] bg-[#d4a574] border-[6px] border-black"></div>

                {/* Laptop de código */}
                <div className="absolute -bottom-[20px] -right-[100px] w-[140px] h-[100px] transform rotate-45">
                  <div className="w-full h-[80px] bg-[var(--sesc-gray-stone)] border-[5px] border-black rounded-lg relative">
                    {/* Tela */}
                    <div className="m-2 h-[70px] bg-black rounded-md p-2">
                      <div className="text-[10px] font-mono text-[var(--sesc-green-grass)] space-y-1">
                        <div>public class</div>
                        <div>&nbsp;&nbsp;Game &#123;</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;void</div>
                        <div>&#125;</div>
                      </div>
                    </div>
                  </div>
                  {/* Teclado do laptop */}
                  <div className="w-full h-[20px] bg-[var(--sesc-gray-light)] border-[5px] border-black border-t-0 rounded-b-lg"></div>
                </div>
              </div>

              {/* Pernas */}
              <div className="absolute -bottom-[220px] left-1/2 -translate-x-[90px] w-[60px] h-[220px] bg-[#2c3e91] border-[6px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {/* Sapato */}
                <div className="absolute -bottom-[50px] left-0 right-0 w-[60px] h-[50px] bg-[#1a1a1a] border-[6px] border-black"></div>
              </div>

              <div className="absolute -bottom-[220px] left-1/2 translate-x-[30px] w-[60px] h-[220px] bg-[#2c3e91] border-[6px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {/* Sapato */}
                <div className="absolute -bottom-[50px] left-0 right-0 w-[60px] h-[50px] bg-[#1a1a1a] border-[6px] border-black"></div>
              </div>
            </div>

            {/* Blocos do Minecraft flutuando */}
            <div className="absolute -top-20 -left-20">
              <div className="w-[80px] h-[80px] bg-[#8B4513] border-[5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {/* Textura de madeira */}
                <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`${i % 2 === 0 ? 'bg-[#654321]' : 'bg-[#8B4513]'} opacity-30`}></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -top-32 right-12">
              <div className="w-[70px] h-[70px] bg-[var(--sesc-green-grass)] border-[5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {/* Textura de grama */}
                <div className="w-full h-[20px] bg-[#7cb342] border-b-[3px] border-black"></div>
                <div className="w-full h-[50px] bg-[#8B4513]"></div>
              </div>
            </div>

            <div className="absolute top-40 -right-24">
              <div className="w-[60px] h-[60px] bg-[var(--sesc-gray-stone)] border-[5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {/* Textura de pedra */}
                <div className="w-full h-full bg-gradient-to-br from-[#808080] to-[#606060]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
