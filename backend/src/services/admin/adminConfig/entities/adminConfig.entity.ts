import About from './about.entity';
import Experience from './experience.entity';
import Home from './home.entity';
import Project from './project.entity';

export default class AdminConfig {
  _id: string;
  home: Home;
  about: About;
  experiences: Array<Experience>;
  projects: Array<Project>;
}
