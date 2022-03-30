import {
  Database,
  Framework,
  Language,
  Platform,
  Project,
  ProjectType,
  Tool,
} from './showcase';

export const projects_2018: Project[] = [
  {
    name: 'Occup.ie',
    description: [],
    year: 2018,
    type: ProjectType.STARTUP,
    technologies: [
      Framework.EXPRESSJS,
      Framework.NODEJS,
      Language.JAVASCRIPT,
      Framework.ANDROID_SDK,
      Platform.ANDROID,
      Platform.API,
      Platform.WEB,
      Tool.MOCHA,
      Framework.SUPERTEST,
      Tool.FIREBASE,
    ],
    resumeWorthy: false,
  },
  {
    name: 'T1Exercise',
    description: [],
    year: 2018,
    type: ProjectType.CONTRACTOR,
    technologies: [
      Language.JAVA,
      Language.XML,
      Framework.EXPRESSJS,
      Language.JAVASCRIPT,
      Framework.NODEJS,
      Database.MONGODB,
      Tool.FIREBASE,
    ],
    resumeWorthy: false,
  },
];
