import { Types } from 'mongoose';

export default class Project {
  _id?: Types.ObjectId;
  EN: {
    title: string;
    label_link: string;
  };
  FR: {
    title: string;
    label_link: string;
  };
  src: string;
  href: string;
  technos: Array<Types.ObjectId>;
  status: string;
}
