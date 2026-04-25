import type { ScreenThemeConfig } from '../../config/screenTheme';
import { useState } from 'react';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela06FalandoALinguaProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA06_THEME: ScreenThemeConfig = {
  appBackgroundClassName: "app-bg-tile app-bg-blue-dots",
  contentStageThemeClassName: "content-stage-theme-paper",
};

const TELA06_LAYOUT = createStoryScreenLayout({
  columns: '1fr 1fr',
});

export function Tela06FalandoALingua({ onPrevious, onNext }: Tela06FalandoALinguaProps) {
  const languages = [
    {
      id: 'python',
      emoji: '\u{1F40D}',
      name: 'PYTHON',
      prompt: 'Ol\u00E1, mundo!',
      code: 'print("Ol\u00E1, mundo!")',
      color: 'var(--sesc-green-grass)',
    },
    {
      id: 'javascript',
      emoji: '\u2615',
      name: 'JAVASCRIPT',
      prompt: 'Ol\u00E1, mundo!',
      code: 'console.log("Ol\u00E1, mundo!")',
      color: 'var(--sesc-yellow-flower)',
    },
    {
      id: 'c',
      emoji: '\u{1F527}',
      name: 'C',
      prompt: 'Ol\u00E1, mundo!',
      code: 'printf("Ol\u00E1, mundo!");',
      color: 'var(--sesc-pink)',
    },
  ] as const;

  const [selectedLanguageId, setSelectedLanguageId] = useState<(typeof languages)[number]['id']>('python');
  const selectedLanguage = languages.find((lang) => lang.id === selectedLanguageId) ?? languages[0];

  return (
    <StoryScreenFrame
      currentScreen={6}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA06_LAYOUT}
      contentStageThemeClassName={TELA06_THEME.contentStageThemeClassName}
      rightClassName="items-stretch"
      leftMain={
        <>
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[64px] font-black uppercase leading-tight tracking-tight text-black">
                FALANDO A LÍNGUA DO COMPUTADOR
              </span>
              <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[64px] font-black uppercase leading-tight tracking-tight text-[var(--sesc-yellow-flower)]">
                FALANDO A LÍNGUA DO COMPUTADOR
              </span>
              <span className="relative text-[64px] font-black uppercase leading-tight tracking-tight text-[var(--sesc-blue-dark)]">
                FALANDO A LÍNGUA DO COMPUTADOR
              </span>
            </h2>
            <p className="mt-2 text-[48px] font-bold text-[var(--sesc-gray-stone)]">anos 1950-60</p>
          </div>

          <div className="mt-8 space-y-6 text-[32px] font-bold leading-relaxed text-black">
            <p>
              Computadores não entendem português. Eles entendem{' '}
              <span className="text-[var(--sesc-orange)]">linguagens de programação</span>: jeitos especiais de escrever instruções.
            </p>
            <p className="text-[28px] text-[var(--sesc-blue-dark)]">
              Clique nos cards ao lado para ver como diferentes linguagens dizem “Olá, mundo!”.
            </p>
          </div>

          <div className="mt-8">
            <div className="relative h-[200px] w-[300px]">
              <svg viewBox="0 0 300 200" className="h-full w-full">
                <path
                  d="M 50 180 Q 80 120, 120 140 T 200 100 T 260 120"
                  stroke="var(--sesc-green-grass)"
                  strokeWidth="50"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="260" cy="120" r="40" fill="var(--sesc-green-grass)" stroke="black" strokeWidth="5" />
                <circle cx="250" cy="110" r="8" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="270" cy="110" r="8" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="252" cy="110" r="4" fill="black" />
                <circle cx="272" cy="110" r="4" fill="black" />
                <path d="M 280 130 L 310 130 M 310 130 L 305 125 M 310 130 L 305 135" stroke="#ff0000" strokeWidth="4" fill="none" />
                <circle cx="150" cy="140" r="8" fill="var(--sesc-yellow-flower)" opacity="0.6" />
                <circle cx="180" cy="115" r="8" fill="var(--sesc-yellow-flower)" opacity="0.6" />
                <circle cx="210" cy="105" r="8" fill="var(--sesc-yellow-flower)" opacity="0.6" />
              </svg>
            </div>
          </div>
        </>
      }
      right={
        <div className="flex h-full w-full flex-col gap-6 py-2">
          <div className="grid grid-cols-3 gap-4">
            {languages.map((lang) => {
              const isSelected = selectedLanguage.id === lang.id;

              return (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguageId(lang.id)}
                  type="button"
                  className={`flex min-h-[116px] flex-col items-center justify-center rounded-[28px] border-[5px] border-black px-4 py-4 text-center transition-all duration-200 ${
                    isSelected
                      ? 'translate-y-[-4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                      : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                  style={{ backgroundColor: lang.color }}
                >
                  <span className="text-[42px] leading-none">{lang.emoji}</span>
                  <span className="mt-2 text-[24px] font-black uppercase leading-none text-black">{lang.name}</span>
                  <span className="mt-2 text-[17px] font-bold leading-tight text-black">{lang.prompt}</span>
                </button>
              );
            })}
          </div>

          <div
            className="flex flex-1 flex-col rounded-[34px] border-[6px] border-black px-7 py-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            style={{ backgroundColor: selectedLanguage.color }}
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[52px] leading-none">{selectedLanguage.emoji}</span>
              <h3 className="text-[36px] font-black uppercase leading-none text-black">{selectedLanguage.name}</h3>
            </div>

            <div className="flex flex-1 items-center justify-center rounded-[26px] border-[4px] border-white bg-black px-6 py-6">
              <code className="block max-w-full overflow-x-auto font-mono text-[30px] font-bold leading-[1.3] text-[var(--sesc-green-grass)]">
                {selectedLanguage.code}
              </code>
            </div>
          </div>
        </div>
      }
    />
  );
}
