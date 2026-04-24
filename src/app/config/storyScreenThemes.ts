export interface StoryScreenTheme {
  appBackgroundClassName: string;
  contentStageThemeClassName: string;
}

export const STORY_SCREEN_THEMES = {
  home: {
    appBackgroundClassName: "app-bg-tile app-bg-blue-dots",
    contentStageThemeClassName: "",
  },
  tela02: {
    appBackgroundClassName: "app-bg-tile app-bg-mustard-argyle",
    contentStageThemeClassName: "content-stage-theme-cream",
  },
  tela03: {
    appBackgroundClassName: "app-bg-tile app-bg-binary",
    contentStageThemeClassName: "content-stage-theme-paper",
  },
  tela04: {
    appBackgroundClassName: "app-bg-tile app-bg-pink-grid",
    contentStageThemeClassName: "content-stage-theme-soft",
  },
  tela05: {
    appBackgroundClassName: "app-bg-tile app-bg-mint-hex",
    contentStageThemeClassName: "content-stage-theme-frost",
  },
  tela06: {
    appBackgroundClassName: "app-bg-tile app-bg-blue-dots",
    contentStageThemeClassName: "content-stage-theme-paper",
  },
  tela07: {
    appBackgroundClassName: "app-bg-tile app-bg-pink-grid",
    contentStageThemeClassName: "content-stage-theme-cream",
  },
  tela08: {
    appBackgroundClassName: "app-bg-tile app-bg-mint-hex",
    contentStageThemeClassName: "content-stage-theme-paper",
  },
  tela09: {
    appBackgroundClassName: "app-bg-tile app-bg-binary",
    contentStageThemeClassName: "content-stage-theme-frost",
  },
  tela10: {
    appBackgroundClassName: "app-bg-tile app-bg-mustard-argyle",
    contentStageThemeClassName: "content-stage-theme-soft",
  },
  tela11: {
    appBackgroundClassName: "app-bg-tile app-bg-blue-dots",
    contentStageThemeClassName: "content-stage-theme-paper",
  },
  tela12: {
    appBackgroundClassName: "app-bg-tile app-bg-pink-grid",
    contentStageThemeClassName: "content-stage-theme-cream",
  },
  tela13: {
    appBackgroundClassName: "app-bg-tile app-bg-mint-hex",
    contentStageThemeClassName: "",
  },
  tela14: {
    appBackgroundClassName: "app-bg-tile app-bg-binary",
    contentStageThemeClassName: "",
  },
  tela15: {
    appBackgroundClassName: "app-bg-tile app-bg-mustard-argyle",
    contentStageThemeClassName: "",
  },
  tela16: {
    appBackgroundClassName: "app-bg-tile app-bg-blue-dots",
    contentStageThemeClassName: "",
  },
} as const satisfies Record<string, StoryScreenTheme>;

export const APP_BACKGROUNDS_BY_SCREEN = [
  STORY_SCREEN_THEMES.home.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela02.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela03.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela04.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela05.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela06.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela07.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela08.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela09.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela10.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela11.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela12.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela13.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela14.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela15.appBackgroundClassName,
  STORY_SCREEN_THEMES.tela16.appBackgroundClassName,
];
