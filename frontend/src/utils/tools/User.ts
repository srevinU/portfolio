import { LanguageT } from "../types/general";
import WindowT from "../types/Window";

const FRENCH: LanguageT = "FR";
const ENGLISH: LanguageT = "EN";

export default class User {
  static langage: string = navigator.language;
  static document: HTMLElement = document.documentElement;

  public static getUserInfo(): { langage: LanguageT; windowSize: WindowT } {
    return {
      langage: this.getLangage(),
      windowSize: this.getWindowSize(),
    };
  }

  private static getLangage(): LanguageT {
    return this.langage.includes(FRENCH.toLocaleLowerCase()) ? FRENCH : ENGLISH;
  }

  private static getWindowSize(): WindowT {
    return {
      height: this.document.scrollHeight,
      width: this.document.scrollWidth,
    };
  }
}
