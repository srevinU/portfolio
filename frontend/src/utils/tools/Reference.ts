import { RefObject } from "react";
import { LanguagesT } from "../types/general";
import { v4 as uuidv4 } from "uuid";

export default class Reference {
  uuid: string;
  name: LanguagesT;
  ref: RefObject<HTMLDivElement>;
  offsetTop: number;
  offsetHeight: number;

  constructor(name: LanguagesT, useRef: RefObject<HTMLDivElement>) {
    this.uuid = uuidv4();
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
