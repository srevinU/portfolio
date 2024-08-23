export default class Project {
  _id: string;
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
  technos: Array<string>;
  status: string;
}
