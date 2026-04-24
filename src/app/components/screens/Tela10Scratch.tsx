import { useState } from 'react';
import { STORY_SCREEN_THEMES } from '../../config/storyScreenThemes';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela10ScratchProps {
  onPrevious: () => void;
  onNext: () => void;
}

interface Block {
  id: string;
  label: string;
  color: string;
  correctOrder: number;
}

const TELA10_LAYOUT = createStoryScreenLayout({
  columns: '0.92fr 1.08fr',
});

export function Tela10Scratch({ onPrevious, onNext }: Tela10ScratchProps) {
  const [droppedBlocks, setDroppedBlocks] = useState<Block[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [catJumping, setCatJumping] = useState(false);

  const blocks: Block[] = [
    { id: '1', label: 'QUANDO CLICAR ▶', color: 'var(--sesc-yellow-flower)', correctOrder: 1 },
    { id: '2', label: 'MOVER 10 PASSOS →', color: 'var(--sesc-blue-dark)', correctOrder: 2 },
    { id: '3', label: 'PULAR 50 ↑', color: 'var(--sesc-pink)', correctOrder: 3 },
    { id: '4', label: 'VOLTAR AO CHÃO ↓', color: 'var(--sesc-green-grass)', correctOrder: 4 },
  ];

  const handleBlockClick = (block: Block) => {
    if (!droppedBlocks.find((b) => b.id === block.id)) {
      const newDropped = [...droppedBlocks, block];
      setDroppedBlocks(newDropped);
      if (newDropped.length === 4) {
        const correct = newDropped.every((b, i) => b.correctOrder === i + 1);
        setIsCorrect(correct);
        if (correct) {
          setCatJumping(true);
          setTimeout(() => setCatJumping(false), 2000);
        }
      }
    }
  };

  const handleReset = () => {
    setDroppedBlocks([]);
    setIsCorrect(false);
    setCatJumping(false);
  };

  return (
    <StoryScreenFrame
      currentScreen={10}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA10_LAYOUT}
      contentStageThemeClassName={STORY_SCREEN_THEMES.tela10.contentStageThemeClassName}
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
              <span className="text-[var(--sesc-pink)]">Scratch</span>: uma linguagem feita de blocos coloridos que você arrasta.
            </p>
            <p>Nada de digitar código difícil.</p>
            <p>
              Hoje <span className="text-[var(--sesc-green-grass)]">milhões de crianças</span> no mundo todo fazem seus primeiros
              jogos e animações com Scratch.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-8 py-6">
            <p className="text-[28px] font-bold text-black">Clique nos blocos na ordem certa para fazer o gatinho pular.</p>
          </div>
        </>
      }
      right={
        <div className="flex h-full w-full flex-col gap-8">
          <div className="flex flex-wrap gap-4">
            {blocks.map((block) => (
              <button
                key={block.id}
                onClick={() => handleBlockClick(block)}
                disabled={droppedBlocks.find((b) => b.id === block.id) !== undefined}
                type="button"
                className={`rounded-2xl border-[5px] border-black px-8 py-6 text-[24px] font-bold transition-all duration-200 ${
                  droppedBlocks.find((b) => b.id === block.id)
                    ? 'cursor-not-allowed opacity-30'
                    : 'cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                }`}
                style={{ backgroundColor: block.color }}
              >
                {block.label}
              </button>
            ))}
          </div>

          <div className="min-h-[320px] rounded-3xl border-[6px] border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="mb-6 text-[24px] font-bold text-[var(--sesc-gray-stone)]">
              {droppedBlocks.length === 0 ? 'Monte o programa aqui:' : 'Seu programa:'}
            </p>
            <div className="space-y-3">
              {droppedBlocks.map((block, index) => (
                <div
                  key={`${block.id}-${index}`}
                  className="animate-fadeIn rounded-2xl border-[5px] border-black px-8 py-5 text-[24px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
                className="mt-6 rounded-xl border-[4px] border-black bg-[var(--sesc-gray-stone)] px-6 py-3 font-bold text-white"
              >
                Recomeçar
              </button>
            )}

            {isCorrect && (
              <div className="mt-6 rounded-xl border-[4px] border-black bg-[var(--sesc-green-grass)] px-8 py-4">
                <p className="text-center text-[28px] font-bold text-white">Correto! O gatinho pulou!</p>
              </div>
            )}
          </div>

          <div className="relative flex h-[150px] items-end justify-center">
            <div className={`transition-all duration-500 ${catJumping ? '-translate-y-[100px]' : 'translate-y-0'}`}>
              <div className="relative">
                <div className="relative h-[100px] w-[120px] rounded-[40px] border-[5px] border-black bg-[var(--sesc-orange)]">
                  <div className="absolute bottom-2 left-1/2 h-[50px] w-[60px] -translate-x-1/2 rounded-full border-[3px] border-black bg-[#ffa07a]"></div>
                </div>
                <div className="absolute -top-12 left-1/2 h-[80px] w-[90px] -translate-x-1/2 rounded-full border-[5px] border-black bg-[var(--sesc-orange)]"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[8px] border-t-[4px] border-black bg-[var(--sesc-gray-stone)]"></div>
          </div>
        </div>
      }
    />
  );
}
