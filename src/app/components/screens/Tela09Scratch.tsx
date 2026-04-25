import type { ScreenThemeConfig } from '../../config/screenTheme';
import { useState } from 'react';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela09ScratchProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA09_THEME: ScreenThemeConfig = {
  appBackgroundClassName: 'app-bg-tile app-bg-mustard-argyle',
  contentStageThemeClassName: 'content-stage-theme-soft',
};

interface Block {
  id: string;
  label: string;
  color: string;
  correctOrder: number;
  programWidth: string;
}

const TELA09_LAYOUT = createStoryScreenLayout({
  columns: '0.92fr 1.08fr',
});

const blocks: Block[] = [
  { id: '1', label: 'COMEÇAR ▶', color: 'var(--sesc-yellow-flower)', correctOrder: 1, programWidth: '138px' },
  { id: '3', label: 'PULAR 50 ↑', color: 'var(--sesc-pink)', correctOrder: 3, programWidth: '132px' },
  { id: '2', label: 'MOVER 10 PASSOS →', color: 'var(--sesc-blue-dark)', correctOrder: 2, programWidth: '192px' },
  { id: '4', label: 'VOLTAR AO CHÃO ↓', color: 'var(--sesc-green-grass)', correctOrder: 4, programWidth: '176px' },
];

