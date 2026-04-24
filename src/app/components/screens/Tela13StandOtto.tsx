import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Button } from '../Button';

interface Tela13StandOttoProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela13StandOtto({ onPrevious, onNext }: Tela13StandOttoProps) {
  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-gradient-to-br from-[var(--sesc-blue-dark)] to-[var(--sesc-pink)]">
      <Header currentScreen={13} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex flex-col items-center justify-center gap-12">
        {/* Badge "VEJA AO LADO" */}
        <div className="bg-[var(--sesc-yellow-flower)] border-[6px] border-black rounded-full px-12 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
          <p className="text-[36px] font-black uppercase flex items-center gap-4">
            <span>VEJA AO LADO</span>
            <span className="text-[48px]">→</span>
          </p>
        </div>

        {/* Título */}
        <h2 className="relative">
          <span className="absolute inset-0 text-[96px] font-black uppercase tracking-tight text-black transform translate-x-[8px] translate-y-[8px]">
            OTTO DIY & OTTOKY
          </span>
          <span className="absolute inset-0 text-[96px] font-black uppercase tracking-tight text-[var(--sesc-orange)] transform translate-x-[4px] translate-y-[4px]">
            OTTO DIY & OTTOKY
          </span>
          <span className="relative text-[96px] font-black uppercase tracking-tight text-white">
            OTTO DIY & OTTOKY
          </span>
        </h2>

        {/* Robô Otto em destaque */}
        <div className="relative">
          {/* Notas musicais flutuando */}
          <div className="absolute -top-24 -left-24 text-[64px] animate-bounce">♪</div>
          <div className="absolute -top-32 right-12 text-[56px] animate-bounce" style={{ animationDelay: '0.3s' }}>♫</div>
          <div className="absolute top-12 -right-32 text-[52px] animate-bounce" style={{ animationDelay: '0.6s' }}>♪</div>

          {/* Engrenagens */}
          <div className="absolute -bottom-16 -left-32 w-[100px] h-[100px] animate-spin" style={{ animationDuration: '3s' }}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="35" fill="var(--sesc-gray-stone)" stroke="black" strokeWidth="4" />
              <circle cx="50" cy="50" r="20" fill="var(--sesc-gray-light)" stroke="black" strokeWidth="3" />
              {[...Array(8)].map((_, i) => (
                <rect
                  key={i}
                  x="46"
                  y="10"
                  width="8"
                  height="15"
                  fill="var(--sesc-gray-stone)"
                  stroke="black"
                  strokeWidth="2"
                  transform={`rotate(${i * 45} 50 50)`}
                />
              ))}
            </svg>
          </div>

          <div className="absolute bottom-24 -right-28 w-[80px] h-[80px] animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
            <svg viewBox="0 0 80 80" className="w-full h-full">
              <circle cx="40" cy="40" r="28" fill="var(--sesc-orange)" stroke="black" strokeWidth="4" />
              <circle cx="40" cy="40" r="16" fill="var(--sesc-yellow-flower)" stroke="black" strokeWidth="3" />
              {[...Array(6)].map((_, i) => (
                <rect
                  key={i}
                  x="37"
                  y="8"
                  width="6"
                  height="12"
                  fill="var(--sesc-orange)"
                  stroke="black"
                  strokeWidth="2"
                  transform={`rotate(${i * 60} 40 40)`}
                />
              ))}
            </svg>
          </div>

          {/* Robô Otto */}
          <div className="relative scale-150">
            {/* Cabeça */}
            <div className="w-[240px] h-[200px] bg-[var(--sesc-orange)] border-[8px] border-black rounded-3xl mx-auto shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
              {/* Antenas */}
              <div className="absolute -top-16 left-[60px] w-[4px] h-[60px] bg-black"></div>
              <div className="absolute -top-20 left-[55px] w-[20px] h-[20px] bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-full"></div>

              <div className="absolute -top-16 right-[60px] w-[4px] h-[60px] bg-black"></div>
              <div className="absolute -top-20 right-[55px] w-[20px] h-[20px] bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-full"></div>

