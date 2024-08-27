import { Types } from 'mongoose';

type LanguagePayload = {
  _id?: Types.ObjectId;
  name: string;
  src: string;
  active?: boolean;
};

export const Languages: Array<LanguagePayload> = [
  {
    name: 'html',
    src: '/assets/html.svg',
    active: false,
  },
  {
    name: 'python',
    src: '/assets/python.svg',
    active: false,
  },
];
