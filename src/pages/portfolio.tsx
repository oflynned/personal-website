import { NextPage } from 'next';
import { projects } from '../data/projects';
import { Project, Technology } from '../data/projects/showcase';
import { Card } from '../design-system/atoms/card.atom';
import { Chip } from '../design-system/atoms/chip.atom';
import { Heading } from '../design-system/atoms/heading.atom';
import { Paragraph } from '../design-system/atoms/paragraph.atom';
import { Title } from '../design-system/atoms/title.atom';
import { Navbar } from '../design-system/molecules/nav-bar.molecule';

const Portfolio: NextPage = () => {
  return (
    <div className={'flex justify-center flex-col items-center mb-8'}>
      <Navbar />

      <div className={'max-w-screen-lg'}>
        <div className={'mt-4'}>
          <Heading>Skills</Heading>
          <div className={'mt-4'}>
            <div className={'flex flex-row flex-wrap justify-center'}>
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
            </div>
          </div>
        </div>

        <div className={'mt-8'}>
          <Heading>Portfolio</Heading>
          <div className={'mt-4'}>
            <ol className={'space-y-4'}>
              {projects.map((project, index) => (
                <li key={project.name}>
                  <Card>
                    <div className={'flex flex-col m-8'}>
                      <div className={'flex justify-between'}>
                        <Title>{project.name}</Title>
                        <Title>#{index + 1}</Title>
                      </div>
                      <div>
                        <Paragraph>
                          {project.year} &mdash; {project.type}
                        </Paragraph>
                      </div>
                      <div className={'mt-4'}>
                        {project.description.map((item, index) => (
                          <div key={index}>
                            <Paragraph>{item}</Paragraph>
                          </div>
                        ))}
                      </div>
                      <ul className={'flex flex-row flex-wrap mt-4'}>
                        {project.technologies
                          .sort((a, b) =>
                            a.toLowerCase() > b.toLowerCase() ? 1 : -1,
                          )
                          .map((technology) => (
                            <li key={technology} className={'m-1'}>
                              <Chip>{technology}</Chip>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
