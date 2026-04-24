import { useState, useEffect, useCallback } from "react";
import { Tela01Home } from "./components/screens/Tela01Home";
import { Tela02OQueEProgramar } from "./components/screens/Tela02OQueEProgramar";
import { Tela03PrimeiraProgramadora } from "./components/screens/Tela03PrimeiraProgramadora";
import { Tela04MaquinasGigantes } from "./components/screens/Tela04MaquinasGigantes";
import { Tela05ElasEnsinaram } from "./components/screens/Tela05ElasEnsinaram";
import { Tela06FalandoALingua } from "./components/screens/Tela06FalandoALingua";
import { Tela07VideogameNasce } from "./components/screens/Tela07VideogameNasce";
import { Tela08TartarugaDesenha } from "./components/screens/Tela08TartarugaDesenha";
import { Tela09ComputadorEmCasa } from "./components/screens/Tela09ComputadorEmCasa";
import { Tela10Scratch } from "./components/screens/Tela10Scratch";
import { Tela11GamesNoBolso } from "./components/screens/Tela11GamesNoBolso";
import { Tela12EAgora } from "./components/screens/Tela12EAgora";
import { Tela13StandOtto } from "./components/screens/Tela13StandOtto";
import { Tela14StandArteGenerativa } from "./components/screens/Tela14StandArteGenerativa";
import { Tela15StandMicroBit } from "./components/screens/Tela15StandMicroBit";
import { Tela16AgoraESuaVez } from "./components/screens/Tela16AgoraESuaVez";
import { useResponsiveScale } from "./hooks/useResponsiveScale";

const appBackgrounds = [
  "app-bg-tile app-bg-blue-argyle app-bg-soft-glow",
  "app-bg-tile app-bg-mustard-argyle",
  "app-bg-tile app-bg-binary",
  "app-bg-tile app-bg-pink-grid",
  "app-bg-tile app-bg-mint-hex",
  "app-bg-tile app-bg-blue-argyle app-bg-soft-glow",
  "app-bg-tile app-bg-pink-grid",
  "app-bg-tile app-bg-mint-hex",
  "app-bg-tile app-bg-binary",
  "app-bg-tile app-bg-mustard-argyle",
  "app-bg-tile app-bg-blue-argyle app-bg-soft-glow",
  "app-bg-tile app-bg-pink-grid",
  "app-bg-tile app-bg-mint-hex",
  "app-bg-tile app-bg-binary",
  "app-bg-tile app-bg-mustard-argyle",
  "app-bg-tile app-bg-blue-argyle app-bg-soft-glow",
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const { scale } = useResponsiveScale();

  const goToPrevious = useCallback(() => {
    if (currentScreen > 0) {
      setCurrentScreen((prev) => prev - 1);
    }
  }, [currentScreen]);

  const goToNext = useCallback(() => {
    if (currentScreen < 15) {
      setCurrentScreen((prev) => prev + 1);
    }
  }, [currentScreen]);

  const goToScreen = useCallback((screen: number) => {
    setCurrentScreen(screen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  const screens = [
    <Tela01Home key="tela01" onStart={() => goToScreen(1)} />,
    <Tela02OQueEProgramar key="tela02" onPrevious={() => goToScreen(0)} onNext={() => goToScreen(2)} />,
    <Tela03PrimeiraProgramadora key="tela03" onPrevious={() => goToScreen(1)} onNext={() => goToScreen(3)} />,
    <Tela04MaquinasGigantes key="tela04" onPrevious={() => goToScreen(2)} onNext={() => goToScreen(4)} />,
    <Tela05ElasEnsinaram key="tela05" onPrevious={() => goToScreen(3)} onNext={() => goToScreen(5)} />,
    <Tela06FalandoALingua key="tela06" onPrevious={() => goToScreen(4)} onNext={() => goToScreen(6)} />,
    <Tela07VideogameNasce key="tela07" onPrevious={() => goToScreen(5)} onNext={() => goToScreen(7)} />,
    <Tela08TartarugaDesenha key="tela08" onPrevious={() => goToScreen(6)} onNext={() => goToScreen(8)} />,
    <Tela09ComputadorEmCasa key="tela09" onPrevious={() => goToScreen(7)} onNext={() => goToScreen(9)} />,
    <Tela10Scratch key="tela10" onPrevious={() => goToScreen(8)} onNext={() => goToScreen(10)} />,
    <Tela11GamesNoBolso key="tela11" onPrevious={() => goToScreen(9)} onNext={() => goToScreen(11)} />,
    <Tela12EAgora key="tela12" onPrevious={() => goToScreen(10)} onNext={() => goToScreen(12)} />,
    <Tela13StandOtto key="tela13" onPrevious={() => goToScreen(11)} onNext={() => goToScreen(13)} />,
    <Tela14StandArteGenerativa key="tela14" onPrevious={() => goToScreen(12)} onNext={() => goToScreen(14)} />,
    <Tela15StandMicroBit key="tela15" onPrevious={() => goToScreen(13)} onNext={() => goToScreen(15)} />,
    <Tela16AgoraESuaVez key="tela16" onRestart={() => goToScreen(0)} />,
  ];

  return (
    <div className="relative size-full overflow-hidden touch-none">
      <div className={appBackgrounds[currentScreen]} />

      <div
        className="absolute left-1/2 top-1/2 z-10 origin-center overflow-hidden animate-fadeIn"
        style={{
          width: "1920px",
          height: "1080px",
          transform: `translate(-50%, -50%) scale(${scale})`,
          touchAction: "none",
        }}
        key={currentScreen}
      >
        {screens[currentScreen]}
      </div>
    </div>
  );
}
