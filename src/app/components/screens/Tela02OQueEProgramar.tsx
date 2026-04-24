import type { CSSProperties } from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ScreenShell } from '../ScreenShell';
import { ScreenTitle } from '../ScreenTitle';
import { SpeechBubble } from '../SpeechBubble';

interface Tela02OQueEProgramarProps {
  onPrevious: () => void;
  onNext: () => void;
}

const TELA02_LAYOUT = {
  contentBottomSafeArea: '12rem',
  contentTopPadding: '9.5rem',
  columnGap: '3rem',
  leftColumnGap: '2rem',
  leftBubbleMinHeight: '8.75rem',
} as const;

export function Tela02OQueEProgramar({ onPrevious, onNext }: Tela02OQueEProgramarProps) {
  const layoutVars = {
    '--tela02-content-bottom-safe-area': TELA02_LAYOUT.contentBottomSafeArea,
    '--tela02-content-top-padding': TELA02_LAYOUT.contentTopPadding,
    '--tela02-column-gap': TELA02_LAYOUT.columnGap,
    '--tela02-left-column-gap': TELA02_LAYOUT.leftColumnGap,
    '--tela02-left-bubble-min-height': TELA02_LAYOUT.leftBubbleMinHeight,
  } as CSSProperties;

  return (
    <ScreenShell tone="transparent" showDecorations={false}>
      <div className="content-stage content-stage-theme-cream pointer-events-none absolute inset-x-10 inset-y-8" />

      <Header currentScreen={2} totalScreens={16} />

      <div
        className="relative z-10 grid h-full min-h-0 grid-cols-[1.02fr_0.98fr] items-stretch gap-[var(--tela02-column-gap)] px-24 pb-[var(--tela02-content-bottom-safe-area)] pt-[var(--tela02-content-top-padding)]"
        style={layoutVars}
      >
        <div className="grid h-full min-h-0 grid-rows-[minmax(0,1fr)_auto] gap-[var(--tela02-left-column-gap)]">
          <div className="surface-panel surface-panel-pad-lg flex h-full min-h-0 flex-col">
            <ScreenTitle title="O que é programar?" eyebrow="Começando a viagem" />

            <div className="mt-8 space-y-5 font-bold-text text-[30px] leading-[1.34] text-[var(--sesc-ink)]">
              <p>
                Programar é dar instruções pra uma máquina fazer alguma coisa. É parecido com uma <span className="text-[var(--sesc-orange)]">receita de bolo</span>: passo 1, passo 2, passo 3...
              </p>
              <p>
                Se a receita estiver certa, o bolo fica pronto. Se você pular um passo, o bolo desanda!
              </p>
              <p>
                Computadores, celulares, jogos e robôs - todos seguem receitas feitas por programadores.
              </p>
            </div>
          </div>

          <SpeechBubble showTail={false} className="min-h-[var(--tela02-left-bubble-min-height)] max-w-[760px]">
            <span className="text-[var(--sesc-pink)]">E VOCÊ?</span> JÁ ENSINOU ALGUÉM A FAZER UMA COISA NOVA HOJE?
          </SpeechBubble>
        </div>

        <div className="surface-panel-strong surface-panel-pad-lg relative flex h-full min-h-0 items-center justify-center">
          <div className="relative scale-[0.98]">
            <div className="relative">
              <div className="w-[400px] h-[120px] bg-[var(--sesc-orange)] border-[6px] border-black rounded-t-3xl"></div>
              <div className="w-[400px] h-[40px] bg-white border-x-[6px] border-black"></div>
              <div className="w-[400px] h-[120px] bg-[var(--sesc-yellow-flower)] border-x-[6px] border-black"></div>
              <div className="w-[400px] h-[40px] bg-white border-x-[6px] border-black"></div>
              <div className="w-[400px] h-[120px] bg-[var(--sesc-pink)] border-[6px] border-t-0 border-black rounded-b-3xl"></div>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[380px] h-[60px] bg-[var(--sesc-green-grass)] border-[6px] border-black rounded-t-full"></div>

              <div className="absolute -top-32 left-1/2 -translate-x-1/2">
                <div className="w-[20px] h-[70px] bg-[var(--sesc-pink)] border-[4px] border-black"></div>
                <div className="w-[30px] h-[30px] bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-full -mt-2 -ml-[5px]"></div>
              </div>
            </div>

            <div className="absolute -right-40 top-6 rounded-[24px] border-[4px] border-[var(--sesc-ink)] bg-[rgba(255,250,241,0.98)] p-8 shadow-[0_12px_24px_rgba(39,35,72,0.16)]">
              <div className="mb-4 text-[18px] font-black uppercase tracking-[0.18em] text-[var(--sesc-orange)]">
                Receita da instrução
              </div>
              <div className="space-y-3 font-bold-text text-[24px] font-black text-[var(--sesc-ink)]">
                <div className="flex items-center gap-3">
                  <span className="text-[var(--sesc-blue-dark)]">1.</span> Farinha
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--sesc-blue-dark)]">2.</span> Ovos
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--sesc-blue-dark)]">3.</span> Açúcar
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--sesc-blue-dark)]">4.</span> Mistura
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--sesc-blue-dark)]">5.</span> Forno
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </ScreenShell>
  );
}
