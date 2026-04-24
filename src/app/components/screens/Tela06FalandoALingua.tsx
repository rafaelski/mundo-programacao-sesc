import { useState } from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';

interface Tela06FalandoALinguaProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela06FalandoALingua({ onPrevious, onNext }: Tela06FalandoALinguaProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const languages = [
    {
      id: 'python',
      emoji: '🐍',
      name: 'PYTHON',
      code: 'print("Olá, mundo!")',
      color: 'var(--sesc-green-grass)'
    },
    {
      id: 'javascript',
      emoji: '☕',
      name: 'JAVASCRIPT',
      code: 'console.log("Olá, mundo!")',
      color: 'var(--sesc-yellow-flower)'
    },
    {
      id: 'c',
      emoji: '🔧',
      name: 'C',
      code: 'printf("Olá, mundo!");',
      color: 'var(--sesc-pink)'
    }
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-[var(--sesc-beige-light)]">
      <Header currentScreen={6} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex items-center gap-16">
        {/* Lado esquerdo - Conteúdo texto */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Título */}
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 text-[64px] font-black uppercase tracking-tight text-black transform translate-x-[6px] translate-y-[6px] leading-tight">
                FALANDO A LÍNGUA DO COMPUTADOR
              </span>
              <span className="absolute inset-0 text-[64px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)] transform translate-x-[3px] translate-y-[3px] leading-tight">
                FALANDO A LÍNGUA DO COMPUTADOR
              </span>
              <span className="relative text-[64px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)] leading-tight">
                FALANDO A LÍNGUA DO COMPUTADOR
              </span>
            </h2>
            <p className="text-[48px] font-bold text-[var(--sesc-gray-stone)] mt-2">anos 1950–60</p>
          </div>

          {/* Texto principal */}
          <div className="text-[32px] leading-relaxed font-bold text-black space-y-6">
            <p>
              Computadores não entendem português. Eles entendem <span className="text-[var(--sesc-orange)]">LINGUAGENS DE PROGRAMAÇÃO</span> — jeitos especiais de escrever instruções.
            </p>
            <p className="text-[28px] text-[var(--sesc-blue-dark)]">
              👉 Clique nos cards ao lado para ver como diferentes linguagens dizem "Olá, mundo!"
            </p>
          </div>

          {/* Personagem Python (cobra) */}
          <div className="mt-8">
            <div className="relative w-[300px] h-[200px]">
              {/* Corpo da cobra em S */}
              <svg viewBox="0 0 300 200" className="w-full h-full">
                <path
                  d="M 50 180 Q 80 120, 120 140 T 200 100 T 260 120"
                  stroke="var(--sesc-green-grass)"
                  strokeWidth="50"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 50 180 Q 80 120, 120 140 T 200 100 T 260 120"
                  stroke="black"
                  strokeWidth="56"
                  fill="none"
                  strokeLinecap="round"
                  opacity="1"
                  style={{ strokeDasharray: '0 1000', strokeDashoffset: '0' }}
                />

                {/* Cabeça */}
                <circle cx="260" cy="120" r="40" fill="var(--sesc-green-grass)" stroke="black" strokeWidth="5" />

                {/* Olhos */}
                <circle cx="250" cy="110" r="8" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="270" cy="110" r="8" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="252" cy="110" r="4" fill="black" />
                <circle cx="272" cy="110" r="4" fill="black" />

                {/* Língua */}
                <path
                  d="M 280 130 L 310 130 M 310 130 L 305 125 M 310 130 L 305 135"
                  stroke="#ff0000"
                  strokeWidth="4"
                  fill="none"
                />

                {/* Padrão de escamas */}
                <circle cx="150" cy="140" r="8" fill="var(--sesc-yellow-flower)" opacity="0.6" />
                <circle cx="180" cy="115" r="8" fill="var(--sesc-yellow-flower)" opacity="0.6" />
                <circle cx="210" cy="105" r="8" fill="var(--sesc-yellow-flower)" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Lado direito - Cards interativos de linguagens */}
        <div className="flex-1 flex flex-col gap-8 items-center justify-center">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLanguage(selectedLanguage === lang.id ? null : lang.id)}
              type="button"
              className={`w-full p-8 rounded-3xl border-[6px] border-black transition-all duration-300 cursor-pointer select-none touch-none ${
                selectedLanguage === lang.id
                  ? 'shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] scale-105'
                  : 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
              style={{ backgroundColor: lang.color }}
            >
              <div className="flex items-center gap-6 mb-6">
                <span className="text-[72px]">{lang.emoji}</span>
                <h3 className="text-[42px] font-black uppercase text-black">{lang.name}</h3>
              </div>

              <div className="bg-black rounded-2xl p-6 border-[4px] border-white">
                <code className="text-[28px] font-bold text-[var(--sesc-green-grass)] font-mono">
                  {lang.code}
                </code>
              </div>

              {selectedLanguage === lang.id && (
                <div className="mt-6 bg-white rounded-2xl p-6 border-[4px] border-black">
                  <p className="text-[24px] font-bold text-black">
                    ✅ Essa linguagem diz: "Olá, mundo!"
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
