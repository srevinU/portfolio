import { Types } from 'mongoose';
import About from './about.entity';
import Experience from './experience.entity';
import Home from './home.entity';
import Project from './project.entity';

export default class AdminConfig {
  _id?: Types.ObjectId;
  home: Home;
  about: About;
  experiences: Array<Experience>;
  projects: Array<Project>;
}