              {/* Olhos (LEDs) */}
              <div className="absolute top-[50px] left-[40px] w-[50px] h-[50px] bg-[var(--sesc-green-grass)] border-[5px] border-black rounded-lg">
                <div className="absolute inset-0 bg-[var(--sesc-yellow-flower)] rounded-full m-2 animate-pulse"></div>
              </div>
              <div className="absolute top-[50px] right-[40px] w-[50px] h-[50px] bg-[var(--sesc-green-grass)] border-[5px] border-black rounded-lg">
                <div className="absolute inset-0 bg-[var(--sesc-yellow-flower)] rounded-full m-2 animate-pulse"></div>
              </div>

              {/* Boca */}
              <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[100px] h-[6px] bg-black rounded-full"></div>
              <div className="absolute bottom-[35px] left-1/2 -translate-x-[35px] w-[70px] h-[30px] border-[4px] border-black border-t-0 rounded-b-full"></div>
            </div>

            {/* Corpo */}
            <div className="w-[220px] h-[160px] bg-[var(--sesc-blue-dark)] border-[8px] border-black rounded-2xl mx-auto -mt-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
              {/* Logo/Display */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[120px] h-[80px] bg-black border-[4px] border-white rounded-lg">
                <p className="text-[var(--sesc-green-grass)] text-[20px] font-bold text-center mt-6">OTTO</p>
                <p className="text-[var(--sesc-yellow-flower)] text-[16px] font-bold text-center">DIY</p>
              </div>

              {/* Parafusos decorativos */}
              <div className="absolute top-4 left-4 w-[12px] h-[12px] bg-[var(--sesc-gray-stone)] border-[3px] border-black rounded-full"></div>
              <div className="absolute top-4 right-4 w-[12px] h-[12px] bg-[var(--sesc-gray-stone)] border-[3px] border-black rounded-full"></div>
            </div>

            {/* Braços */}
            <div className="absolute top-[220px] -left-[80px] w-[60px] h-[120px] bg-[var(--sesc-blue-dark)] border-[6px] border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-12">
              <div className="absolute -bottom-[50px] left-0 right-0 w-[50px] h-[50px] bg-[var(--sesc-orange)] border-[5px] border-black rounded-full mx-auto"></div>
            </div>

            <div className="absolute top-[220px] -right-[80px] w-[60px] h-[120px] bg-[var(--sesc-blue-dark)] border-[6px] border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-12">
              <div className="absolute -bottom-[50px] left-0 right-0 w-[50px] h-[50px] bg-[var(--sesc-orange)] border-[5px] border-black rounded-full mx-auto"></div>
            </div>

            {/* Pernas */}
            <div className="flex justify-center gap-8 -mt-2">
              <div className="w-[70px] h-[140px] bg-[var(--sesc-orange)] border-[6px] border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                {/* Pé */}
                <div className="absolute -bottom-[45px] -left-[10px] w-[90px] h-[50px] bg-[var(--sesc-yellow-flower)] border-[6px] border-black rounded-2xl"></div>
              </div>
              <div className="w-[70px] h-[140px] bg-[var(--sesc-orange)] border-[6px] border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                {/* Pé */}
                <div className="absolute -bottom-[45px] -left-[10px] w-[90px] h-[50px] bg-[var(--sesc-yellow-flower)] border-[6px] border-black rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="bg-white bg-opacity-95 border-[6px] border-black rounded-3xl p-12 max-w-4xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-[32px] leading-relaxed font-bold text-black text-center">
            No stand ao lado, dois robôzinhos estão esperando por você. Eles são robôs <span className="text-[var(--sesc-orange)]">ABERTOS</span> — qualquer pessoa pode montar, programar e até imprimir as peças numa impressora 3D. Você pode fazer o Otto <span className="text-[var(--sesc-pink)]">dançar, andar, desviar de obstáculos</span> e piscar os olhos. Tudo com programação!
          </p>
        </div>

        {/* Botão */}
        <Button variant="primary" onClick={onNext} icon="▶" className="scale-125">
          IR VER O OTTO
        </Button>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
