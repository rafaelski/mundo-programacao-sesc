import type { CSSProperties, ReactNode } from "react";
import { Header } from "../Header";
import { Navigation } from "../Navigation";
import { ScreenShell } from "../ScreenShell";
import { cn } from "../ui/utils";

export interface StoryScreenLayoutConfig {
  contentBottomSafeArea: string;
  contentTopPadding: string;
  contentHorizontalPadding: string;
  stageInsetX: string;
  stageInsetY: string;
  columnGap: string;
  leftColumnGap: string;
  columns: string;
  leftBottomMinHeight: string;
}

export const STORY_SCREEN_BASE_LAYOUT: StoryScreenLayoutConfig = {
  contentBottomSafeArea: "12rem",
  contentTopPadding: "9.5rem",
  contentHorizontalPadding: "6rem",
  stageInsetX: "2.5rem",
  stageInsetY: "2rem",
  columnGap: "3rem",
  leftColumnGap: "2rem",
  columns: "1.02fr 0.98fr",
  leftBottomMinHeight: "8.75rem",
};

export function createStoryScreenLayout(
  overrides: Partial<StoryScreenLayoutConfig> = {},
): StoryScreenLayoutConfig {
  return {
    ...STORY_SCREEN_BASE_LAYOUT,
    ...overrides,
  };
}

interface StoryScreenFrameProps {
  currentScreen: number;
  totalScreens?: number;
  onPrevious: () => void;
  onNext: () => void;
  layout: StoryScreenLayoutConfig;
  contentStageThemeClassName: string;
  leftMain: ReactNode;
  right: ReactNode;
  leftBottom?: ReactNode;
  leftMainClassName?: string;
  leftBottomClassName?: string;
  rightClassName?: string;
  leftMainSurface?: "panel" | "none";
  rightSurface?: "strong" | "panel" | "none";
}

export function StoryScreenFrame({
  currentScreen,
  totalScreens = 16,
  onPrevious,
  onNext,
  layout,
  contentStageThemeClassName,
  leftMain,
  right,
  leftBottom,
  leftMainClassName,
  leftBottomClassName,
  rightClassName,
  leftMainSurface = "panel",
  rightSurface = "strong",
}: StoryScreenFrameProps) {
  const layoutVars = {
    "--story-content-bottom-safe-area": layout.contentBottomSafeArea,
    "--story-content-top-padding": layout.contentTopPadding,
    "--story-content-horizontal-padding": layout.contentHorizontalPadding,
    "--story-column-gap": layout.columnGap,
    "--story-left-column-gap": layout.leftColumnGap,
    "--story-left-bottom-min-height": layout.leftBottomMinHeight,
  } as CSSProperties;

  const stageStyle = {
    left: layout.stageInsetX,
    right: layout.stageInsetX,
    top: layout.stageInsetY,
    bottom: layout.stageInsetY,
  } as CSSProperties;

  const gridStyle = {
    ...layoutVars,
    gridTemplateColumns: layout.columns,
  } as CSSProperties;

  const leftMainSurfaceClassName =
    leftMainSurface === "none"
      ? ""
      : cn(
          leftMainSurface === "panel" && "surface-panel",
          leftMainSurface === "panel" && "surface-panel-pad-lg",
          "flex h-full min-h-0 flex-col",
        );

  const rightSurfaceClassName =
    rightSurface === "none"
      ? "flex h-full min-h-0"
      : cn(
          rightSurface === "strong" && "surface-panel-strong",
          rightSurface === "panel" && "surface-panel",
          "surface-panel-pad-lg relative flex h-full min-h-0 items-center justify-center",
        );

  return (
    <ScreenShell tone="transparent" showDecorations={false}>
      <div
        className={cn(
          "content-stage pointer-events-none absolute",
          contentStageThemeClassName,
        )}
        style={stageStyle}
      />

      <Header currentScreen={currentScreen} totalScreens={totalScreens} />

      <div
        className="relative z-10 grid h-full min-h-0 items-stretch gap-[var(--story-column-gap)] px-[var(--story-content-horizontal-padding)] pb-[var(--story-content-bottom-safe-area)] pt-[var(--story-content-top-padding)]"
        style={gridStyle}
      >
        {leftBottom ? (
          <div className="grid h-full min-h-0 grid-rows-[minmax(0,1fr)_auto] gap-[var(--story-left-column-gap)]">
            <div className={cn(leftMainSurfaceClassName, leftMainClassName)}>{leftMain}</div>
            <div
              className={cn(
                "min-h-[var(--story-left-bottom-min-height)]",
                leftBottomClassName,
              )}
            >
              {leftBottom}
            </div>
          </div>
        ) : (
          <div className={cn("flex h-full min-h-0", leftMainClassName)}>
            <div className={cn(leftMainSurfaceClassName, "w-full")}>{leftMain}</div>
          </div>
        )}

        <div className={cn(rightSurfaceClassName, rightClassName)}>{right}</div>
      </div>

      <Navigation onPrevious={onPrevious} onNext={onNext} />
    </ScreenShell>
  );
}
