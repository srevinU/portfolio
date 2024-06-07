import { RefObject } from "react";
import { LanguagesT } from "../types/general";

export default class Reference {
  name: LanguagesT;
  ref: RefObject<HTMLDivElement>;
  offsetTop: number;
  offsetHeight: number;

  constructor(name: LanguagesT, useRef: RefObject<HTMLDivElement>) {
    this.name = name;
    this.ref = useRef;
    this.offsetTop = 0;
    this.offsetHeight = 0;
  }

  private setOffsetTop = (): void => {
    this.offsetTop = this.ref.current?.offsetTop ?? 0;
  };

  private setOffsetHeight = (): void => {
    this.offsetHeight = this.ref.current?.offsetHeight ?? 0;
  };

  public setOffsets = (): void => {
    this.setOffsetTop();
    this.setOffsetHeight();
  };
}
