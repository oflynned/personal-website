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
    description: [
      'A corpus of grammar rules as part of a personal project to make the Irish language more accessible.',
    ],
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
    description: [
      'A project with some friends to make a digital breathalyser to enforce harm reduction methods of binge drinking. Users add drinks throughout a night, and the device locally creates a crude graph of the decay of alcohol from the bloodstream. The app had approximately 5K downloads within 2 years.',
    ],
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
    description: [
      'A mathematical simulation of the probability of landing on certain tiles in the game Monopoly as part of a university assignment.',
    ],
    year: 2015,
    type: ProjectType.PERSONAL,
    technologies: [Language.JAVA],
  },
];
