import { LanguageT } from "../types/general";
import WindowT from "../types/Window";

export default class User {
  static langage = window.navigator.language;
  static window = document.documentElement;

  public static getUserInfo(): { langage: LanguageT; windowSize: WindowT } {
    return {
      langage: this.getLangage(),
      windowSize: this.getWindowSize(),
    };
  }

  private static getLangage(): LanguageT {
    return window.navigator.language.includes("fr") ? "FR" : "EN";
  }

  private static getWindowSize(): WindowT {
    return {
      height: this.window.scrollHeight,
      width: this.window.scrollWidth,
    };
  }
}
