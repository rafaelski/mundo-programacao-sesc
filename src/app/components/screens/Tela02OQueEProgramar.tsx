import { useEffect, useState } from 'react';
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

const RECIPE_LINES = ['1. Farinha', '2. Ovos', '3. Açúcar', '4. Mistura', '5. Forno'];
const RECIPE_TITLE = 'RECEITA DA INSTRUÇÃO';
const TYPE_INTERVAL_MS = 75;
const LINE_PAUSE_STEPS = 8;
const LOOP_PAUSE_STEPS = 22;

function getLineStart(lineIndex: number, lines: string[]) {
  return lines.slice(0, lineIndex).reduce((sum, line) => sum + line.length + LINE_PAUSE_STEPS, 0);
}

function getVisibleText(step: number, text: string, lineIndex: number, lines: string[]) {
  const start = getLineStart(lineIndex, lines);
  const activeStep = step - start;

  if (activeStep <= 0) {
    return '';
  }

  return text.slice(0, Math.min(text.length, activeStep));
}

function isLineActive(step: number, text: string, lineIndex: number, lines: string[]) {
  const start = getLineStart(lineIndex, lines);
  return step >= start && step < start + text.length;
}

export function Tela02OQueEProgramar({ onPrevious, onNext }: Tela02OQueEProgramarProps) {
  const typingLines = [RECIPE_TITLE, ...RECIPE_LINES];
  const totalTypingSteps =
    typingLines.reduce((sum, line) => sum + line.length + LINE_PAUSE_STEPS, 0) + LOOP_PAUSE_STEPS;
  const [typingStep, setTypingStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTypingStep((current) => (current + 1) % totalTypingSteps);
    }, TYPE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [totalTypingSteps]);

  const visibleTitle = getVisibleText(typingStep, RECIPE_TITLE, 0, typingLines);

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
        <div className="relative animate-clipboard-sway [transform-origin:50%_14%]">
          <div className="relative">
            <div className="h-[120px] w-[400px] rounded-t-3xl border-[6px] border-black bg-[var(--sesc-orange)]"></div>
            <div className="h-[40px] w-[400px] border-x-[6px] border-black bg-white"></div>
            <div className="h-[120px] w-[400px] border-x-[6px] border-black bg-[var(--sesc-yellow-flower)]"></div>
            <div className="h-[40px] w-[400px] border-x-[6px] border-black bg-white"></div>
            <div className="h-[120px] w-[400px] rounded-b-3xl border-[6px] border-t-0 border-black bg-[var(--sesc-pink)]"></div>

            <div className="absolute -top-14 left-1/2 flex h-[60px] w-[380px] -translate-x-1/2 items-center justify-center rounded-t-full border-[6px] border-black bg-[var(--sesc-green-grass)] px-8 text-center">
              <span
                className={`text-[18px] font-black uppercase tracking-[0.16em] text-[var(--sesc-ink)] ${
                  isLineActive(typingStep, RECIPE_TITLE, 0, typingLines) ? 'recipe-writing-caret' : ''
                }`}
              >
                {visibleTitle}
              </span>
            </div>

            <div className="absolute -top-32 left-1/2 -translate-x-1/2">
              <div className="h-[70px] w-[20px] border-[4px] border-black bg-[var(--sesc-pink)]"></div>
              <div className="-ml-[5px] -mt-2 h-[30px] w-[30px] rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)]"></div>
            </div>

            <div className="pointer-events-none absolute inset-x-[86px] top-[96px] flex flex-col items-center gap-4">
              {RECIPE_LINES.map((line, index) => {
                const lineIndex = index + 1;
                const visibleText = getVisibleText(typingStep, line, lineIndex, typingLines);
                const active = isLineActive(typingStep, line, lineIndex, typingLines);

                return (
                  <div
                    key={line}
                    className="w-full max-w-[230px] border-b-2 border-[rgba(39,35,72,0.18)] pb-2 text-center text-[28px] font-black text-[var(--sesc-blue-dark)]"
                  >
                    <span className={active ? 'recipe-writing-caret' : ''}>{visibleText}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    />
  );
}
