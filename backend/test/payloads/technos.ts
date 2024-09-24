import { Types } from 'mongoose';

type TechnoPayload = {
  _id?: Types.ObjectId;
  name: string;
  src: string;
  active?: boolean;
};

export const Technos: Array<TechnoPayload> = [
  {
    name: 'AWS',
    src: '/assets/aws.svg',
    active: false,
  },
  {
    src: '/assets/typescript.svg',
    name: 'TypeScript',
    active: false,
  },
];
