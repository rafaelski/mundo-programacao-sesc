import { useState } from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';

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

export function Tela10Scratch({ onPrevious, onNext }: Tela10ScratchProps) {
  const [droppedBlocks, setDroppedBlocks] = useState<Block[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [catJumping, setCatJumping] = useState(false);

  const blocks: Block[] = [
    { id: '1', label: 'QUANDO CLICAR ▶', color: 'var(--sesc-yellow-flower)', correctOrder: 1 },
    { id: '2', label: 'MOVER 10 PASSOS →', color: 'var(--sesc-blue-dark)', correctOrder: 2 },
    { id: '3', label: 'PULAR 50 ↑', color: 'var(--sesc-pink)', correctOrder: 3 },
    { id: '4', label: 'VOLTAR AO CHÃO ↓', color: 'var(--sesc-green-grass)', correctOrder: 4 }
  ];

  const handleBlockClick = (block: Block) => {
    if (!droppedBlocks.find(b => b.id === block.id)) {
      const newDropped = [...droppedBlocks, block];
      setDroppedBlocks(newDropped);

      // Verificar se está na ordem correta
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
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-[var(--sesc-beige-light)]">
      <Header currentScreen={10} totalScreens={16} onPrevious={onPrevious} onNext={onNext} />

      <div className="pt-32 px-20 h-full flex items-center gap-16">
        {/* Lado esquerdo - Conteúdo texto */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Título */}
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 text-[56px] font-black uppercase tracking-tight text-black transform translate-x-[6px] translate-y-[6px] leading-tight">
                SCRATCH: PROGRAMAR BRINCANDO
              </span>
              <span className="absolute inset-0 text-[56px] font-black uppercase tracking-tight text-[var(--sesc-yellow-flower)] transform translate-x-[3px] translate-y-[3px] leading-tight">
                SCRATCH: PROGRAMAR BRINCANDO
              </span>
              <span className="relative text-[56px] font-black uppercase tracking-tight text-[var(--sesc-blue-dark)] leading-tight">
                SCRATCH: PROGRAMAR BRINCANDO
              </span>
            </h2>
            <p className="text-[48px] font-bold text-[var(--sesc-gray-stone)] mt-2">2007</p>
          </div>

          {/* Texto principal */}
          <div className="text-[32px] leading-relaxed font-bold text-black space-y-6">
            <p>
              Em 2007, um laboratório chamado <span className="text-[var(--sesc-orange)]">MIT</span> criou o <span className="text-[var(--sesc-pink)]">SCRATCH</span>: uma linguagem feita de blocos coloridos que você arrasta.
            </p>
            <p>
              Nada de digitar código difícil!
            </p>
            <p>
              Hoje <span className="text-[var(--sesc-green-grass)]">milhões de crianças</span> no mundo todo fazem seus primeiros jogos e animações com Scratch.
            </p>
          </div>

          {/* Instrução */}
          <div className="bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-2xl px-8 py-6">
            <p className="text-[28px] font-bold text-black">
              👉 Clique nos blocos na ordem certa para fazer o gatinho pular!
            </p>
          </div>
        </div>

        {/* Lado direito - Blocos Scratch arrastáveis */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Área de blocos disponíveis */}
          <div className="flex flex-wrap gap-4">
            {blocks.map(block => (
              <button
                key={block.id}
                onClick={() => handleBlockClick(block)}
                disabled={droppedBlocks.find(b => b.id === block.id) !== undefined}
                type="button"
                className={`px-8 py-6 rounded-2xl border-[5px] border-black font-bold text-[24px] transition-all duration-200 select-none touch-none ${
                  droppedBlocks.find(b => b.id === block.id)
                    ? 'opacity-30 cursor-not-allowed'
                    : 'active:scale-105 active:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }`}
                style={{ backgroundColor: block.color }}
              >
                {block.label}
              </button>
            ))}
          </div>

          {/* Área de montagem (onde os blocos são "arrastados") */}
          <div className="bg-white border-[6px] border-black rounded-3xl p-8 min-h-[320px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-[24px] font-bold mb-6 text-[var(--sesc-gray-stone)]">
              {droppedBlocks.length === 0 ? 'Monte o programa aqui:' : 'Seu programa:'}
            </p>

            <div className="space-y-3">
              {droppedBlocks.map((block, index) => (
                <div
                  key={`${block.id}-${index}`}
                  className="px-8 py-5 rounded-2xl border-[5px] border-black font-bold text-[24px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-fadeIn"
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
                className="mt-6 px-6 py-3 bg-[var(--sesc-gray-stone)] text-white border-[4px] border-black rounded-xl font-bold hover:bg-[var(--sesc-gray-light)] active:bg-[var(--sesc-gray-light)] transition-colors cursor-pointer select-none touch-none"
              >
                🔄 Recomeçar
              </button>
            )}

            {isCorrect && (
              <div className="mt-6 bg-[var(--sesc-green-grass)] border-[4px] border-black rounded-xl px-8 py-4">
                <p className="text-[28px] font-bold text-white text-center">
                  ✅ CORRETO! O gatinho pulou!
                </p>
              </div>
            )}
          </div>

          {/* Gatinho Scratch */}
          <div className="relative h-[150px] flex items-end justify-center">
            <div
              className={`transition-all duration-500 ${
                catJumping ? '-translate-y-[100px]' : 'translate-y-0'
              }`}
            >
              {/* Corpo do gato */}
              <div className="relative">
                {/* Corpo principal */}
                <div className="w-[120px] h-[100px] bg-[var(--sesc-orange)] border-[5px] border-black rounded-[40px] relative">
                  {/* Barriga */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[50px] bg-[#ffa07a] border-[3px] border-black rounded-full"></div>
                </div>

                {/* Cabeça */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[90px] h-[80px] bg-[var(--sesc-orange)] border-[5px] border-black rounded-full">
                  {/* Orelhas */}
                  <div className="absolute -top-6 left-2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-[var(--sesc-orange)] border-[2px] border-black"></div>
                  <div className="absolute -top-6 right-2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-[var(--sesc-orange)] border-[2px] border-black"></div>

                  {/* Olhos */}
                  <div className="absolute top-[20px] left-[15px] w-[20px] h-[28px] bg-white border-[3px] border-black rounded-full">
                    <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[10px] h-[12px] bg-black rounded-full"></div>
                  </div>
                  <div className="absolute top-[20px] right-[15px] w-[20px] h-[28px] bg-white border-[3px] border-black rounded-full">
                    <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[10px] h-[12px] bg-black rounded-full"></div>
                  </div>

                  {/* Nariz */}
                  <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[12px] h-[10px] bg-[var(--sesc-pink)] border-[3px] border-black rounded-full"></div>

                  {/* Bigodes */}
                  <div className="absolute top-[35px] -left-8 w-[30px] h-[2px] bg-black"></div>
                  <div className="absolute top-[40px] -left-8 w-[30px] h-[2px] bg-black"></div>
                  <div className="absolute top-[35px] -right-8 w-[30px] h-[2px] bg-black"></div>
                  <div className="absolute top-[40px] -right-8 w-[30px] h-[2px] bg-black"></div>
                </div>

                {/* Patas */}
                <div className="absolute -bottom-4 left-2 w-[24px] h-[35px] bg-[var(--sesc-orange)] border-[4px] border-black rounded-b-full"></div>
                <div className="absolute -bottom-4 right-2 w-[24px] h-[35px] bg-[var(--sesc-orange)] border-[4px] border-black rounded-b-full"></div>

                {/* Rabo */}
                <div className="absolute top-4 -right-12 w-[50px] h-[16px] bg-[var(--sesc-orange)] border-[4px] border-black rounded-full transform rotate-45"></div>
              </div>
            </div>

            {/* Chão */}
            <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-[var(--sesc-gray-stone)] border-t-[4px] border-black"></div>
          </div>
        </div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
