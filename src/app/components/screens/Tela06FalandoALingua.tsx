import type { ScreenThemeConfig } from '../../config/screenTheme';
import { useState } from 'react';
import { ScreenTitle } from '../ScreenTitle';
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
      leftMainClassName="pt-8"
      leftMain={
        <>
          <ScreenTitle
            title="Falando a língua do computador"
            eyebrow="anos 1950-60"
            gapClassName="gap-1"
            eyebrowClassName="text-[24px]"
            titleClassName="!text-[58px]"
          />

          <div className="mt-5 space-y-3 font-bold-text text-[26px] leading-[1.34] text-[var(--sesc-ink)]">
            <p>
              Computadores não entendem português. Eles entendem{' '}
              <span className="text-[var(--sesc-orange)]">linguagens de programação</span>: jeitos especiais de escrever instruções.
            </p>
          </div>

          <div className="mt-5 rounded-3xl border-[4px] border-[var(--sesc-ink)] bg-[rgba(255,250,241,0.86)] px-6 py-5 shadow-[0_12px_28px_rgba(39,35,72,0.14)]">
            <p className="font-bold-text text-[24px] leading-[1.25] text-[var(--sesc-blue-dark)]">
              Clique nos cards ao lado para ver como diferentes linguagens dizem “Olá, mundo!”.
            </p>
          </div>

          <div className="mt-5">
            <div className="relative h-[178px] w-[330px]">
              <svg viewBox="0 0 300 200" className="h-full w-full overflow-visible">
                <path
                  d="M 42 170 C 62 118, 105 118, 132 144 C 158 170, 198 155, 204 118 C 209 88, 236 76, 263 96"
                  stroke="#1f2a44"
                  strokeWidth="58"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 42 170 C 62 118, 105 118, 132 144 C 158 170, 198 155, 204 118 C 209 88, 236 76, 263 96"
                  stroke="var(--sesc-green-grass)"
                  strokeWidth="48"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 66 154 C 88 130, 110 134, 128 154 C 154 181, 206 154, 210 112"
                  stroke="#9bd56a"
                  strokeWidth="16"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <circle cx="263" cy="96" r="40" fill="var(--sesc-green-grass)" stroke="black" strokeWidth="5" />
                <circle cx="251" cy="86" r="9" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="273" cy="86" r="9" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="253" cy="87" r="4" fill="black" />
                <circle cx="275" cy="87" r="4" fill="black" />
                <path d="M 260 103 C 266 109, 273 109, 279 103" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M 294 103 L 323 103 M 323 103 L 316 96 M 323 103 L 316 110" stroke="#e7354c" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="96" cy="126" r="8" fill="var(--sesc-yellow-flower)" opacity="0.75" />
                <circle cx="132" cy="146" r="8" fill="var(--sesc-yellow-flower)" opacity="0.75" />
                <circle cx="176" cy="146" r="8" fill="var(--sesc-yellow-flower)" opacity="0.75" />
                <text x="54" y="98" fill="var(--sesc-blue-dark)" fontSize="20" fontWeight="900">
                  {'{}'}
                </text>
                <text x="178" y="80" fill="var(--sesc-blue-dark)" fontSize="22" fontWeight="900">
                  ;
                </text>
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
