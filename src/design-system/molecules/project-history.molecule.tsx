import { FC } from 'react';
import { Project } from '../../data/projects/showcase';
import { Heading } from '../atoms/heading.atom';
import { Paragraph } from '../atoms/paragraph.atom';
import { Portfolio } from '../components/portfolio';

export type Props = {
  projects: Project[];
};

export const ProjectHistory: FC<Props> = ({ projects }) => {
  return (
    <>
      <Heading>Projects</Heading>
      <div className={'pt-2'}>
        <Paragraph>
          Below are some notable projects, find a full portfolio here.
        </Paragraph>
      </div>

      <ul className={'divide-y divide-grey-200'}>
        {projects.map((project) => (
          <li key={project.name} className={'py-8'}>
            <Portfolio project={project} />
          </li>
        ))}
      </ul>
    </>
  );
};
