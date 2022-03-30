import { projects } from '../data/projects';
import { Project, Technology } from '../data/projects/showcase';
import { ChipHolder } from '../design-system/atoms/chip-holder.atom';
import { Chip } from '../design-system/atoms/chip.atom';
import { Heading } from '../design-system/atoms/heading.atom';
import { Paragraph } from '../design-system/atoms/paragraph.atom';
import { Title } from '../design-system/atoms/title.atom';

const Portfolio = () => {
  return (
    <div>
      <Heading>Portfolio</Heading>

      <div className={'mt-4'}>
        <Heading>Skills</Heading>
        <div className={'mt-4'}>
          <ChipHolder>
            {projects
              .reduce((acc: Technology[], project: Project) => {
                const technologies = [...acc, ...project.technologies];

                return [...new Set(technologies)];
              }, [])
              .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
              .map((item, index) => {
                return (
                  <div key={index} className={'m-1'}>
                    <Chip>{item}</Chip>
                  </div>
                );
              })}
          </ChipHolder>
        </div>
      </div>

      <div className={'mt-4'}>
        <Heading>Projects</Heading>
        <div className={'mt-4'}>
          <ol>
            {projects.map((project) => (
              <li key={project.name}>
                <Title>{project.name}</Title>
                <Paragraph>{project.year}</Paragraph>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
