import type { ScreenThemeConfig } from '../../config/screenTheme';
import { Button } from '../Button';
import { ScreenShell } from '../ScreenShell';
import { ScreenTitle } from '../ScreenTitle';

interface Tela01HomeProps {
  onStart: () => void;
}

export const TELA01_THEME: ScreenThemeConfig = {
  appBackgroundClassName: "app-bg-tile app-bg-blue-dots",
  contentStageThemeClassName: "",
};

export function Tela01Home({ onStart }: Tela01HomeProps) {
  return (
    <ScreenShell tone="transparent" showDecorations={false}>
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
            <span>15 telas</span>
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
