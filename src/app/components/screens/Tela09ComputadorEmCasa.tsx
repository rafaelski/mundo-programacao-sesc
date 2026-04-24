import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Card } from '../Card';

interface Tela09ComputadorEmCasaProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela09ComputadorEmCasa({ onPrevious, onNext }: Tela09ComputadorEmCasaProps) {
  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-[var(--sesc-beige-light)]">
      <Header currentScreen={9} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex items-center gap-16">
        {/* Lado esquerdo - Conteúdo texto */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Título */}
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 text-[64px] font-black uppercase tracking-tight text-black transform translate-x-[6px] translate-y-[6px] leading-tight">
                UM COMPUTADOR EM CADA CASA
              </span>
              <span className="absolute inset-0 text-[64px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)] transform translate-x-[3px] translate-y-[3px] leading-tight">
                UM COMPUTADOR EM CADA CASA
              </span>
              <span className="relative text-[64px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)] leading-tight">
                UM COMPUTADOR EM CADA CASA
              </span>
            </h2>
            <p className="text-[48px] font-bold text-[var(--sesc-gray-stone)] mt-2">anos 1990</p>
          </div>

          {/* Texto principal */}
          <div className="text-[32px] leading-relaxed font-bold text-black space-y-6">
            <p>
              Nos anos 90, os computadores <span className="text-[var(--sesc-pink)]">encolheram</span> e entraram nas casas das pessoas.
            </p>
            <p>
              Apareceram o <span className="text-[var(--sesc-blue-dark)]">Windows</span> e o <span className="text-[var(--sesc-gray-stone)]">Mac</span>, com janelas coloridas, mouse e cliques. Qualquer um podia usar!
            </p>
            <p>
              E aconteceu algo mágico: um cientista britânico chamado <span className="text-[var(--sesc-orange)]">Tim Berners-Lee</span> inventou a <span className="text-[var(--sesc-green-grass)]">WEB</span> e conectou o mundo.
            </p>
            <p>
              Nascia a <span className="text-[var(--sesc-pink)]">INTERNET</span> que a gente usa hoje.
            </p>
          </div>

          {/* Card "Você Sabia?" */}
          <Card variant="you-knew">
            O primeiro site do mundo <span className="text-[var(--sesc-blue-dark)]">ainda está no ar</span>. Não tem imagens, só texto — e foi publicado em <span className="text-[var(--sesc-pink)]">1991</span>.
          </Card>
        </div>

        {/* Lado direito - Sala anos 90 com computador */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Mesa */}
            <div className="relative">
              <div className="w-[600px] h-[80px] bg-[#8B4513] border-[6px] border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>

              {/* Monitor de tubo */}
              <div className="absolute -top-[380px] left-[100px]">
                {/* Base do monitor */}
                <div className="w-[180px] h-[40px] bg-[var(--sesc-gray-stone)] border-[5px] border-black rounded-b-2xl mx-auto"></div>
                <div className="w-[80px] h-[50px] bg-[var(--sesc-gray-stone)] border-[5px] border-black rounded-lg mx-auto -mt-2"></div>

                {/* Monitor */}
                <div className="w-[400px] h-[320px] bg-[var(--sesc-gray-light)] border-[8px] border-black rounded-3xl -mt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  {/* Tela */}
                  <div className="m-6 h-[268px] bg-[#00a8e8] border-[4px] border-black rounded-xl relative overflow-hidden">
                    {/* Janelas do Windows 95 */}
                    <div className="absolute top-4 left-4 w-[200px] h-[150px] bg-[var(--sesc-gray-light)] border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                      <div className="bg-[var(--sesc-blue-dark)] h-[24px] flex items-center px-2 gap-2">
                        <div className="text-[14px] font-bold text-white">Documento.txt</div>
                        <div className="ml-auto flex gap-1">
                          <div className="w-[16px] h-[16px] bg-[var(--sesc-gray-light)] border-[2px] border-black"></div>
                        </div>
                      </div>
                      <div className="p-2 text-[10px]">
                        <div className="w-full h-[2px] bg-black mb-1"></div>
                        <div className="w-[80%] h-[2px] bg-black mb-1"></div>
                        <div className="w-[90%] h-[2px] bg-black"></div>
                      </div>
                    </div>

                    <div className="absolute top-12 left-16 w-[180px] h-[120px] bg-white border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                      <div className="bg-[var(--sesc-pink)] h-[24px] flex items-center px-2">
                        <div className="text-[14px] font-bold text-white">Internet</div>
                      </div>
                      <div className="p-2">
                        <div className="text-[16px] text-center mt-4">🌐</div>
                      </div>
                    </div>

