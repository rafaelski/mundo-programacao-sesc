import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ScreenShell } from '../ScreenShell';
import { ScreenTitle } from '../ScreenTitle';
import { SpeechBubble } from '../SpeechBubble';

interface Tela02OQueEProgramarProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela02OQueEProgramar({ onPrevious, onNext }: Tela02OQueEProgramarProps) {
  return (
    <ScreenShell tone="beige">
      <Header currentScreen={2} totalScreens={16} />

      <div className="grid h-full grid-cols-[1.02fr_0.98fr] gap-12 px-24 pb-24 pt-38">
        <div className="flex flex-col justify-center gap-8">
          <div className="surface-panel p-10">
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

          <SpeechBubble className="max-w-[760px] bg-[rgba(255,249,239,0.98)]">
            <span className="text-[var(--sesc-pink)]">E VOCÊ?</span> JÁ ENSINOU ALGUÉM A FAZER UMA COISA NOVA HOJE?
          </SpeechBubble>
        </div>

        <div className="surface-panel-strong flex items-center justify-center p-10">
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

            <div className="absolute -right-44 top-4 rounded-[24px] border-[4px] border-[var(--sesc-ink)] bg-[rgba(255,250,241,0.98)] p-8 shadow-[0_12px_24px_rgba(39,35,72,0.16)]">
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
