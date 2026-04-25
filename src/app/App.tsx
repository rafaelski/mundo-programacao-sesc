import { useState, useEffect, useCallback } from "react";
import { Tela01Home, TELA01_THEME } from "./components/screens/Tela01Home";
import { Tela02OQueEProgramar, TELA02_THEME } from "./components/screens/Tela02OQueEProgramar";
import { Tela03PrimeiraProgramadora, TELA03_THEME } from "./components/screens/Tela03PrimeiraProgramadora";
import { Tela04MaquinasGigantes, TELA04_THEME } from "./components/screens/Tela04MaquinasGigantes";
import { Tela05ElasEnsinaram, TELA05_THEME } from "./components/screens/Tela05ElasEnsinaram";
import { Tela06FalandoALingua, TELA06_THEME } from "./components/screens/Tela06FalandoALingua";
import { Tela07VideogameNasce, TELA07_THEME } from "./components/screens/Tela07VideogameNasce";
import { Tela08ComputadorEmCasa, TELA08_THEME } from "./components/screens/Tela08ComputadorEmCasa";
import { Tela09Scratch, TELA09_THEME } from "./components/screens/Tela09Scratch";
import { Tela10GamesNoBolso, TELA10_THEME } from "./components/screens/Tela10GamesNoBolso";
import { Tela11EAgora, TELA11_THEME } from "./components/screens/Tela11EAgora";
import { Tela12StandOtto, TELA12_THEME } from "./components/screens/Tela12StandOtto";
import { Tela13StandArteGenerativa, TELA13_THEME } from "./components/screens/Tela13StandArteGenerativa";
import { Tela14StandMicroBit, TELA14_THEME } from "./components/screens/Tela14StandMicroBit";
import { Tela15AgoraESuaVez, TELA15_THEME } from "./components/screens/Tela15AgoraESuaVez";
import { useResponsiveScale } from "./hooks/useResponsiveScale";

const APP_BACKGROUNDS_BY_SCREEN = [
  TELA01_THEME.appBackgroundClassName,
  TELA02_THEME.appBackgroundClassName,
  TELA03_THEME.appBackgroundClassName,
  TELA04_THEME.appBackgroundClassName,
  TELA05_THEME.appBackgroundClassName,
  TELA06_THEME.appBackgroundClassName,
  TELA07_THEME.appBackgroundClassName,
  TELA08_THEME.appBackgroundClassName,
  TELA09_THEME.appBackgroundClassName,
  TELA10_THEME.appBackgroundClassName,
  TELA11_THEME.appBackgroundClassName,
  TELA12_THEME.appBackgroundClassName,
  TELA13_THEME.appBackgroundClassName,
  TELA14_THEME.appBackgroundClassName,
  TELA15_THEME.appBackgroundClassName,
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
    if (currentScreen < 14) {
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
    <Tela08ComputadorEmCasa key="tela08" onPrevious={() => goToScreen(6)} onNext={() => goToScreen(8)} />,
    <Tela09Scratch key="tela09" onPrevious={() => goToScreen(7)} onNext={() => goToScreen(9)} />,
    <Tela10GamesNoBolso key="tela10" onPrevious={() => goToScreen(8)} onNext={() => goToScreen(10)} />,
    <Tela11EAgora key="tela11" onPrevious={() => goToScreen(9)} onNext={() => goToScreen(11)} />,
    <Tela12StandOtto key="tela12" onPrevious={() => goToScreen(10)} onNext={() => goToScreen(12)} />,
    <Tela13StandArteGenerativa key="tela13" onPrevious={() => goToScreen(11)} onNext={() => goToScreen(13)} />,
    <Tela14StandMicroBit key="tela14" onPrevious={() => goToScreen(12)} onNext={() => goToScreen(14)} />,
    <Tela15AgoraESuaVez key="tela15" onRestart={() => goToScreen(0)} />,
  ];

  return (
    <div className="relative size-full overflow-hidden touch-none">
      <div className={APP_BACKGROUNDS_BY_SCREEN[currentScreen]} />

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
