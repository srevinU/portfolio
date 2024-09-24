import { Types } from 'mongoose';

export class Language {
  _id?: Types.ObjectId = new Types.ObjectId();
  name: string = '';
  src: string = '';
  active?: boolean = false;
}
