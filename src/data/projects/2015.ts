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
    type: ProjectType.STARTUP,
    technologies: [
      Framework.ANDROID_SDK,
      Platform.ANDROID_APP,
      Language.JAVA,
      Language.XML,
    ],
  },
  {
    name: 'Irish Language Grammar App',
    description: [],
    year: 2015,
    type: ProjectType.PERSONAL,
    technologies: [
      Language.JAVA,
      Language.XML,
      Framework.ANDROID_SDK,
      Platform.ANDROID_APP,
    ],
  },
  {
    name: 'DrinkTracker',
    description: [],
    year: 2015,
    type: ProjectType.STARTUP,
    technologies: [
      Framework.ANDROID_SDK,
      Platform.ANDROID_APP,
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
      Platform.ANDROID_APP,
      Language.JAVA,
      Language.XML,
      Database.SQLITE,
      Framework.JSOUP,
    ],
  },
  {
    name: 'Monopoly Markov Chain Simulation',
    description: [],
    year: 2015,
    type: ProjectType.PERSONAL,
    technologies: [Language.JAVA],
  },
];