export function Tela09Scratch({ onPrevious, onNext }: Tela09ScratchProps) {
  const [droppedBlocks, setDroppedBlocks] = useState<Block[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const hasCompletedProgram = droppedBlocks.length === blocks.length;
  const isWrong = hasCompletedProgram && !isCorrect;

  const handleBlockClick = (block: Block) => {
    if (droppedBlocks.some((droppedBlock) => droppedBlock.id === block.id)) {
      return;
    }

    const nextDroppedBlocks = [...droppedBlocks, block];
    setDroppedBlocks(nextDroppedBlocks);

    if (nextDroppedBlocks.length === blocks.length) {
      setIsCorrect(nextDroppedBlocks.every((droppedBlock, index) => droppedBlock.correctOrder === index + 1));
    }
  };

  const handleReset = () => {
    setDroppedBlocks([]);
    setIsCorrect(false);
  };

  return (
    <StoryScreenFrame
      currentScreen={9}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA09_LAYOUT}
      contentStageThemeClassName={TELA09_THEME.contentStageThemeClassName}
      rightClassName="items-stretch"
      leftMain={
        <>
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[56px] font-black uppercase leading-tight tracking-tight text-black">
                SCRATCH: PROGRAMAR BRINCANDO
              </span>
              <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[56px] font-black uppercase leading-tight tracking-tight text-[var(--sesc-yellow-flower)]">
                SCRATCH: PROGRAMAR BRINCANDO
              </span>
              <span className="relative text-[56px] font-black uppercase leading-tight tracking-tight text-[var(--sesc-blue-dark)]">
                SCRATCH: PROGRAMAR BRINCANDO
              </span>
            </h2>
            <p className="mt-2 text-[48px] font-bold text-[var(--sesc-gray-stone)]">2007</p>
          </div>

          <div className="mt-8 space-y-6 text-[32px] font-bold leading-relaxed text-black">
            <p>
              Em 2007, um laboratório chamado <span className="text-[var(--sesc-orange)]">MIT</span> criou o{' '}
              <span className="text-[var(--sesc-pink)]">Scratch</span>: uma linguagem feita de blocos coloridos que você
              arrasta.
            </p>
            <p>Nada de digitar código difícil.</p>
            <p>
              Hoje <span className="text-[var(--sesc-green-grass)]">milhões de crianças</span> no mundo todo fazem seus
              primeiros jogos e animações com Scratch.
            </p>
          </div>

        </>
      }
      right={
        <div className="relative grid h-full w-full grid-rows-[152px_196px_minmax(0,1fr)] gap-5 overflow-visible">
          <div className="h-full overflow-hidden">
            <p className="mb-3 text-[22px] font-black leading-tight text-[var(--sesc-blue-dark)]">
              Monte um programa para o gatinho andar até a bolinha e depois pular para pegá-la.
            </p>
            <div className="grid grid-cols-4 gap-3">
              {blocks.map((block) => {
                const isDropped = droppedBlocks.some((droppedBlock) => droppedBlock.id === block.id);

                return (
                  <button
                    key={block.id}
                    onClick={() => handleBlockClick(block)}
                    disabled={isDropped}
                    type="button"
                    className={`flex h-[58px] items-center justify-center rounded-xl border-[4px] border-black px-2 text-center text-[17px] font-black leading-tight transition-all duration-200 ${
                      isDropped
                        ? 'cursor-not-allowed opacity-45'
                        : 'cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                    }`}
                    style={{ backgroundColor: block.color, color: block.id === '2' ? 'white' : 'var(--sesc-blue-dark)' }}
                  >
                    {block.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative h-full overflow-hidden rounded-3xl border-[6px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="mb-3 text-[22px] font-bold text-[var(--sesc-gray-stone)]">
              {droppedBlocks.length === 0 ? 'Monte o programa aqui:' : 'Seu programa:'}
            </p>
            <div className="flex flex-nowrap gap-2 overflow-visible">
              {droppedBlocks.map((block, index) => (
                <div
                  key={`${block.id}-${index}`}
                  className="animate-fadeIn flex h-[40px] shrink-0 items-center justify-center whitespace-nowrap rounded-xl border-[4px] border-black px-2 text-[15px] font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  style={{
                    width: block.programWidth,
                    backgroundColor: block.color,
                    color: block.id === '2' ? 'white' : 'var(--sesc-blue-dark)',
                  }}
                >
                  {block.label}
                </div>
              ))}
            </div>

            {droppedBlocks.length > 0 && (
              <button
                onClick={handleReset}
                type="button"
                className="absolute bottom-4 left-6 rounded-xl border-[4px] border-black bg-[var(--sesc-gray-stone)] px-5 py-2 text-[16px] font-bold text-white"
              >
                Recomeçar
              </button>
            )}

            {isCorrect && (
              <div className="absolute bottom-4 left-[176px] right-6 rounded-xl border-[4px] border-black bg-[var(--sesc-green-grass)] px-5 py-2">
                <p className="text-center text-[19px] font-black text-white">Correto! Agora ele anda e pula!</p>
              </div>
            )}

            {isWrong && (
              <div className="absolute bottom-4 left-[176px] right-6 rounded-xl border-[4px] border-black bg-[#f15b5b] px-5 py-2">
                <p className="text-center text-[18px] font-black text-white">Quase! Recomece e tente acertar a ordem.</p>
              </div>
            )}
          </div>

          <div className="relative z-30 min-h-0 overflow-visible rounded-[28px] border-[5px] border-black bg-[linear-gradient(180deg,#d9efff_0%,#fffaf1_68%)] shadow-[7px_7px_0_rgba(0,0,0,1)]">
            <div className="absolute bottom-[34px] left-10 right-10 h-[10px] rounded-full border-t-[4px] border-black bg-[var(--sesc-gray-stone)]" />
            <div className="absolute bottom-[154px] right-[128px] h-[46px] w-[46px] rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)] opacity-95 shadow-[4px_4px_0_rgba(0,0,0,0.25)]" />
            <div
              className={`pointer-events-none absolute bottom-[26px] left-[46px] z-50 h-[242px] w-[310px] ${
                isCorrect ? 'animate-scratch-cat-run-jump' : ''
              }`}
            >
              <svg viewBox="0 0 310 242" className="h-full w-full overflow-visible" aria-hidden="true">
                <g className="scratch-cat-tail">
                  <path
                    d="M95 160 C30 166 34 78 94 86 C142 92 126 152 80 132"
                    fill="none"
                    stroke="black"
                    strokeWidth="39"
                    strokeLinecap="round"
                  />
                  <path
                    d="M95 160 C30 166 34 78 94 86 C142 92 126 152 80 132"
                    fill="none"
                    stroke="#f5a623"
                    strokeWidth="29"
                    strokeLinecap="round"
                  />
                </g>

                <ellipse cx="158" cy="164" rx="58" ry="52" fill="#f5a623" stroke="black" strokeWidth="6" />
                <path d="M146 128 C125 150 125 196 158 211 C191 196 191 150 170 128Z" fill="#fff0c7" />
                <path d="M116 138 C102 150 94 174 100 199" fill="none" stroke="#a96122" strokeWidth="7" strokeLinecap="round" />
                <path d="M126 118 L108 132 M130 134 L110 148 M196 124 L218 136" stroke="#a96122" strokeWidth="6" strokeLinecap="round" />

                <g className="scratch-cat-leg-back">
                  <path d="M123 198 C120 219 134 227 150 215" fill="#fff0c7" stroke="black" strokeWidth="6" strokeLinecap="round" />
                </g>
                <g className="scratch-cat-leg-front">
                  <path d="M172 196 C174 221 190 226 202 211" fill="#fff0c7" stroke="black" strokeWidth="6" strokeLinecap="round" />
                </g>

                <path
                  d="M102 78 L122 20 L159 65 L198 65 L238 20 L258 78 C280 98 276 139 246 158 C214 178 145 178 112 158 C82 139 80 98 102 78Z"
                  fill="#f5a623"
                  stroke="black"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path d="M116 74 L126 38 L148 70Z" fill="#f06292" stroke="#a96122" strokeWidth="5" strokeLinejoin="round" />
                <path d="M244 74 L234 38 L212 70Z" fill="#f06292" stroke="#a96122" strokeWidth="5" strokeLinejoin="round" />
                <path
                  d="M110 132 C130 104 158 113 178 137 C197 113 226 104 250 132 C244 161 211 174 178 166 C145 174 116 161 110 132Z"
                  fill="#fff0c7"
                />
                <ellipse cx="146" cy="106" rx="13" ry="18" fill="black" />
                <ellipse cx="214" cy="106" rx="13" ry="18" fill="black" />
                <circle cx="142" cy="99" r="4" fill="white" />
                <circle cx="210" cy="99" r="4" fill="white" />
                <path d="M176 125 C180 120 188 120 192 125 C188 132 181 132 176 125Z" fill="#f06292" stroke="black" strokeWidth="4" />
                <path d="M184 132 C178 142 166 143 160 136" fill="none" stroke="#7a3f1a" strokeWidth="4" strokeLinecap="round" />
                <path d="M184 132 C190 142 202 143 208 136" fill="none" stroke="#7a3f1a" strokeWidth="4" strokeLinecap="round" />
                <path d="M128 127 L88 119 M130 139 L88 142 M228 127 L270 119 M226 139 L270 142" stroke="black" strokeWidth="4" strokeLinecap="round" />
                <path d="M155 70 L150 52 M180 66 L180 48 M205 70 L210 52" stroke="#a96122" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      }
    />
  );
}
