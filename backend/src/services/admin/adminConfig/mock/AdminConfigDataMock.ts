import Home from '../entities/home.entity';
import About from '../entities/about.entity';
import Experience from '../entities/experience.entity';
import Project from '../entities/project.entity';

type adminMockDataT = {
  _id?: string;
  home: Home;
  about: About;
  experiences: Array<Experience>;
  projects: Array<Project>;
};

export const adminConfigMockData: adminMockDataT = {
  home: {
    _id: '6336bf0059811e5f4023c2c2',
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
    _id: '6336bf0059811e5f4023c2c3',
    EN: {
      title: 'English test',
      description: 'English test',
    },
    FR: {
      title: 'French test',
      description: 'French test',
    },
    technos: [
      '6336bf0059811e5f4023c2c14',
      '6336bf0059811e5f4023c2c5',
      '6336bf0059811e5f4023c2c6',
      '6336bf0059811e5f4023c2c7',
    ],
    languages: [
      '6336bf0059811e5f4023c2c8',
      '6336bf0059811e5f4023c2c9',
      '6336bf0059811e5f4023c210',
    ],
    disciplines: ['6336bf0059811e5f4023c211', '6336bf0059811e5f4023c212'],
  },
  projects: [
    {
      _id: '6336bf0059811e5f4023c214',
      src: 'src',
      technos: [
        '6336bf0059811e5f4023c215',
        '6336bf0059811e5f4023c216',
        '6336bf0059811e5f4023c217',
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
      _id: '6336bf0059811e5f4023c214',
      src: 'src',
      technos: [
        '6336bf0059811e5f4023c215',
        '6336bf0059811e5f4023c216',
        '6336bf0059811e5f4023c217',
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
      _id: '6336bf0059811e5f4023c213',
      status: 'active',
      title: 'test title',
      company: 'test company',
      duration: '',
      responsibilities: 'responsibilities',
      start_date: '2024-06-06',
      end_date: '2024-11-23',
    },
  ],
  _id: '6336bf0059811e5f4023c2c1',
};
