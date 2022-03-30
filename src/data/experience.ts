export type Position = {
  name: string;
  location: string;
  title: string;
  role: Role;
  start: string;
  end?: string;
  description: string;
  accolades: string[];
  technologies: string[];
};

export enum Role {
  CONTRACTOR,
  SELF_EMPLOYED,
  EMPLOYEE,
}

export enum Site {
  GITHUB,
  LINKEDIN,
  WEBSITE,
}

export type Link = {
  site: Site;
  name: string;
  url: string;
};

export type Experience = {
  name: string;
  summary: string;
  email: string;
  links: Link[];
  positions: Position[];
  qualifications: Qualification[];
  languages: string[];
  awards: string[];
};

export type Qualification = {
  institution: string;
  degree: string;
  award: string;
  result: string;
  location: string;
};

const yearsOfExperience = () => {
  return new Date().getFullYear() - 2015;
};

export const experience: Experience = {
  name: "Edmond O'Flynn",
  summary: `A talented full-stack software engineer with ${yearsOfExperience()} years of industry experience. A demonstrated history of team leadership and cross-platform product development in JavaScript & TypeScript using NodeJS & React.`,
  email: 'oflynned@gmail.com',
  links: [
    {
      site: Site.GITHUB,
      name: 'GitHub',
      url: 'https://github.com/oflynned',
    },
    {
      site: Site.LINKEDIN,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/edmond-%C3%B3-floinn-41b06497',
    },
    {
      site: Site.WEBSITE,
      name: 'Personal website',
      url: 'https://syzible.com',
    },
  ],
  awards: [
    'Received a New Frontiers Phase 1 scholarship to build business development skills in DCU, Ireland',
    'Achieved first place in the hackathon Hackathon na Gaeilge organised by UCD, Ireland.',
    '1 of 10 in Ireland to receive the Huawei Seeds of the Future scholarship to spend a month in China',
  ],
  languages: ['English', 'Irish', 'French', 'Dutch', 'German', 'Polish'],
  qualifications: [
    {
      institution: 'University of Dublin, Trinity College',
      degree: 'Computer Engineering',
      result: 'II:I',
      award: 'BA, BEng',
      location: 'Dublin, Ireland',
    },
  ],
  positions: [
    {
      name: 'aaqua',
      location: 'Antwerp, Belgium',
      title: 'Senior Software Engineer',
      role: Role.EMPLOYEE,
      start: 'August 2020',
      description:
        'Aaqua is a passion-led social network. Members can jointly curate original and engaging content combined with member inspired online-to-offline initiatives centred around their hobbies and interests.',
      accolades: [
        'Implemented a real-time websocket microservice for broadcasting 250K+ events per hour to clients.',
        'Implemented a misspelling-tolerant text search engine using Apache Lucene to return results within 300ms.',
        'Maintained and consolidated authorisation microservices and indexers into one service to reduce latency from >3s to 100ms',
        'Deprecated a legacy monolith API gracefully to maintain backward compatibility and worked with teams to split it into 25+ microservices with stitched federated GraphQL subgraphs using Apollo Federation.',
      ],
      technologies: [
        'TypeScript',
        'Java',
        'Neo4j',
        'DynamoDB',
        'Node.js',
        'Koa.js',
        'Kafka',
        'gRPC',
        'GraphQL',
        'Apollo Federation',
        'Microservices',
        'React Native',
        'Styled Components',
        'NX',
        'Monolith',
        'Monorepo',
        'Docker',
        'Kubernetes',
        'Terraform',
        'ArgoCD',
        'Jest',
        'Mocha',
      ],
    },
    {
      name: 'Sortlist',
      location: 'Brussels, Belgium',
      title: 'Senior Frontend Engineer, Team Lead',
      role: Role.EMPLOYEE,
      start: 'November 2019',
      end: 'July 2020',
      description:
        'Sortlist is an independent Belgian platform that specialises in putting businesses in touch with marketing & communication agencies. Clients define their needs for projects and are then are put in contact with relevant agencies for completing the specific project. Agencies receive relevant business opportunities tailored to their needs.',
      accolades: [
        'Introduced and improved development processes (technical specs, post-mortems) to reduce incidents by 4x.',
        'Organised team innovation days, mentored junior devs, held workshops on topics (TDD, TypeScript, SOLID).',
        'Rotated a scrum master role, rotated a release manager role with Agile Release Trains.',
        'Introduced automated testing on legacy codebases with Jest, Enzyme & Cypress with 0% coverage.',
        'Led an R&D project to transition from AngularJS to React with TypeScript using NextJS.',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'PostgreSQL',
        'Ruby on Rails',
        'Node.js',
        'Next.js',
        'REST',
        'Docker',
        'Monorepo',
        'Enyme',
        'Jest',
        'Cypress',
      ],
    },
    {
      name: 'devfair',
      location: 'Remote',
      title: 'Software Engineer',
      role: Role.CONTRACTOR,
      start: 'January 2019',
      end: 'November 2019',
      description:
        'Devfair is an end-to-end platform for non-IT businesses to build software in an accessible and minimal risk way. It is an evolution of the managed service marketplace space by providing businesses and freelancers the capability to successfully build and manage their own software projects.',
      accolades: [
        'Communicated effectively with clients and teams to define requirements and specifications for projects.',
        'Implemented a resource ledger/management platform for environmental restoration in rural Kenya.',
        'Collaborated in cross-functional teams spanning API development and frontend (web, Android and iOS)',
      ],
      technologies: [
        'JavaScript',
        'MongoDB',
        'SQLite',
        'Java',
        'Kotlin',
        'Swift',
        'React',
        'REST',
        'Android SDK',
        'iOS SDK',
      ],
    },
    {
      name: 'Swrve',
      location: 'Dublin, Ireland',
      title: 'Software Engineer',
      role: Role.EMPLOYEE,
      start: 'February 2018',
      end: 'January 2019',
      description:
        'Swrve is a mobile marketing and customer engagement platform that helps leading brands confidently scale 14+ billion communications events to 300+ million customers in real time. They process richer real-time data allowing brands to respond with more relevance to the action and intent of customers in real-time.',
      accolades: [
        'Reduced MySQL query latency by 20x within GraphQL field aggregation, reducing one from 6s to 300ms.',
        'Supported a migration from REST to GraphQL, retrieving information from 5+ microservices.',
        'Supported a migration from Ember to React in a dashboard redesign project to display ad campaign metrics.',
      ],
      technologies: [
        'Ruby',
        'Ruby on Rails',
        'JavaScript',
        'Java',
        'Scala',
        'React',
        'MySQL',
      ],
    },
    {
      name: 'GlassByte',
      location: 'Dublin, Ireland',
      title: 'Cofounder, Chief Product/Technology Officer',
      role: Role.SELF_EMPLOYED,
      start: 'April 2015',
      end: 'December 2017',
      description:
        'GlassByte was a software consultancy firm specialising in the procurement of medical-based apps and services in conjunction with hospitals and universities around the Dublin metro region to provide new and innovative technologies.',
      accolades: [
        'Co-managed the business, focused on product development while taking on the roles of CPO/CTO.',
        'Implemented a platform for clinical trial orchestration to assist a hospital with data ingestion pipelines, reducing the time involved for trial investigators to collect participant data from days to minutes.',
        'Designed and architected client solutions, partook in UI/UX research, aided in hypothesis testing processes.',
      ],
      technologies: [
        'Java',
        'JavaScript',
        'Swift',
        'Android SDK',
        'iOS SDK',
        'MySQL',
        'Python',
        'Flask',
        'Express.js',
        'REST',
      ],
    },
    {
      name: 'Accenture',
      location: 'Dublin, Ireland',
      title: 'Software Engineer Intern',
      role: Role.EMPLOYEE,
      description:
        'Worked alongside data scientists & software engineers in the Accenture Innovation Labs to receive mentoring and develop interesting solutions using machine learning and AI technology.',
      start: 'June 2016',
      end: 'September 2016',
      accolades: [
        "Developed an Alexa skill to greet a user after recognising the user's face from a webcam",
        'Assisted in a project to generate art from sensor metrics',
      ],
      technologies: [
        'Java',
        'Python',
        'Tomcat',
        'Alexa SDK',
        'Node.js',
        'Tensorflow',
        'Microsoft Facial Recognition SDK',
      ],
    },
  ],
};
