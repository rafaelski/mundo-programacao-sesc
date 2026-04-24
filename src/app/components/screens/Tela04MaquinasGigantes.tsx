import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Card } from '../Card';

interface Tela04MaquinasGigantesProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela04MaquinasGigantes({ onPrevious, onNext }: Tela04MaquinasGigantesProps) {
  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-[var(--sesc-beige-light)]">
      <Header currentScreen={4} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex items-center gap-16">
        {/* Lado esquerdo - Conteúdo texto */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Título */}
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 text-[72px] font-black uppercase tracking-tight text-black transform translate-x-[6px] translate-y-[6px]">
                MÁQUINAS GIGANTES
              </span>
              <span className="absolute inset-0 text-[72px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)] transform translate-x-[3px] translate-y-[3px]">
                MÁQUINAS GIGANTES
              </span>
              <span className="relative text-[72px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)]">
                MÁQUINAS GIGANTES
              </span>
            </h2>
            <p className="text-[48px] font-bold text-[var(--sesc-gray-stone)] mt-2">anos 1940</p>
          </div>

          {/* Texto principal */}
          <div className="text-[32px] leading-relaxed font-bold text-black space-y-6">
            <p>
              Os primeiros computadores de verdade eram <span className="text-[var(--sesc-orange)] text-[40px]">ENORMES</span>.
            </p>
            <p>
              O <span className="text-[var(--sesc-blue-dark)]">ENIAC</span> pesava <span className="text-[var(--sesc-pink)]">30 toneladas</span> e ocupava uma sala inteira.
            </p>
            <p>
              Tinha mais de 17 mil válvulas e esquentava tanto que precisava de ventiladores gigantes.
            </p>
          </div>

          {/* Card "Você Sabia?" */}
          <Card variant="you-knew">
            Em <span className="text-[var(--sesc-blue-dark)]">1947</span>, a cientista <span className="text-[var(--sesc-pink)]">Grace Hopper</span> encontrou uma <span className="text-[var(--sesc-orange)]">MARIPOSA</span> de verdade presa dentro de um computador, causando defeito. Ela colou o bichinho no caderno e escreveu: "primeiro bug de verdade encontrado". É por isso que até hoje a gente chama erro de programa de <span className="text-[var(--sesc-blue-dark)]">BUG</span>! 🦋
          </Card>
        </div>

        {/* Lado direito - ENIAC com mariposa */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* ENIAC gigantesco */}
            <div className="relative">
              {/* Painel principal */}
              <div className="w-[500px] h-[600px] bg-[var(--sesc-gray-stone)] border-[8px] border-black rounded-3xl relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {/* Válvulas e luzes */}
                <div className="grid grid-cols-8 gap-3 p-8">
                  {[...Array(32)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-[40px] h-[40px] border-[3px] border-black rounded-full ${
                        i % 3 === 0 ? 'bg-[var(--sesc-yellow-flower)]' :
                        i % 3 === 1 ? 'bg-[var(--sesc-orange)]' :
                        'bg-[var(--sesc-pink)]'
                      }`}
                    ></div>
                  ))}
                </div>

                {/* Painéis de controle */}
                <div className="absolute bottom-8 left-8 right-8 h-[120px] bg-black border-[4px] border-white rounded-xl flex gap-4 p-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex-1 bg-[var(--sesc-blue-dark)] border-[3px] border-white rounded-lg"></div>
                  ))}
                </div>

                {/* Ventilador */}
                <div className="absolute -right-24 top-1/3 w-[120px] h-[120px] bg-[var(--sesc-gray-light)] border-[6px] border-black rounded-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80px] h-[4px] bg-black rotate-0"></div>
                    <div className="w-[80px] h-[4px] bg-black rotate-90 absolute"></div>
                    <div className="w-[80px] h-[4px] bg-black rotate-45 absolute"></div>
                    <div className="w-[80px] h-[4px] bg-black -rotate-45 absolute"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[24px] h-[24px] bg-black rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Mariposa saindo */}
              <div className="absolute -top-12 left-1/3 transform -rotate-12 animate-bounce">
                <div className="text-[120px]">🦋</div>
                <div className="absolute -top-4 -right-12 bg-[var(--sesc-yellow-flower)] border-[3px] border-black rounded-full px-4 py-2">
                  <p className="text-[20px] font-bold whitespace-nowrap">BUG!</p>
                </div>
              </div>

              {/* Pessoas para escala */}
              <div className="absolute -bottom-8 -left-32 flex gap-4">
                {/* Pessoa 1 */}
                <div className="w-[60px]">
                  <div className="w-[32px] h-[32px] bg-[#f5d3a8] border-[3px] border-black rounded-full mx-auto"></div>
                  <div className="w-[40px] h-[60px] bg-[var(--sesc-blue-dark)] border-[3px] border-black rounded-lg mx-auto mt-1"></div>
                  <div className="flex gap-1 justify-center">
                    <div className="w-[8px] h-[24px] bg-[var(--sesc-blue-dark)] border-[2px] border-black"></div>
                    <div className="w-[8px] h-[24px] bg-[var(--sesc-blue-dark)] border-[2px] border-black"></div>
                  </div>
                </div>

                {/* Pessoa 2 */}
                <div className="w-[60px]">
                  <div className="w-[32px] h-[32px] bg-[#f5d3a8] border-[3px] border-black rounded-full mx-auto"></div>
                  <div className="w-[40px] h-[60px] bg-[var(--sesc-pink)] border-[3px] border-black rounded-lg mx-auto mt-1"></div>
                  <div className="flex gap-1 justify-center">
                    <div className="w-[8px] h-[24px] bg-[var(--sesc-pink)] border-[2px] border-black"></div>
                    <div className="w-[8px] h-[24px] bg-[var(--sesc-pink)] border-[2px] border-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
