import Home from '../entities/home.entity';
import About from '../entities/about.entity';
import Experience from '../entities/experience.entity';
import Project from '../entities/project.entity';
import { Types } from 'mongoose';

type adminMockDataT = {
  _id?: Types.ObjectId;
  home: Home;
  about: About;
  experiences: Array<Experience>;
  projects: Array<Project>;
};

export const adminConfigMockData: adminMockDataT = {
  _id: new Types.ObjectId(),
  home: {
    EN: {
      title: 'Title test',
      subtitle: 'subtitle test',
    },
    FR: {
      title: 'Titre test',
      subtitle: 'Sous-titre test',
    },
  },
  about: {
    EN: {
      title: 'English test',
      description: 'English test',
    },
    FR: {
      title: 'French test',
      description: 'French test',
    },
    technos: [
      new Types.ObjectId(),
      new Types.ObjectId(),
      new Types.ObjectId(),
      new Types.ObjectId(),
    ],
    languages: [
      new Types.ObjectId(),
      new Types.ObjectId(),
      new Types.ObjectId(),
    ],
    disciplines: [new Types.ObjectId(), new Types.ObjectId()],
  },
  projects: [
    {
      _id: new Types.ObjectId(),
      src: 'src',
      technos: [
        new Types.ObjectId(),
        new Types.ObjectId(),
        new Types.ObjectId(),
      ],
      href: 'href',
      FR: {
        label_link: 'url test',
        title: 'titre test',
      },
      EN: {
        label_link: 'url test',
        title: 'title test',
      },
      status: 'inactive',
    },
    {
      _id: new Types.ObjectId(),
      src: 'src',
      technos: [
        new Types.ObjectId(),
        new Types.ObjectId(),
        new Types.ObjectId(),
      ],
      href: 'href',
      FR: {
        label_link: 'url test',
        title: 'titre test',
      },
      EN: {
        label_link: 'url test',
        title: 'title test',
      },
      status: 'toto',
    },
  ],
  experiences: [
    {
      _id: new Types.ObjectId(),
      status: 'active',
      title: 'test title',
      company: 'test company',
      duration: '',
      responsibilities: 'responsibilities',
      start_date: '2024-06-06',
      end_date: '2024-11-23',
    },
  ],
};
