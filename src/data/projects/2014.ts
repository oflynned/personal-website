import {
  Framework,
  Language,
  Platform,
  Project,
  ProjectType,
} from './showcase';

export const projects_2014: Project[] = [
  {
    name: 'Asteroids',
    description: [],
    year: 2014,
    type: ProjectType.PERSONAL,
    technologies: [
      Language.JAVA,
      Language.XML,
      Framework.ANDROID_SDK,
      Platform.ANDROID_APP,
      Framework.OPENGL,
    ],
  },
  {
    name: 'Open World',
    description: [
      'A Mario platformer game clone where levels are generated from text file maps. There is no objective to the game, but instead it was a way to play with physics and 2d rendering engines',
    ],
    year: 2014,
    type: ProjectType.PERSONAL,
    technologies: [
      Platform.WINDOWS,
      Language.CPP,
      Framework.ALLEGRO,
      Framework.OPENGL,
    ],
  },
];
