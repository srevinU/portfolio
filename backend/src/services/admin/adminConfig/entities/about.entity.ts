import { Types } from 'mongoose';

export default class About {
  EN: {
    title: string;
    description: string;
  };
  FR: {
    title: string;
    description: string;
  };
  technos: Array<Types.ObjectId>;
  languages: Array<Types.ObjectId>;
  disciplines: Array<Types.ObjectId>;
}
