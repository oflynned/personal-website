import {
  Database,
  Framework,
  Language,
  Platform,
  Project,
  ProjectType,
} from './showcase';

export const projects_2015: Project[] = [
  {
    name: 'Qwak',
    description: [
      'An OCR reading aide for the visually impaired to transcribe notes to audio.',
    ],
    year: 2015,
    type: ProjectType.PERSONAL,
    technologies: [
      Framework.ANDROID_SDK,
      Platform.ANDROID,
      Language.JAVA,
      Language.XML,
    ],
    resumeWorthy: false,
  },
  {
    name: 'DrinkTracker',
    description: [],
    year: 2015,
    type: ProjectType.STARTUP,
    resumeWorthy: false,
    technologies: [
      Framework.ANDROID_SDK,
      Platform.ANDROID,
      Language.JAVA,
      Language.XML,
      Database.SQLITE,
    ],
  },
  {
    name: 'iompar',
    description: [
      'Iompar was a transportation app that syncs and aggregates your smart card balance when an official app for tracking your balance was not available by scraping from internet sources. The app also provided real-time information in order to track tram times on the Luas light-rail system in Dublin.',
    ],
    year: 2015,
    type: ProjectType.PERSONAL,
    technologies: [
      Framework.ANDROID_SDK,
      Platform.ANDROID,
      Language.JAVA,
      Language.XML,
      Database.SQLITE,
      Framework.JSOUP,
    ],
    resumeWorthy: false,
  },
];
