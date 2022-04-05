import {
  Database,
  Framework,
  Language,
  Platform,
  Project,
  ProjectType,
  Protocol,
  Tool,
} from './showcase';

export const projects_2019: Project[] = [
  {
    name: 'GreenFi',
    description: [
      'Greenfi is an environmental platform for localities in rural Africa to gain access to loans. The idea was to bring in an environment-centric system for repaying a loan in accordance with Sharia Law, as a ledger for a community to implement. The project took about 6 months in collaboration with a designer and clients, and has since sequestered $15,000+ within its first year of launch.',
    ],
    year: 2019,
    type: ProjectType.CONTRACTOR,
    technologies: [
      Framework.NODEJS,
      Framework.EXPRESSJS,
      Language.JAVASCRIPT,
      Language.CSS,
      Language.HTML,
      Protocol.REST,
      Database.MONGODB,
      Database.SQLITE,
      Framework.REACT,
      Framework.ANDROID_SDK,
      Platform.WEB,
      Platform.API,
      Platform.ANDROID_APP,
    ],
  },
  {
    name: 'Hairdressers Connect',
    description: [
      'This was a platform for stylists to showcase their work, and garner connections in order to find a job on a pseudo-marketplace as if LinkedIn and Instagram had a cross-over.',
    ],
    year: 2019,
    type: ProjectType.CONTRACTOR,
    technologies: [
      Language.JAVASCRIPT,
      Framework.EXPRESSJS,
      Framework.NODEJS,
      Database.MONGODB,
      Tool.MOCHA,
      Framework.REACT,
      Platform.API,
    ],
  },
  {
    name: 'Irish Nouns',
    description: [
      'A small game for users to be presented with a noun in the Irish language, and they have to guess whether it is masculine or feminine. Users can choose the category of words and beat their high score.',
    ],
    year: 2019,
    type: ProjectType.PERSONAL,
    technologies: [
      Platform.ANDROID_APP,
      Framework.ANDROID_SDK,
      Language.JAVA,
      Tool.FIREBASE,
      Framework.EXPRESSJS,
      Language.JAVASCRIPT,
      Database.MONGODB,
      Platform.API,
    ],
  },
];
