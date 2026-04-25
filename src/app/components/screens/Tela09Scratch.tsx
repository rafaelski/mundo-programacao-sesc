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
}

const TELA09_LAYOUT = createStoryScreenLayout({
  columns: '0.92fr 1.08fr',
});

const blocks: Block[] = [
  { id: '1', label: 'QUANDO CLICAR ▶', color: 'var(--sesc-yellow-flower)', correctOrder: 1 },
  { id: '2', label: 'MOVER 10 PASSOS →', color: 'var(--sesc-blue-dark)', correctOrder: 2 },
  { id: '3', label: 'PULAR 50 ↑', color: 'var(--sesc-pink)', correctOrder: 3 },
  { id: '4', label: 'VOLTAR AO CHÃO ↓', color: 'var(--sesc-green-grass)', correctOrder: 4 },
];

export function Tela09Scratch({ onPrevious, onNext }: Tela09ScratchProps) {
  const [droppedBlocks, setDroppedBlocks] = useState<Block[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleBlockClick = (block: Block) => {
    if (droppedBlocks.find((droppedBlock) => droppedBlock.id === block.id)) {
      return;
    }

    const newDropped = [...droppedBlocks, block];
    setDroppedBlocks(newDropped);

    if (newDropped.length === blocks.length) {
      setIsCorrect(newDropped.every((droppedBlock, index) => droppedBlock.correctOrder === index + 1));
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

          <div className="mt-8 rounded-2xl border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-8 py-6">
            <p className="text-[28px] font-bold text-black">Clique nos blocos na ordem certa para fazer o gatinho pular.</p>
          </div>
        </>
      }
      right={
        <div className="flex h-full w-full flex-col gap-5">
          <div className="flex flex-wrap gap-3">
            {blocks.map((block) => {
              const isDropped = droppedBlocks.some((droppedBlock) => droppedBlock.id === block.id);

              return (
                <button
                  key={block.id}
                  onClick={() => handleBlockClick(block)}
                  disabled={isDropped}
                  type="button"
                  className={`rounded-2xl border-[5px] border-black px-6 py-4 text-[21px] font-black transition-all duration-200 ${
                    isDropped
                      ? 'cursor-not-allowed opacity-30'
                      : 'cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                  style={{ backgroundColor: block.color }}
                >
                  {block.label}
                </button>
              );
            })}
          </div>

          <div className="min-h-[220px] rounded-3xl border-[6px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="mb-4 text-[22px] font-bold text-[var(--sesc-gray-stone)]">
              {droppedBlocks.length === 0 ? 'Monte o programa aqui:' : 'Seu programa:'}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {droppedBlocks.map((block, index) => (
                <div
                  key={`${block.id}-${index}`}
                  className="animate-fadeIn rounded-2xl border-[4px] border-black px-5 py-3 text-[19px] font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: block.color }}
                >
                  {block.label}
                </div>
              ))}
            </div>

            {droppedBlocks.length > 0 && (
              <button
                onClick={handleReset}
                type="button"
                className="mt-4 rounded-xl border-[4px] border-black bg-[var(--sesc-gray-stone)] px-5 py-2 text-[18px] font-bold text-white"
              >
                Recomeçar
              </button>
            )}

            {isCorrect && (
              <div className="mt-4 rounded-xl border-[4px] border-black bg-[var(--sesc-green-grass)] px-6 py-3">
                <p className="text-center text-[22px] font-black text-white">Correto! O gatinho ganhou movimento!</p>
              </div>
            )}
          </div>

          <div className="relative flex min-h-0 flex-1 items-end justify-center overflow-hidden rounded-[28px] border-[5px] border-black bg-[linear-gradient(180deg,#d9efff_0%,#fffaf1_68%)] px-8 pb-8 shadow-[7px_7px_0_rgba(0,0,0,1)]">
            <div className="absolute bottom-[34px] left-10 right-10 h-[10px] rounded-full border-t-[4px] border-black bg-[var(--sesc-gray-stone)]" />
            <div className="absolute bottom-[48px] left-[92px] h-[36px] w-[36px] rounded-full bg-[var(--sesc-yellow-flower)] opacity-70" />
            <div className="absolute right-[92px] top-[44px] rounded-full border-[4px] border-black bg-white px-5 py-3 text-[20px] font-black text-[var(--sesc-blue-dark)] shadow-[4px_4px_0_rgba(0,0,0,1)]">
              {isCorrect ? 'vamos!' : 'monte o código'}
            </div>

            <div
              className={`absolute bottom-[58px] left-1/2 h-[190px] w-[210px] -translate-x-1/2 ${
                isCorrect ? 'animate-scratch-cat-run-jump' : ''
              }`}
            >
              <div className="relative h-full w-full">
                <div className="scratch-cat-tail absolute left-[4px] top-[86px] h-[26px] w-[86px] rounded-full border-[5px] border-black bg-[var(--sesc-orange)]" />

                <div className="absolute bottom-[24px] left-[54px] h-[86px] w-[118px] rounded-[52px_58px_46px_46px] border-[5px] border-black bg-[var(--sesc-orange)] shadow-[6px_6px_0_rgba(39,35,72,0.18)]">
                  <div className="absolute left-[28px] top-[18px] h-[32px] w-[48px] rounded-full bg-[#ffb07a] opacity-80" />
                </div>

                <div className="scratch-cat-leg-back absolute bottom-[6px] left-[76px] h-[54px] w-[28px] rounded-full border-[5px] border-black bg-[var(--sesc-orange)]" />
                <div className="scratch-cat-leg-front absolute bottom-[6px] left-[128px] h-[54px] w-[28px] rounded-full border-[5px] border-black bg-[var(--sesc-orange)]" />
                <div className="absolute bottom-0 left-[70px] h-[20px] w-[48px] rounded-full border-[5px] border-black bg-[var(--sesc-orange)]" />
                <div className="absolute bottom-0 left-[122px] h-[20px] w-[48px] rounded-full border-[5px] border-black bg-[var(--sesc-orange)]" />

                <div className="absolute left-[92px] top-[18px] h-[94px] w-[102px] rounded-[48px] border-[5px] border-black bg-[var(--sesc-orange)]">
                  <div className="absolute -left-[4px] -top-[22px] h-[42px] w-[38px] rotate-[-20deg] rounded-[8px_26px_8px_26px] border-[5px] border-black bg-[var(--sesc-orange)]" />
                  <div className="absolute right-[2px] -top-[24px] h-[42px] w-[38px] rotate-[22deg] rounded-[26px_8px_26px_8px] border-[5px] border-black bg-[var(--sesc-orange)]" />
                  <div className="absolute left-[18px] top-[34px] h-[14px] w-[14px] rounded-full border-[4px] border-black bg-white">
                    <div className="ml-[3px] mt-[3px] h-[4px] w-[4px] rounded-full bg-black" />
                  </div>
                  <div className="absolute right-[24px] top-[34px] h-[14px] w-[14px] rounded-full border-[4px] border-black bg-white">
                    <div className="ml-[3px] mt-[3px] h-[4px] w-[4px] rounded-full bg-black" />
                  </div>
                  <div className="absolute left-[39px] top-[54px] h-[12px] w-[18px] rounded-full border-[3px] border-black bg-[var(--sesc-pink)]" />
                  <div className="absolute left-[30px] top-[70px] h-[16px] w-[42px] rounded-b-full border-b-[5px] border-black" />
                  <div className="absolute -right-[14px] top-[56px] h-[5px] w-[34px] rotate-[10deg] rounded-full bg-black" />
                  <div className="absolute -right-[14px] top-[70px] h-[5px] w-[34px] rotate-[-10deg] rounded-full bg-black" />
                  <div className="absolute -left-[20px] top-[56px] h-[5px] w-[34px] rotate-[-10deg] rounded-full bg-black" />
                  <div className="absolute -left-[20px] top-[70px] h-[5px] w-[34px] rotate-[10deg] rounded-full bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
