import { usualApiStack } from './api.stack';
import {
  Database,
  Framework,
  Language,
  Platform,
  Project,
  ProjectType,
  Tool,
} from './showcase';

export const projects_2020: Project[] = [
  {
    name: 'Drynk - contextual health insights app',
    year: 2020,
    description: [
      'Drynk is an alcohol health app that tries to reduce harm by contextually showing the effects of alcohol, like Fitbit with exercise',
      'The user adds drinks as they consume them, and the app works out state projections and context to aid judgement and consumption insights.',
      'The API consists of a number of microservices to calculate user timelines, statistics, and health insights meshed together using GraphQL.',
    ],
    type: ProjectType.PERSONAL,
    resumeWorthy: true,
    technologies: [
      Platform.ANDROID,
      Framework.ANDROID_SDK,
      Platform.WEB,
      Language.KOTLIN,
      Language.JAVA,
      Database.MONGODB,
      ...usualApiStack,
    ],
  },
  {
    name: 'Pseudo-relational MongoDB ORM',
    year: 2020,
    description: [
      'A pseudo-relational layer on top of MongoDB written in TypeScript to quickly iterate on personal projects.',
      'The aim was to bridge the gap between relational databases and the flexibility of document-based data stores.',
      'Published on npm.',
    ],
    type: ProjectType.PERSONAL,
    resumeWorthy: true,
    technologies: [
      Language.JAVASCRIPT,
      Language.TYPESCRIPT,
      Database.MONGODB,
      Tool.JEST,
      Tool.WEBPACK,
    ],
  },
];
