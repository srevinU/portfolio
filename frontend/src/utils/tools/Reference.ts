import { RefObject } from "react";
import { LanguagesT } from "../types/general";

export default class Reference {
  key: string;
  name: LanguagesT;
  dataTestId: string;
  ref: RefObject<HTMLDivElement>;
  offsetTop: number;
  offsetHeight: number;

  constructor(
    key: string,
    name: LanguagesT,

    useRef: RefObject<HTMLDivElement>,
  ) {
    this.key = key;
    this.name = name;
    this.dataTestId = this.key;
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
