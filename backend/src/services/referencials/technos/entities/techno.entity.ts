import { Types } from 'mongoose';

export class Techno {
  _id?: Types.ObjectId = new Types.ObjectId();
  name: string = '';
  src: string = '';
  active?: boolean = false;
}
