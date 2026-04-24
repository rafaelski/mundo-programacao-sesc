import { useEffect, useState } from 'react';
import { STORY_SCREEN_THEMES } from '../../config/storyScreenThemes';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela08TartarugaDesenhaProps {
  onPrevious: () => void;
  onNext: () => void;
}

const TELA08_LAYOUT = createStoryScreenLayout();

export function Tela08TartarugaDesenha({ onPrevious, onNext }: Tela08TartarugaDesenhaProps) {
  const [drawingStep, setDrawingStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDrawingStep((prev) => (prev + 1) % 16);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <StoryScreenFrame
      currentScreen={8}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA08_LAYOUT}
      contentStageThemeClassName={STORY_SCREEN_THEMES.tela08.contentStageThemeClassName}
      leftMain={
        <>
          <div>
            <h2 className="relative inline-block">
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[64px] font-black uppercase leading-tight tracking-tight text-black">
                UMA TARTARUGA QUE DESENHA
              </span>
              <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[64px] font-black uppercase leading-tight tracking-tight text-[var(--sesc-yellow-flower)]">
                UMA TARTARUGA QUE DESENHA
              </span>
              <span className="relative text-[64px] font-black uppercase leading-tight tracking-tight text-[var(--sesc-blue-dark)]">
                UMA TARTARUGA QUE DESENHA
              </span>
            </h2>
            <p className="mt-2 text-[48px] font-bold text-[var(--sesc-gray-stone)]">anos 1980</p>
          </div>

          <div className="mt-8 space-y-6 text-[32px] font-bold leading-relaxed text-black">
            <p>
              Nos anos 80, um professor chamado <span className="text-[var(--sesc-blue-dark)]">Seymour Papert</span> criou uma
              linguagem especial para crianças: o <span className="text-[var(--sesc-orange)]">LOGO</span>.
            </p>
            <p>
              Ela tinha uma <span className="text-[var(--sesc-green-grass)]">tartaruguinha</span> na tela que andava, virava
              e desenhava conforme você mandava.
            </p>
            <p>
              Se você dizia <span className="text-[var(--sesc-pink)]">“ande 100, vire 90, ande 100, vire 90...”</span>
            </p>
            <p className="text-[40px]">
              Pronto: um <span className="text-[var(--sesc-yellow-flower)]">quadrado!</span>
            </p>
          </div>

          <div className="mt-8 rounded-3xl border-[6px] border-white bg-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <code className="block space-y-2 font-mono text-[28px] font-bold text-[var(--sesc-green-grass)]">
              <div>FORWARD 100</div>
              <div>RIGHT 90</div>
              <div>FORWARD 100</div>
              <div>RIGHT 90</div>
              <div className="text-[var(--sesc-yellow-flower)]">REPEAT 4</div>
            </code>
          </div>
        </>
      }
      right={
        <div className="relative h-[700px] w-[700px] overflow-hidden rounded-3xl border-[8px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 700">
            {drawingStep >= 1 && <path d="M 200 350 L 500 350" stroke="var(--sesc-pink)" strokeWidth="8" fill="none" strokeLinecap="round" />}
            {drawingStep >= 2 && <path d="M 500 350 L 500 650" stroke="var(--sesc-pink)" strokeWidth="8" fill="none" strokeLinecap="round" />}
            {drawingStep >= 3 && <path d="M 500 650 L 200 650" stroke="var(--sesc-pink)" strokeWidth="8" fill="none" strokeLinecap="round" />}
            {drawingStep >= 4 && <path d="M 200 650 L 200 350" stroke="var(--sesc-pink)" strokeWidth="8" fill="none" strokeLinecap="round" />}
            {drawingStep >= 6 && <path d="M 100 200 L 180 100" stroke="var(--sesc-yellow-flower)" strokeWidth="8" fill="none" strokeLinecap="round" />}
            {drawingStep >= 7 && <path d="M 180 100 L 200 200" stroke="var(--sesc-yellow-flower)" strokeWidth="8" fill="none" strokeLinecap="round" />}
            {drawingStep >= 8 && <path d="M 200 200 L 280 150" stroke="var(--sesc-yellow-flower)" strokeWidth="8" fill="none" strokeLinecap="round" />}
            {drawingStep >= 9 && <path d="M 280 150 L 220 220" stroke="var(--sesc-yellow-flower)" strokeWidth="8" fill="none" strokeLinecap="round" />}
            {drawingStep >= 10 && <path d="M 220 220 L 100 200 Z" stroke="var(--sesc-yellow-flower)" strokeWidth="8" fill="none" strokeLinecap="round" />}
            {drawingStep >= 12 && <circle cx="550" cy="120" r="40" fill="none" stroke="var(--sesc-orange)" strokeWidth="8" />}
            {drawingStep >= 13 && <circle cx="520" cy="80" r="30" fill="none" stroke="var(--sesc-orange)" strokeWidth="6" />}
            {drawingStep >= 14 && <circle cx="580" cy="80" r="30" fill="none" stroke="var(--sesc-orange)" strokeWidth="6" />}
            {drawingStep >= 15 && <circle cx="520" cy="150" r="25" fill="none" stroke="var(--sesc-orange)" strokeWidth="6" />}
          </svg>

          <div
            className="absolute transition-all duration-700 ease-in-out"
            style={{
              left:
                drawingStep < 1
                  ? '200px'
                  : drawingStep < 2
                    ? '500px'
                    : drawingStep < 4
                      ? drawingStep < 3
                        ? '500px'
                        : '200px'
                      : drawingStep < 6
                        ? '200px'
                        : drawingStep < 11
                          ? '150px'
                          : '550px',
              top:
                drawingStep < 1
                  ? '350px'
                  : drawingStep < 2
                    ? '350px'
                    : drawingStep < 4
                      ? drawingStep < 3
                        ? '650px'
                        : '650px'
                      : drawingStep < 6
                        ? '350px'
                        : drawingStep < 11
                          ? '150px'
                          : '120px',
              transform: `translate(-50%, -50%) rotate(${
                drawingStep < 1 ? 0 : drawingStep < 2 ? 90 : drawingStep < 3 ? 180 : drawingStep < 4 ? 270 : drawingStep < 11 ? 45 : 0
              }deg)`,
            }}
          >
            <div className="relative">
              <div className="relative h-[60px] w-[80px] rounded-full border-[5px] border-black bg-[var(--sesc-green-grass)]">
                <div className="absolute inset-0 flex items-center justify-center gap-1">
                  <div className="h-[20px] w-[20px] rounded-full border-[2px] border-black bg-[#4a7c2f]"></div>
                  <div className="h-[20px] w-[20px] rounded-full border-[2px] border-black bg-[#4a7c2f]"></div>
                </div>
              </div>
              <div className="absolute -right-8 -top-2 h-[25px] w-[30px] rounded-full border-[4px] border-black bg-[#6fb33f]">
                <div className="absolute right-1 top-1 h-[6px] w-[6px] rounded-full bg-black"></div>
              </div>
              <div className="absolute -left-2 top-1 h-[12px] w-[15px] rounded-full border-[3px] border-black bg-[#6fb33f]"></div>
              <div className="absolute -left-2 bottom-1 h-[12px] w-[15px] rounded-full border-[3px] border-black bg-[#6fb33f]"></div>
              <div className="absolute -right-2 top-1 h-[12px] w-[15px] rounded-full border-[3px] border-black bg-[#6fb33f]"></div>
              <div className="absolute -right-2 bottom-1 h-[12px] w-[15px] rounded-full border-[3px] border-black bg-[#6fb33f]"></div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 rounded-xl border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-6 py-3">
            <p className="text-[20px] font-bold">
              {drawingStep < 5 ? 'Desenhando quadrado...' : drawingStep < 11 ? 'Desenhando estrela...' : 'Desenhando flor...'}
            </p>
          </div>
        </div>
      }
    />
  );
}
