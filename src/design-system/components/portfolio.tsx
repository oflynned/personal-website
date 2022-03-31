import { FC } from 'react';
import { Project } from '../../data/projects/showcase';
import { ChipHolder } from '../atoms/chip-holder.atom';
import { Chip } from '../atoms/chip.atom';
import { Paragraph } from '../atoms/paragraph.atom';
import { Title } from '../atoms/title.atom';

export interface Props {
  project: Project;
}

export const Portfolio: FC<Props> = ({ project }) => {
  return (
    <>
      <Title>{project.name}</Title>

      {project.description.map((item, index) => (
        <div key={index}>
          <Paragraph>{item}</Paragraph>
        </div>
      ))}

      <ul className={'mt-4'}>
        <ChipHolder>
          {project.technologies
            .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
            .map((technology) => (
              <li key={technology} className={'m-1'}>
                <Chip>{technology}</Chip>
              </li>
            ))}
        </ChipHolder>
      </ul>
    </>
  );
};
