import { useState } from 'react';
import { STORY_SCREEN_THEMES } from '../../config/storyScreenThemes';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela06FalandoALinguaProps {
  onPrevious: () => void;
  onNext: () => void;
}

const TELA06_LAYOUT = createStoryScreenLayout({
  columns: '1fr 1fr',
});

export function Tela06FalandoALingua({ onPrevious, onNext }: Tela06FalandoALinguaProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const languages = [
    {
      id: 'python',
      emoji: '🐍',
      name: 'PYTHON',
      code: 'print("Olá, mundo!")',
      color: 'var(--sesc-green-grass)',
    },
    {
      id: 'javascript',
      emoji: '☕',
      name: 'JAVASCRIPT',
      code: 'console.log("Olá, mundo!")',
      color: 'var(--sesc-yellow-flower)',
    },
    {
      id: 'c',
      emoji: '🔧',
      name: 'C',
      code: 'printf("Olá, mundo!");',
      color: 'var(--sesc-pink)',
    },
  ];

  return (
    <StoryScreenFrame
      currentScreen={6}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA06_LAYOUT}
      contentStageThemeClassName={STORY_SCREEN_THEMES.tela06.contentStageThemeClassName}
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
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLanguage(selectedLanguage === lang.id ? null : lang.id)}
              type="button"
              className={`w-full rounded-3xl border-[6px] border-black p-8 transition-all duration-300 ${
                selectedLanguage === lang.id
                  ? 'scale-105 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'
                  : 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
              style={{ backgroundColor: lang.color }}
            >
              <div className="mb-6 flex items-center gap-6">
                <span className="text-[72px]">{lang.emoji}</span>
                <h3 className="text-[42px] font-black uppercase text-black">{lang.name}</h3>
              </div>

              <div className="rounded-2xl border-[4px] border-white bg-black p-6">
                <code className="font-mono text-[28px] font-bold text-[var(--sesc-green-grass)]">{lang.code}</code>
              </div>

              {selectedLanguage === lang.id && (
                <div className="mt-6 rounded-2xl border-[4px] border-black bg-white p-6">
                  <p className="text-[24px] font-bold text-black">Essa linguagem diz: “Olá, mundo!”.</p>
                </div>
              )}
            </button>
          ))}
        </div>
      }
    />
  );
}
