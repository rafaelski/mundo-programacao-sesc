import { Button } from '../Button';
import { ScreenShell } from '../ScreenShell';
import { ScreenTitle } from '../ScreenTitle';

interface Tela01HomeProps {
  onStart: () => void;
}

export function Tela01Home({ onStart }: Tela01HomeProps) {
  return (
    <ScreenShell tone="blue">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          <path d="M 100 100 L 300 100 L 300 200 M 300 150 L 500 150" stroke="white" strokeWidth="8" fill="none" />
          <circle cx="100" cy="100" r="15" fill="white" />
          <circle cx="300" cy="100" r="15" fill="white" />
          <circle cx="300" cy="200" r="15" fill="white" />
          <circle cx="500" cy="150" r="15" fill="white" />

          <path d="M 1400 800 L 1600 800 L 1600 900 M 1600 850 L 1800 850" stroke="white" strokeWidth="8" fill="none" />
          <circle cx="1400" cy="800" r="15" fill="white" />
          <circle cx="1600" cy="800" r="15" fill="white" />
          <circle cx="1600" cy="900" r="15" fill="white" />
          <circle cx="1800" cy="850" r="15" fill="white" />

          <circle cx="200" cy="900" r="60" fill="none" stroke="white" strokeWidth="8" />
          <circle cx="200" cy="900" r="40" fill="none" stroke="white" strokeWidth="8" />

          <circle cx="1700" cy="200" r="80" fill="none" stroke="white" strokeWidth="8" />
          <circle cx="1700" cy="200" r="60" fill="none" stroke="white" strokeWidth="8" />

          <rect x="800" y="100" width="100" height="100" fill="none" stroke="white" strokeWidth="8" rx="8" />
          <rect x="820" y="120" width="60" height="60" fill="none" stroke="white" strokeWidth="4" />

          <rect x="1000" y="900" width="120" height="120" fill="none" stroke="white" strokeWidth="8" rx="8" />
          <rect x="1025" y="925" width="70" height="70" fill="none" stroke="white" strokeWidth="4" />
        </svg>
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-20 py-14">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col items-center gap-10 rounded-[44px] border-[4px] border-[rgba(255,255,255,0.22)] bg-[rgba(7,34,53,0.24)] px-20 py-20 text-center shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-[10px]">
          <div className="rounded-full border-[3px] border-[rgba(255,255,255,0.28)] bg-[rgba(255,255,255,0.14)] px-8 py-3 text-[22px] font-black uppercase tracking-[0.24em] text-[var(--sesc-yellow-soft)]">
            SESC apresenta uma experiência interativa
          </div>

          <ScreenTitle
            title="O Mundo da Programação"
            eyebrow="Uma aventura para crianças curiosas"
            tone="dark"
            align="center"
            size="xl"
          />

          <p className="max-w-[920px] text-balance-pretty font-bold-text text-[36px] leading-[1.25] text-[rgba(255,255,255,0.95)]">
            Uma viagem divertida pela história das ideias, das pessoas e dos jogos que ensinaram as máquinas a seguir instruções.
          </p>

          <div className="flex items-center gap-4 rounded-full border-[3px] border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.12)] px-8 py-4 text-[22px] font-black uppercase tracking-[0.08em] text-white">
            <span>16 telas</span>
            <span className="text-[var(--sesc-yellow-soft)]">•</span>
            <span>histórias, jogos e experiências</span>
          </div>

          <Button variant="primary" onClick={onStart} icon=">" className="mt-4">
            Começar a viagem
          </Button>
        </div>
      </div>
    </ScreenShell>
  );
}
