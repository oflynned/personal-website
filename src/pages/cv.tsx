import { NextPage } from 'next';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { Chip } from '../design-system/atoms/chip.atom';
import { Heading } from '../design-system/atoms/heading.atom';
import { Paragraph } from '../design-system/atoms/paragraph.atom';
import { Page } from '../design-system/components/page';
import { EducationHistory } from '../design-system/molecules/education-history.molecule';
import { Header } from '../design-system/molecules/header.molecule';
import { Navbar } from '../design-system/molecules/nav-bar.molecule';
import { ProjectHistory } from '../design-system/molecules/project-history.molecule';
import { WorkHistory } from '../design-system/molecules/work-history.molecule';

const showcaseProjects = projects.filter((item) => item.resumeWorthy);
const {
  name,
  summary,
  email,
  github,
  website,
  linkedin,
  positions,
  qualifications,
  languages,
  awards,
} = experience;

const CurriculumVitae: NextPage = () => {
  return (
    <div
      className={'flex flex-col max-w-screen min-h-screen flex items-center mb-8 overflow-x-hidden'}
    >
      <Navbar />
      <div className={'m-12'}>
        <Chip
          onClick={() => {
            window.open('/cv.pdf', '_blank');
          }}
        >
          PDF version
        </Chip>
      </div>
      <Page>
        <Header
          name={name}
          summary={summary}
          email={email}
          github={github}
          website={website}
          linkedin={linkedin}
        />

        <div className={'mt-8'}>
          <WorkHistory positions={positions} />
        </div>

        <div className={'mt-4'}>
          <EducationHistory qualifications={qualifications} />
        </div>

        <div className={'mt-4'}>
          <ProjectHistory projects={showcaseProjects} />
        </div>

        <div className={'mt-4'}>
          <Heading>Languages</Heading>
          <div className={'mt-2'}>
            <Paragraph>{languages.join(', ')}</Paragraph>
          </div>
        </div>

        <div className={'mt-8'}>
          <Heading>Awards</Heading>
          <ul className={'mt-2'}>
            {awards.map((award) => (
              <li key={award}>
                <Paragraph>{award}</Paragraph>
              </li>
            ))}
          </ul>
        </div>
      </Page>
    </div>
  );
};

export default CurriculumVitae;
