import type { ScreenThemeConfig } from '../../config/screenTheme';
import { StoryScreenFrame, createStoryScreenLayout } from '../story/StoryScreenFrame';

interface Tela11EAgoraProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TELA11_THEME: ScreenThemeConfig = {
  appBackgroundClassName: 'app-bg-tile app-bg-pink-grid',
  contentStageThemeClassName: 'content-stage-theme-cream',
};

const TELA11_LAYOUT = createStoryScreenLayout({
  columns: '0.92fr 1.08fr',
  columnGap: '1.75rem',
  leftBottomMinHeight: '5.75rem',
});

const FUTURE_TOPICS = [
  {
    title: 'Motores de jogo',
    text: 'Unity e Unreal ajudam a construir mundos, personagens e fases em 3D.',
    color: 'var(--sesc-orange)',
  },
  {
    title: 'Inteligência artificial',
    text: 'IA conversa, desenha, escreve ideias e pode ajudar a programar.',
    color: 'var(--sesc-pink)',
  },
  {
    title: 'Tudo vira criação',
    text: 'Jogos, robôs, arte e histórias podem nascer de uma sequência de instruções.',
    color: 'var(--sesc-green-grass)',
  },
];

export function Tela11EAgora({ onPrevious, onNext }: Tela11EAgoraProps) {
  return (
    <StoryScreenFrame
      currentScreen={11}
      onPrevious={onPrevious}
      onNext={onNext}
      layout={TELA11_LAYOUT}
      contentStageThemeClassName={TELA11_THEME.contentStageThemeClassName}
      rightClassName="overflow-hidden"
      leftMain={
        <>
          <div>
            
            <p className="mt-0 text-[25px] font-bold leading-none text-[var(--sesc-orange)]">anos 2020</p>
            
            <div className="mb-2 inline-flex rotate-[-2deg] rounded-full border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-5 py-2 shadow-[5px_5px_0_rgba(0,0,0,0.18)]">
              <span className="text-[20px] font-black uppercase tracking-[0.16em] text-[var(--sesc-blue-dark)]">
                hoje
              </span>
            </div>

            <h2 className="relative inline-block">
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] transform text-[68px] font-black uppercase leading-[0.95] tracking-tight text-black">
                E AGORA?
              </span>
              <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] transform text-[68px] font-black uppercase leading-[0.95] tracking-tight text-[var(--sesc-yellow-flower)]">
                E AGORA?
              </span>
              <span className="relative text-[68px] font-black uppercase leading-[0.95] tracking-tight text-[var(--sesc-blue-dark)]">
                E AGORA?
              </span>
            </h2>

          </div>

          <div className="mt-3 grid gap-3">
            {FUTURE_TOPICS.map((topic) => (
              <div
                key={topic.title}
                className="rounded-3xl border-[4px] border-black bg-white/72 px-5 py-3 shadow-[5px_5px_0_rgba(39,35,72,0.12)]"
              >
                <p className="text-[19px] font-black uppercase tracking-[0.1em]" style={{ color: topic.color }}>
                  {topic.title}
                </p>
                <p className="mt-1 text-[22px] font-bold leading-snug text-black">{topic.text}</p>
              </div>
            ))}
          </div>
        </>
      }
      leftBottom={
        <div className="grid h-full grid-cols-[1fr_auto] items-center gap-4 rounded-3xl border-[5px] border-black bg-[var(--sesc-yellow-flower)] p-6 shadow-[8px_8px_0_rgba(39,35,72,0.2)]">
          <p className="text-[27px] font-black uppercase leading-tight text-[var(--sesc-blue-dark)]">
            Se você pudesse programar qualquer coisa no mundo, o que seria?
          </p>
          <div className="grid grid-cols-2 gap-2">
            {['jogo', 'arte', 'robô', 'ideia'].map((item, index) => (
              <span
                key={item}
                className="rounded-2xl border-[3px] border-black bg-white px-4 py-2 text-center text-[18px] font-black uppercase tracking-[0.08em] text-[var(--sesc-blue-dark)] shadow-[4px_4px_0_rgba(39,35,72,0.12)]"
                style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      }
      right={
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#dff3ff_0%,#fff4db_72%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_17%_17%,rgba(240,98,146,0.18),transparent_18%),radial-gradient(circle_at_85%_18%,rgba(249,200,67,0.22),transparent_19%),radial-gradient(circle_at_80%_80%,rgba(111,179,63,0.18),transparent_23%)]" />

          <div className="animate-symbol-float absolute left-[58px] top-[54px] rounded-3xl border-[4px] border-black bg-white px-5 py-3 text-[30px] font-black text-[var(--sesc-blue-dark)] shadow-[5px_5px_0_rgba(39,35,72,0.18)]">
            {'{}'}
          </div>
          <div
            className="animate-symbol-float absolute right-[66px] top-[70px] rounded-full border-[4px] border-black bg-[var(--sesc-pink)] px-5 py-3 text-[28px] font-black text-white shadow-[5px_5px_0_rgba(39,35,72,0.18)]"
            style={{ animationDelay: '0.35s' }}
          >
            IA
          </div>
          <div
            className="animate-symbol-float absolute left-[72px] bottom-[132px] rounded-full border-[4px] border-black bg-[var(--sesc-green-grass)] px-5 py-3 text-[26px] font-black text-white shadow-[5px_5px_0_rgba(39,35,72,0.18)]"
            style={{ animationDelay: '0.75s' }}
          >
            jogo
          </div>
          <div
            className="animate-symbol-float absolute right-[72px] bottom-[148px] rounded-3xl border-[4px] border-black bg-[var(--sesc-yellow-flower)] px-5 py-3 text-[26px] font-black text-[var(--sesc-blue-dark)] shadow-[5px_5px_0_rgba(39,35,72,0.18)]"
            style={{ animationDelay: '1.1s' }}
          >
            arte
          </div>

          <div className="absolute left-1/2 top-[43%] h-[402px] w-[610px] -translate-x-1/2 -translate-y-1/2 rounded-[34px] border-[8px] border-black bg-[#151b38] shadow-[13px_13px_0_rgba(39,35,72,0.18)]">
            <div className="flex h-[46px] items-center gap-3 border-b-[5px] border-black bg-[var(--sesc-blue-dark)] px-5">
              <span className="h-4 w-4 rounded-full bg-[var(--sesc-pink)]" />
              <span className="h-4 w-4 rounded-full bg-[var(--sesc-yellow-flower)]" />
              <span className="h-4 w-4 rounded-full bg-[var(--sesc-green-grass)]" />
              <span className="ml-4 text-[18px] font-black uppercase tracking-[0.12em] text-white">motor de criação</span>
            </div>

            <div className="relative h-[356px] overflow-hidden bg-[linear-gradient(180deg,#7fd3ff_0%,#dff3ff_50%,#76c653_51%,#4fa13c_100%)]">
              <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-[linear-gradient(90deg,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(0,0,0,0.12)_1px,transparent_1px)] bg-[length:44px_44px]" />

              <div className="absolute left-[68px] top-[108px] h-[92px] w-[92px] rounded-[18px] border-[5px] border-black bg-[var(--sesc-yellow-flower)] shadow-[7px_7px_0_rgba(0,0,0,0.22)]" />
              <div className="absolute left-[162px] top-[148px] h-[74px] w-[118px] rounded-[18px] border-[5px] border-black bg-[var(--sesc-pink)] shadow-[7px_7px_0_rgba(0,0,0,0.22)]" />
              <div className="absolute left-[260px] top-[82px] h-[132px] w-[132px] rounded-full border-[5px] border-black bg-[var(--sesc-green-grass)] shadow-[7px_7px_0_rgba(0,0,0,0.22)]" />

              <div className="absolute right-0 top-0 h-full w-[154px] border-l-[5px] border-black bg-white/86 p-4">
                <p className="text-[18px] font-black uppercase tracking-[0.12em] text-[var(--sesc-blue-dark)]">regras</p>
                {['cor', 'som', 'pulo', 'luz'].map((item, index) => (
                  <div key={item} className="mt-4">
                    <div className="mb-1 text-[15px] font-black uppercase tracking-[0.08em] text-[var(--sesc-gray-stone)]">
                      {item}
                    </div>
                    <div className="h-4 overflow-hidden rounded-full border-[2px] border-black bg-white">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${52 + index * 12}%`,
                          backgroundColor:
                            index === 0
                              ? 'var(--sesc-pink)'
                              : index === 1
                                ? 'var(--sesc-yellow-flower)'
                                : index === 2
                                  ? 'var(--sesc-green-grass)'
                                  : 'var(--sesc-blue-sky)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-[18px] left-[22px] right-[176px] flex items-center gap-3 rounded-2xl border-[4px] border-black bg-white/90 px-4 py-3">
                <span className="rounded-xl bg-[var(--sesc-blue-dark)] px-3 py-2 text-[18px] font-black uppercase text-white">
                  cena
                </span>
                <span className="rounded-xl bg-[var(--sesc-yellow-flower)] px-3 py-2 text-[18px] font-black uppercase text-[var(--sesc-blue-dark)]">
                  animação
                </span>
                <span className="rounded-xl bg-[var(--sesc-pink)] px-3 py-2 text-[18px] font-black uppercase text-white">
                  som
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[66px] left-[54px] rotate-[-3deg] rounded-3xl border-[5px] border-black bg-white p-5 shadow-[8px_8px_0_rgba(39,35,72,0.18)]">
            <code className="font-mono text-[20px] font-black leading-relaxed text-[var(--sesc-blue-dark)]">
              <span className="text-[var(--sesc-pink)]">function</span> criar() {'{'}
              <br />
              &nbsp;&nbsp;<span className="text-[var(--sesc-orange)]">return</span> mundoNovo;
              <br />
              {'}'}
            </code>
          </div>

          <div className="absolute bottom-[62px] right-[48px] w-[276px] rotate-[3deg] rounded-3xl border-[5px] border-black bg-[var(--sesc-yellow-flower)] p-5 shadow-[8px_8px_0_rgba(39,35,72,0.18)]">
            <p className="text-[21px] font-black uppercase tracking-[0.08em] text-[var(--sesc-blue-dark)]">prompt da ideia</p>
            <p className="mt-2 text-[24px] font-bold leading-snug text-black">“crie um jogo de foguete no espaço”</p>
          </div>
        </div>
      }
    />
  );
}
