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
              Monte um programa para o personagem andar até a bolinha e depois pular para pegá-la.
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
                <g stroke="#111833" strokeLinejoin="round" strokeWidth="6">
                  <g className="scratch-cat-leg-back">
                    <path d="M104 176 H142 V226 H98 V202 H82 V176Z" fill="#293a9a" />
                    <path d="M82 202 H142 V232 H72 V218Z" fill="#9fafdc" />
                    <path d="M92 206 H118 V226 H88Z" fill="#8b98aa" strokeWidth="0" />
                  </g>

                  <g className="scratch-cat-leg-front">
                    <path d="M170 176 H208 L226 226 H182 V202 H166 V176Z" fill="#3244a7" />
                    <path d="M182 202 H238 V232 H174 V218Z" fill="#9fafdc" />
                    <path d="M208 206 H232 V226 H204Z" fill="#8b98aa" strokeWidth="0" />
                  </g>

                  <path d="M72 100 H238 L256 172 L220 188 L206 130 H104 L90 188 L54 172Z" fill="#38b79f" />
                  <path d="M54 172 L72 100 H102 L92 186Z" fill="#f59a2f" />
                  <path d="M238 100 H268 L286 172 L248 186Z" fill="#f59a2f" />

                  <path d="M92 122 H218 V184 H92Z" fill="#17233f" />
                  <path d="M88 116 H222 V132 H88Z" fill="#4d688e" />
                  <path d="M104 140 H116 V152 H104Z" fill="#f4b9d5" strokeWidth="0" />
                  <path d="M126 140 H134 V152 H126Z" fill="#d7652d" strokeWidth="0" />
                  <path d="M148 140 H170 V152 H148Z" fill="#e8ec27" strokeWidth="0" />
                  <path d="M184 140 H210 V148 H184Z" fill="#5eb4e8" strokeWidth="0" />
                  <path d="M114 164 H156 V172 H114Z" fill="#38b79f" strokeWidth="0" />
                  <path d="M168 164 H206 V172 H168Z" fill="#f8db19" strokeWidth="0" />
                  <path d="M112 148 H120 V160 H112Z" fill="#f4b9d5" strokeWidth="0" />
                  <path d="M138 154 H160 V160 H138Z" fill="#5eb4e8" strokeWidth="0" />
                  <path d="M198 154 H214 V160 H198Z" fill="#f4b9d5" strokeWidth="0" />

                  <path d="M132 82 H178 V112 H132Z" fill="#d26728" />
                  <path d="M116 10 H210 V88 H116Z" fill="#f59a2f" />
                  <path d="M116 10 H210 V42 H116Z" fill="#5b2418" />
                  <path d="M116 10 H148 V88 H116Z" fill="#5b2418" />
                  <path d="M150 10 H210 V22 H150Z" fill="#cf5f24" strokeWidth="0" />
                  <path d="M138 54 H164 V74 H138Z" fill="#fff8eb" strokeWidth="0" />
                  <path d="M176 54 H202 V74 H176Z" fill="#fff8eb" strokeWidth="0" />
                  <path d="M160 54 H176 V74 H160Z" fill="#111833" strokeWidth="0" />
                  <path d="M202 54 H210 V74 H202Z" fill="#111833" strokeWidth="0" />
                  <path d="M162 78 H188 V100 H162Z" fill="#805231" strokeWidth="0" />
                  <path d="M138 100 H210 V122 H138Z" fill="#5b2418" />
                  <path d="M158 104 H194 V118 H158Z" fill="#f59a2f" strokeWidth="0" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      }
    />
  );
}
