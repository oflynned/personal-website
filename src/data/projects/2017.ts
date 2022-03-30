import {
  Database,
  Framework,
  Language,
  Platform,
  Project,
  ProjectType,
  Protocol,
} from './showcase';

export const projects_2017: Project[] = [
  {
    name: 'Farrel McDarrel Soundboard',
    description: [
      'This was a soundboard app as part of a joke with some friends.',
    ],
    year: 2017,
    type: ProjectType.PERSONAL,
    technologies: [
      Language.JAVA,
      Platform.ANDROID,
      Framework.ANDROID_SDK,
      Language.XML,
    ],
    resumeWorthy: false,
  },
  {
    name: 'Open Source Snapchat Filters',
    description: [
      'A research paper was written resulting from work done on the topic Orthogonal Procrustes in linear algebra.',
      'A webcam feed is processed and applies 3d graphics from 2d pose markers using facial landmarks.',
      'Simulated filters included object rasterisation on pose, face swap, and light occlusion.',
    ],
    year: 2017,
    type: ProjectType.PERSONAL,
    technologies: [Language.PYTHON, Framework.OPENCV],
    resumeWorthy: true,
  },
  {
    name: 'Loinnir',
    description: [],
    year: 2017,
    type: ProjectType.PERSONAL,
    technologies: [
      Language.PYTHON,
      Framework.FLASK,
      Language.JAVA,
      Database.MONGODB,
      Database.SQLITE,
      Framework.ANDROID_SDK,
      Protocol.REST,
      Framework.JQUERY,
      Platform.API,
      Platform.ANDROID,
      Platform.WEB,
    ],
    resumeWorthy: false,
  },
  {
    name: 'PlusPlant',
    description: [
      'A friend of mine needed a website to showcase his business of offsetting carbon footprints by planting trees in rural Kenya.',
      'I created a static set of pages using the Bulma design system.',
    ],
    year: 2017,
    type: ProjectType.STARTUP,
    technologies: [Language.CSS, Language.HTML, Language.JAVASCRIPT],
    resumeWorthy: false,
  },
];
