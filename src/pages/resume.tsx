import { FC } from 'react';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { Heading } from '../design-system/atoms/heading.atom';
import { Paragraph } from '../design-system/atoms/paragraph.atom';
import { Page } from '../design-system/components/page';
import { EducationHistory } from '../design-system/molecules/education-history.molecule';
import { Header } from '../design-system/molecules/header.molecule';
import { ProjectHistory } from '../design-system/molecules/project-history.molecule';
import { WorkHistory } from '../design-system/molecules/work-history.molecule';

const showcaseProjects = projects.filter((item) => item.resumeWorthy);
const {
  name,
  summary,
  email,
  links,
  positions,
  qualifications,
  languages,
  awards,
} = experience;

const Resume: FC = () => {
  return (
    <div className={'w-screen min-h-screen flex justify-center'}>
      <Page>
        <Header name={name} summary={summary} email={email} links={links} />

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

export default Resume;