                    {/* Barra de tarefas */}
                    <div className="absolute bottom-0 left-0 right-0 h-[32px] bg-[var(--sesc-gray-stone)] border-t-[3px] border-black flex items-center px-2 gap-2">
                      <div className="bg-[var(--sesc-green-grass)] px-3 py-1 border-[2px] border-black rounded text-[12px] font-bold">Start</div>
                      <div className="flex-1"></div>
                      <div className="text-[12px] font-bold">12:00</div>
                    </div>
                  </div>

                  {/* Botão power */}
                  <div className="absolute bottom-2 right-4 w-[12px] h-[12px] bg-[var(--sesc-green-grass)] border-[2px] border-black rounded-full"></div>
                </div>
              </div>

              {/* Mouse de bolinha */}
              <div className="absolute -top-[60px] left-[350px]">
                <div className="w-[60px] h-[80px] bg-[var(--sesc-gray-light)] border-[4px] border-black rounded-[30px_30px_20px_20px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {/* Botões */}
                  <div className="flex gap-1 p-2">
                    <div className="flex-1 h-[30px] bg-white border-[2px] border-black rounded-t-xl"></div>
                    <div className="flex-1 h-[30px] bg-white border-[2px] border-black rounded-t-xl"></div>
                  </div>
                  {/* Bolinha */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[20px] h-[20px] bg-[var(--sesc-gray-stone)] border-[2px] border-black rounded-full"></div>
                </div>
                {/* Cabo do mouse */}
                <div className="absolute -top-4 left-1/2 w-[3px] h-[40px] bg-black transform rotate-12"></div>
              </div>

              {/* Teclado */}
              <div className="absolute -top-[50px] left-[50px] w-[280px] h-[100px] bg-[var(--sesc-gray-light)] border-[5px] border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="grid grid-cols-10 gap-1 p-2">
                  {[...Array(40)].map((_, i) => (
                    <div key={i} className="w-[20px] h-[18px] bg-white border-[2px] border-black rounded-sm"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Globo terrestre com conexões */}
            <div className="absolute -right-32 -top-40">
              {/* Globo */}
              <div className="w-[200px] h-[200px] bg-[var(--sesc-green-grass)] border-[6px] border-black rounded-full relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {/* Continentes simplificados */}
                <div className="absolute top-8 left-8 w-[40px] h-[30px] bg-[var(--sesc-blue-dark)] border-[3px] border-black rounded-full opacity-40"></div>
                <div className="absolute top-12 right-12 w-[50px] h-[35px] bg-[var(--sesc-blue-dark)] border-[3px] border-black opacity-40"></div>
                <div className="absolute bottom-12 left-1/3 w-[45px] h-[40px] bg-[var(--sesc-blue-dark)] border-[3px] border-black rounded-lg opacity-40"></div>

                {/* Linhas de conexão saindo do globo */}
                <svg className="absolute inset-0 w-[300px] h-[300px] -left-[50px] -top-[50px]" viewBox="0 0 300 300">
                  {/* Linhas conectando */}
                  <path d="M 100 100 Q 50 50, 20 20" stroke="var(--sesc-orange)" strokeWidth="4" fill="none" strokeDasharray="8 4" />
                  <path d="M 150 80 Q 200 40, 250 10" stroke="var(--sesc-pink)" strokeWidth="4" fill="none" strokeDasharray="8 4" />
                  <path d="M 200 150 Q 250 150, 280 150" stroke="var(--sesc-yellow-flower)" strokeWidth="4" fill="none" strokeDasharray="8 4" />
                  <path d="M 120 200 Q 80 250, 30 280" stroke="var(--sesc-green-grass)" strokeWidth="4" fill="none" strokeDasharray="8 4" />

                  {/* Pontos de conexão */}
                  <circle cx="20" cy="20" r="8" fill="var(--sesc-orange)" stroke="black" strokeWidth="3" />
                  <circle cx="250" cy="10" r="8" fill="var(--sesc-pink)" stroke="black" strokeWidth="3" />
                  <circle cx="280" cy="150" r="8" fill="var(--sesc-yellow-flower)" stroke="black" strokeWidth="3" />
                  <circle cx="30" cy="280" r="8" fill="var(--sesc-green-grass)" stroke="black" strokeWidth="3" />
                </svg>
              </div>

              {/* Suporte do globo */}
              <div className="w-[120px] h-[4px] bg-black mx-auto rotate-90 -mt-[60px] ml-[90px]"></div>
              <div className="w-[100px] h-[60px] border-[4px] border-black border-t-0 rounded-b-full mx-auto -mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
