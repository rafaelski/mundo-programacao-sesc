import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Card } from '../Card';
import { ScreenShell } from '../ScreenShell';
import { ScreenTitle } from '../ScreenTitle';

interface Tela03PrimeiraProgramadoraProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function Tela03PrimeiraProgramadora({ onPrevious, onNext }: Tela03PrimeiraProgramadoraProps) {
  return (
    <ScreenShell tone="beige">
      <Header currentScreen={3} totalScreens={16} />

      <div className="grid h-full grid-cols-[1fr_1fr] gap-12 px-24 pb-24 pt-38">
        <div className="flex flex-col justify-center gap-8">
          <div className="surface-panel p-10">
            <ScreenTitle title="A primeira programadora" eyebrow="1843" />

            <div className="mt-8 space-y-5 font-bold-text text-[30px] leading-[1.34] text-[var(--sesc-ink)]">
              <p>
                Há quase <span className="text-[var(--sesc-pink)]">200 anos</span>, uma mulher chamada <span className="text-[var(--sesc-blue-dark)]">Ada Lovelace</span> escreveu o primeiro programa de computador da história.
              </p>
              <p>
                O mais impressionante: <span className="text-[var(--sesc-orange)]">o computador ainda nem existia!</span> Ela só imaginou como seria.
              </p>
              <p>
                Ada viveu na Inglaterra, era filha de um poeta famoso e amava matemática desde pequena.
              </p>
            </div>
          </div>

          <Card variant="you-knew">
            A palavra <span className="text-[var(--sesc-blue-dark)]">ALGORITMO</span> vem do nome de um matemático árabe chamado <span className="text-[var(--sesc-pink)]">Al-Khwarizmi</span>, que viveu há mais de 1.000 anos.
          </Card>
        </div>

        <div className="surface-panel-strong flex items-center justify-center p-10">
          <div className="relative scale-[0.96]">
            <div className="relative bg-[var(--sesc-blue-dark)] border-[12px] border-black rounded-3xl p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-full"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-full"></div>

              <div className="w-[400px] h-[500px] bg-[var(--sesc-pink)] border-[6px] border-black rounded-2xl relative overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <div className="w-[300px] h-[350px] bg-[var(--sesc-blue-dark)] border-[4px] border-black rounded-t-full"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-20">
                    <div className="w-[100px] h-[120px] bg-[#f5d3a8] border-[4px] border-black rounded-full"></div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[140px] h-[100px] bg-black border-[4px] border-black rounded-full"></div>
                  </div>
                </div>

                <div className="absolute top-8 left-8 text-[32px] font-bold text-white transform -rotate-12">
                  π
                </div>
                <div className="absolute top-12 right-12 text-[28px] font-bold text-white transform rotate-12">
                  ∑
                </div>
                <div className="absolute bottom-20 left-12 text-[24px] font-bold text-white transform -rotate-6">
                  x²
                </div>
                <div className="absolute bottom-32 right-8 text-[26px] font-bold text-white transform rotate-15">
                  √
                </div>
                <div className="absolute top-1/3 right-16 text-[30px] font-bold text-white">
                  ∞
                </div>
              </div>

              <div className="mt-6 bg-[var(--sesc-yellow-flower)] border-[4px] border-black rounded-xl p-4 text-center">
                <p className="text-[24px] font-bold uppercase">Ada Lovelace</p>
                <p className="text-[20px] font-bold">1815 - 1852</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </ScreenShell>
  );
}
