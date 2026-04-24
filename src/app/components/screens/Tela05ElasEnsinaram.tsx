import { Header } from '../Header';
import { Navigation } from '../Navigation';

interface Tela05ElasEnsinaramProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela05ElasEnsinaram({ onPrevious, onNext }: Tela05ElasEnsinaramProps) {
  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-[var(--sesc-beige-light)]">
      <Header currentScreen={5} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex items-center gap-16">
        {/* Lado esquerdo - Conteúdo texto */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Título */}
          <h2 className="relative inline-block">
            <span className="absolute inset-0 text-[64px] font-black uppercase tracking-tight text-black transform translate-x-[6px] translate-y-[6px] leading-tight">
              ELAS ENSINARAM OS COMPUTADORES
            </span>
            <span className="absolute inset-0 text-[64px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)] transform translate-x-[3px] translate-y-[3px] leading-tight">
              ELAS ENSINARAM OS COMPUTADORES
            </span>
            <span className="relative text-[64px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)] leading-tight">
              ELAS ENSINARAM OS COMPUTADORES
            </span>
          </h2>

          {/* Texto principal */}
          <div className="text-[32px] leading-relaxed font-bold text-black space-y-6">
            <p>
              Quem programava aquelas máquinas gigantes? Um grupo de <span className="text-[var(--sesc-pink)]">SEIS MULHERES</span>:
            </p>
            <p className="text-[28px]">
              <span className="text-[var(--sesc-blue-dark)]">Kathleen</span>, <span className="text-[var(--sesc-orange)]">Jean</span>, <span className="text-[var(--sesc-pink)]">Frances</span>, <span className="text-[var(--sesc-green-grass)]">Marlyn</span>, <span className="text-[var(--sesc-blue-dark)]">Ruth</span> e <span className="text-[var(--sesc-orange)]">Betty</span> — as programadoras do ENIAC.
            </p>
            <p>
              E em <span className="text-[var(--sesc-orange)]">1969</span>, quando astronautas pousaram na <span className="text-[var(--sesc-yellow-flower)]">Lua</span> pela primeira vez, o código que guiou a nave Apollo 11 foi feito por uma equipe chefiada por <span className="text-[var(--sesc-blue-dark)]">Margaret Hamilton</span>.
            </p>
            <p>
              A pilha de papel com o programa dela era <span className="text-[var(--sesc-pink)]">quase do tamanho dela mesma!</span>
            </p>
          </div>
        </div>

        {/* Lado direito - Margaret Hamilton com pilha de papel */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Lua ao fundo */}
            <div className="absolute -top-32 -right-32 w-[280px] h-[280px] bg-[var(--sesc-yellow-flower)] border-[8px] border-black rounded-full opacity-30">
              {/* Crateras */}
              <div className="absolute top-12 left-16 w-[40px] h-[40px] bg-[var(--sesc-gray-stone)] border-[3px] border-black rounded-full opacity-50"></div>
              <div className="absolute top-32 right-20 w-[60px] h-[60px] bg-[var(--sesc-gray-stone)] border-[3px] border-black rounded-full opacity-50"></div>
              <div className="absolute bottom-20 left-24 w-[35px] h-[35px] bg-[var(--sesc-gray-stone)] border-[3px] border-black rounded-full opacity-50"></div>
            </div>

            <div className="relative flex items-end gap-8">
              {/* Margaret Hamilton */}
              <div className="relative z-10">
                {/* Cabeça */}
                <div className="w-[100px] h-[120px] bg-[#f5d3a8] border-[4px] border-black rounded-full mx-auto"></div>

                {/* Cabelo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-[120px] h-[80px] bg-[#6d4c3d] border-[4px] border-black rounded-full"></div>

                {/* Corpo */}
                <div className="w-[140px] h-[220px] bg-[var(--sesc-blue-dark)] border-[4px] border-black rounded-2xl mt-2"></div>

                {/* Braços */}
                <div className="absolute top-[140px] -left-8 w-[60px] h-[20px] bg-[var(--sesc-blue-dark)] border-[4px] border-black rounded-full transform -rotate-45"></div>
                <div className="absolute top-[140px] -right-8 w-[60px] h-[20px] bg-[var(--sesc-blue-dark)] border-[4px] border-black rounded-full transform rotate-45"></div>

                {/* Pernas */}
                <div className="flex gap-4 justify-center mt-2">
                  <div className="w-[40px] h-[100px] bg-[var(--sesc-blue-dark)] border-[4px] border-black rounded-xl"></div>
                  <div className="w-[40px] h-[100px] bg-[var(--sesc-blue-dark)] border-[4px] border-black rounded-xl"></div>
                </div>

                {/* Sapatos */}
                <div className="flex gap-4 justify-center -mt-2">
                  <div className="w-[50px] h-[20px] bg-black border-[4px] border-black rounded-full"></div>
                  <div className="w-[50px] h-[20px] bg-black border-[4px] border-black rounded-full"></div>
                </div>

                {/* Nome */}
                <div className="mt-4 bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-xl px-6 py-2 text-center">
                  <p className="text-[20px] font-bold">Margaret Hamilton</p>
                </div>
              </div>

              {/* Pilha de papel gigante */}
              <div className="relative">
                {/* Papéis empilhados */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[280px] h-[40px] bg-white border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                    style={{
                      marginTop: i === 0 ? '0' : '-4px',
                      marginLeft: `${i * 2}px`
                    }}
                  >
                    {/* Linhas de código */}
                    <div className="flex gap-1 p-2">
                      <div className="w-full h-[4px] bg-black"></div>
                    </div>
                    <div className="flex gap-1 px-2">
                      <div className="w-[60%] h-[4px] bg-black"></div>
                    </div>
                    <div className="flex gap-1 px-2 mt-1">
                      <div className="w-[80%] h-[4px] bg-black"></div>
                    </div>
                  </div>
                ))}

                {/* Etiqueta Apollo 11 */}
                <div className="absolute -right-16 top-1/3 bg-[var(--sesc-pink)] border-[4px] border-black rounded-xl px-6 py-3 transform rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[24px] font-bold uppercase">Apollo 11</p>
                  <p className="text-[18px] font-bold">1969</p>
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
