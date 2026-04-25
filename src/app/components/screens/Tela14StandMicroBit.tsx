import type { ScreenThemeConfig } from '../../config/screenTheme';
import { useState } from 'react';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela14StandMicroBitProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA14_THEME: ScreenThemeConfig = {
  appBackgroundClassName: 'app-bg-tile app-bg-mustard-argyle',
  contentStageThemeClassName: 'content-stage-theme-cream',
};

const TELA14_LAYOUT = createStoryScreenLayout({
  columns: '0.9fr 1.1fr',
  columnGap: '2.75rem',
  leftBottomMinHeight: '12rem',
});

const HEART_PATTERN = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

export function Tela14StandMicroBit({ onPrevious, onNext }: Tela14StandMicroBitProps) {
  const [isHeartLit, setIsHeartLit] = useState(true);

  const handleMicroBitClick = () => {
    setIsHeartLit((prev) => !prev);
  };

  return (
    <StoryScreenFrame
      currentScreen={14}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA14_LAYOUT}
      contentStageThemeClassName={TELA14_THEME.contentStageThemeClassName}
      rightClassName="overflow-hidden"
      leftMain={
        <>
          <div>
            <div className="mb-5 inline-flex rotate-[-2deg] rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-6 py-2 shadow-[5px_5px_0_rgba(0,0,0,0.18)]">
              <span className="text-[22px] font-black uppercase tracking-[0.16em] text-[var(--sesc-blue-dark)]">
                stand ao lado
              </span>
            </div>

            <h2 className="relative inline-block">
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[82px] font-black lowercase leading-[0.95] tracking-tight text-black">
                micro:bit
              </span>
              <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[82px] font-black lowercase leading-[0.95] tracking-tight text-[var(--sesc-orange)]">
                micro:bit
              </span>
              <span className="relative text-[82px] font-black lowercase leading-[0.95] tracking-tight text-[var(--sesc-blue-dark)]">
                micro:bit
              </span>
            </h2>
          </div>

          <div className="mt-8 space-y-5 text-[30px] font-bold leading-relaxed text-black">
            <p>
              O micro:bit é um computador <span className="text-[var(--sesc-orange)]">pequenininho</span>, do tamanho de
              um cartão, feito para crianças aprenderem programação.
            </p>
            <p>
              Ele tem <span className="text-[var(--sesc-pink)]">luzes</span>, botões e sensores. Dá para criar bússola,
              termômetro, videogame e até contador de passos.
            </p>
          </div>
        </>
      }
      leftBottom={
        <div className="grid h-full grid-cols-3 gap-4">
          {[
            { label: 'luzes', value: '5x5', color: 'var(--sesc-pink-soft)' },
            { label: 'botões', value: 'A+B', color: 'var(--sesc-yellow-soft)' },
            { label: 'sensores', value: 'move', color: 'var(--sesc-blue-sky)' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex min-h-[132px] flex-col items-center justify-center rounded-3xl border-[4px] border-black px-3 text-center shadow-[6px_6px_0_rgba(39,35,72,0.16)]"
              style={{ backgroundColor: item.color }}
            >
              <span className="text-[38px] font-black text-[var(--sesc-blue-dark)]">{item.value}</span>
              <span className="mt-2 text-[22px] font-black uppercase tracking-[0.08em] text-[var(--sesc-blue-dark)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      }
      right={
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#dff3ff_0%,#fffaf1_70%)]">
          <div className="absolute inset-x-0 bottom-0 h-[150px] bg-[linear-gradient(180deg,rgba(111,179,63,0.16),rgba(111,179,63,0.36))]" />

          <div className="animate-symbol-float absolute left-[74px] top-[74px] rounded-3xl border-[4px] border-black bg-white px-5 py-3 text-[28px] font-black text-[var(--sesc-blue-dark)] shadow-[5px_5px_0_rgba(39,35,72,0.18)]">
            N
          </div>
          <div
            className="animate-symbol-float absolute right-[74px] top-[92px] rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-5 py-3 text-[28px] font-black text-[var(--sesc-blue-dark)] shadow-[5px_5px_0_rgba(39,35,72,0.18)]"
            style={{ animationDelay: '0.35s' }}
          >
            25°C
          </div>
          <div
            className="animate-symbol-float absolute bottom-[184px] left-[84px] rounded-full border-[4px] border-black bg-[var(--sesc-pink)] px-5 py-3 text-[28px] font-black text-white shadow-[5px_5px_0_rgba(39,35,72,0.18)]"
            style={{ animationDelay: '0.75s' }}
          >
            jogo
          </div>
          <div
            className="animate-symbol-float absolute bottom-[210px] right-[88px] rounded-3xl border-[4px] border-black bg-[var(--sesc-green-grass)] px-5 py-3 text-[28px] font-black text-white shadow-[5px_5px_0_rgba(39,35,72,0.18)]"
            style={{ animationDelay: '1s' }}
          >
            passos
          </div>

          <button
            onClick={handleMicroBitClick}
            type="button"
            className="absolute left-1/2 top-[48%] h-[430px] w-[560px] -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none rounded-[86px] border-[10px] border-black bg-[var(--sesc-green-grass)] shadow-[14px_14px_0_rgba(39,35,72,0.18)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
            aria-label="Clique para alternar o coração do micro:bit"
          >
            <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-2xl border-[4px] border-black bg-white px-8 py-2 text-[26px] font-black text-[var(--sesc-blue-dark)]">
              micro:bit
            </div>

            <div className="absolute left-1/2 top-[108px] grid -translate-x-1/2 grid-cols-5 gap-3 rounded-3xl bg-black p-6">
              {HEART_PATTERN.map((row, rowIndex) =>
                row.map((cell, columnIndex) => (
                  <div
                    key={`${rowIndex}-${columnIndex}`}
                    className={`h-[42px] w-[42px] rounded-lg border-[3px] border-[#3a3a3a] transition-all duration-300 ${
                      cell === 1 && isHeartLit
                        ? 'animate-pulse bg-[var(--sesc-pink)] shadow-[0_0_22px_var(--sesc-pink)]'
                        : 'bg-[#222]'
                    }`}
                  />
                )),
              )}
            </div>

            <div className="absolute bottom-[86px] left-[58px] flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-black bg-white text-[30px] font-black text-[var(--sesc-blue-dark)] shadow-[4px_4px_0_rgba(39,35,72,0.22)]">
              A
            </div>
            <div className="absolute bottom-[86px] right-[58px] flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-black bg-white text-[30px] font-black text-[var(--sesc-blue-dark)] shadow-[4px_4px_0_rgba(39,35,72,0.22)]">
              B
            </div>

            <div className="absolute -bottom-9 left-1/2 flex -translate-x-1/2 gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[44px] w-[34px] rounded-md border-[4px] border-black bg-[var(--sesc-yellow-flower)]"
                />
              ))}
            </div>

            <div className="absolute left-9 top-9 h-[24px] w-[24px] rounded-full border-[4px] border-white bg-black" />
            <div className="absolute right-9 top-9 h-[24px] w-[24px] rounded-full border-[4px] border-white bg-black" />
            <div className="absolute bottom-9 left-9 h-[24px] w-[24px] rounded-full border-[4px] border-white bg-black" />
            <div className="absolute bottom-9 right-9 h-[24px] w-[24px] rounded-full border-[4px] border-white bg-black" />
          </button>

          <div className="absolute bottom-[64px] left-1/2 -translate-x-1/2 rounded-2xl border-[4px] border-black bg-white px-7 py-4 text-center text-[22px] font-black text-[var(--sesc-blue-dark)] shadow-[6px_6px_0_rgba(39,35,72,0.18)]">
            Clique no micro:bit para {isHeartLit ? 'apagar' : 'acender'} o coração.
          </div>
        </div>
      }
    />
  );
}
