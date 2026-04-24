import { ScreenTitle } from '../ScreenTitle';
import { SpeechBubble } from '../SpeechBubble';
import { STORY_SCREEN_THEMES } from '../../config/storyScreenThemes';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela02OQueEProgramarProps {
  onPrevious: () => void;
  onNext: () => void;
}

const TELA02_LAYOUT = createStoryScreenLayout({
  leftBottomMinHeight: '8.75rem',
});

export function Tela02OQueEProgramar({ onPrevious, onNext }: Tela02OQueEProgramarProps) {
  return (
    <StoryScreenFrame
      currentScreen={2}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA02_LAYOUT}
      contentStageThemeClassName={STORY_SCREEN_THEMES.tela02.contentStageThemeClassName}
      leftBottomClassName="max-w-[760px]"
      leftMain={
        <>
          <ScreenTitle title="O que é programar?" eyebrow="Começando a viagem" />

          <div className="mt-8 space-y-5 font-bold-text text-[30px] leading-[1.34] text-[var(--sesc-ink)]">
            <p>
              Programar é dar instruções para uma máquina fazer alguma coisa. É parecido com uma{' '}
              <span className="text-[var(--sesc-orange)]">receita de bolo</span>: passo 1, passo 2, passo 3...
            </p>
            <p>Se a receita estiver certa, o bolo fica pronto. Se você pular um passo, o bolo desanda!</p>
            <p>Computadores, celulares, jogos e robôs: todos seguem receitas feitas por programadores.</p>
          </div>
        </>
      }
      leftBottom={
        <SpeechBubble showTail={false}>
          <span className="text-[var(--sesc-pink)]">E VOCÊ?</span> JÁ ENSINOU ALGUÉM A FAZER UMA COISA NOVA HOJE?
        </SpeechBubble>
      }
      right={
        <div className="relative scale-[0.98]">
          <div className="relative">
            <div className="h-[120px] w-[400px] rounded-t-3xl border-[6px] border-black bg-[var(--sesc-orange)]"></div>
            <div className="h-[40px] w-[400px] border-x-[6px] border-black bg-white"></div>
            <div className="h-[120px] w-[400px] border-x-[6px] border-black bg-[var(--sesc-yellow-flower)]"></div>
            <div className="h-[40px] w-[400px] border-x-[6px] border-black bg-white"></div>
            <div className="h-[120px] w-[400px] rounded-b-3xl border-[6px] border-t-0 border-black bg-[var(--sesc-pink)]"></div>

            <div className="absolute -top-8 left-1/2 h-[60px] w-[380px] -translate-x-1/2 rounded-t-full border-[6px] border-black bg-[var(--sesc-green-grass)]"></div>

            <div className="absolute -top-32 left-1/2 -translate-x-1/2">
              <div className="h-[70px] w-[20px] border-[4px] border-black bg-[var(--sesc-pink)]"></div>
              <div className="-ml-[5px] -mt-2 h-[30px] w-[30px] rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)]"></div>
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
      }
    />
  );
}
