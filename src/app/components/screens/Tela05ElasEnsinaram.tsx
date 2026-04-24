import { STORY_SCREEN_THEMES } from '../../config/storyScreenThemes';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela05ElasEnsinaramProps {
  onPrevious: () => void;
  onNext: () => void;
}

const TELA05_LAYOUT = createStoryScreenLayout({
  columns: '1fr 1fr',
});

export function Tela05ElasEnsinaram({ onPrevious, onNext }: Tela05ElasEnsinaramProps) {
  return (
    <StoryScreenFrame
      currentScreen={5}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA05_LAYOUT}
      contentStageThemeClassName={STORY_SCREEN_THEMES.tela05.contentStageThemeClassName}
      leftMain={
        <>
          <h2 className="relative inline-block">
            <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[64px] font-black uppercase leading-tight tracking-tight text-black">
              ELAS ENSINARAM OS COMPUTADORES
            </span>
            <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[64px] font-black uppercase leading-tight tracking-tight text-[var(--sesc-yellow-flower)]">
              ELAS ENSINARAM OS COMPUTADORES
            </span>
            <span className="relative text-[64px] font-black uppercase leading-tight tracking-tight text-[var(--sesc-blue-dark)]">
              ELAS ENSINARAM OS COMPUTADORES
            </span>
          </h2>

          <div className="mt-8 space-y-6 text-[32px] font-bold leading-relaxed text-black">
            <p>
              Quem programava aquelas máquinas gigantes? Um grupo de <span className="text-[var(--sesc-pink)]">seis mulheres</span>:
            </p>
            <p className="text-[28px]">
              <span className="text-[var(--sesc-blue-dark)]">Kathleen</span>, <span className="text-[var(--sesc-orange)]">Jean</span>,{' '}
              <span className="text-[var(--sesc-pink)]">Frances</span>, <span className="text-[var(--sesc-green-grass)]">Marlyn</span>,{' '}
              <span className="text-[var(--sesc-blue-dark)]">Ruth</span> e <span className="text-[var(--sesc-orange)]">Betty</span>:
              as programadoras do ENIAC.
            </p>
            <p>
              E em <span className="text-[var(--sesc-orange)]">1969</span>, quando astronautas pousaram na{' '}
              <span className="text-[var(--sesc-yellow-flower)]">Lua</span> pela primeira vez, o código que guiou a nave Apollo 11
              foi feito por uma equipe chefiada por <span className="text-[var(--sesc-blue-dark)]">Margaret Hamilton</span>.
            </p>
            <p>
              A pilha de papel com o programa dela era <span className="text-[var(--sesc-pink)]">quase do tamanho dela mesma!</span>
            </p>
          </div>
        </>
      }
      right={
        <div className="relative">
          <div className="absolute -right-32 -top-32 h-[280px] w-[280px] rounded-full border-[8px] border-black bg-[var(--sesc-yellow-flower)] opacity-30">
            <div className="absolute left-16 top-12 h-[40px] w-[40px] rounded-full border-[3px] border-black bg-[var(--sesc-gray-stone)] opacity-50"></div>
            <div className="absolute right-20 top-32 h-[60px] w-[60px] rounded-full border-[3px] border-black bg-[var(--sesc-gray-stone)] opacity-50"></div>
            <div className="absolute bottom-20 left-24 h-[35px] w-[35px] rounded-full border-[3px] border-black bg-[var(--sesc-gray-stone)] opacity-50"></div>
          </div>

          <div className="relative flex items-end gap-8">
            <div className="relative z-10">
              <div className="mx-auto h-[120px] w-[100px] rounded-full border-[4px] border-black bg-[#f5d3a8]"></div>
              <div className="absolute left-1/2 top-0 h-[80px] w-[120px] -translate-x-1/2 -translate-y-4 rounded-full border-[4px] border-black bg-[#6d4c3d]"></div>
              <div className="mt-2 h-[220px] w-[140px] rounded-2xl border-[4px] border-black bg-[var(--sesc-blue-dark)]"></div>
              <div className="absolute -left-8 top-[140px] h-[20px] w-[60px] -rotate-45 transform rounded-full border-[4px] border-black bg-[var(--sesc-blue-dark)]"></div>
              <div className="absolute -right-8 top-[140px] h-[20px] w-[60px] rotate-45 transform rounded-full border-[4px] border-black bg-[var(--sesc-blue-dark)]"></div>
              <div className="mt-2 flex justify-center gap-4">
                <div className="h-[100px] w-[40px] rounded-xl border-[4px] border-black bg-[var(--sesc-blue-dark)]"></div>
                <div className="h-[100px] w-[40px] rounded-xl border-[4px] border-black bg-[var(--sesc-blue-dark)]"></div>
              </div>
              <div className="-mt-2 flex justify-center gap-4">
                <div className="h-[20px] w-[50px] rounded-full border-[4px] border-black bg-black"></div>
                <div className="h-[20px] w-[50px] rounded-full border-[4px] border-black bg-black"></div>
              </div>
              <div className="mt-4 rounded-xl border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-6 py-2 text-center">
                <p className="text-[20px] font-bold">Margaret Hamilton</p>
              </div>
            </div>

            <div className="relative">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="h-[40px] w-[280px] border-[4px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                  style={{
                    marginTop: i === 0 ? '0' : '-4px',
                    marginLeft: `${i * 2}px`,
                  }}
                >
                  <div className="flex gap-1 p-2">
                    <div className="h-[4px] w-full bg-black"></div>
                  </div>
                  <div className="flex gap-1 px-2">
                    <div className="h-[4px] w-[60%] bg-black"></div>
                  </div>
                  <div className="mt-1 flex gap-1 px-2">
                    <div className="h-[4px] w-[80%] bg-black"></div>
                  </div>
                </div>
              ))}

              <div className="absolute -right-16 top-1/3 rotate-12 transform rounded-xl border-[4px] border-black bg-[var(--sesc-pink)] px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-[24px] font-bold uppercase">Apollo 11</p>
                <p className="text-[18px] font-bold">1969</p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
