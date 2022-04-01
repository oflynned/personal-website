import { FC } from 'react';
import { Position } from '../../data/experience';
import { ChipHolder } from '../atoms/chip-holder.atom';
import { Chip } from '../atoms/chip.atom';
import { Paragraph } from '../atoms/paragraph.atom';
import { Title } from '../atoms/title.atom';

export interface Props {
  job: Position;
}

export const Job: FC<Props> = ({ job }) => {
  return (
    <>
      <div className={'flex sm:flex-row flex-col sm:justify-between'}>
        <Title> {job.title}</Title>
        <Title>
          {job.start} &mdash; {job.end ?? 'now'}
        </Title>
      </div>

      <div className={'flex justify-between text-right'}>
        <Paragraph>{job.name}</Paragraph>
        <Paragraph>{job.location}</Paragraph>
      </div>

      <div className={'mt-4'}>
        <Paragraph>{job.description}</Paragraph>
      </div>

      {job.accolades && (
        <ul className={'mt-4 list-outside list-disc'}>
          {job.accolades.map((accolade) => (
            <li key={accolade}>
              <Paragraph>{accolade}</Paragraph>
            </li>
          ))}
        </ul>
      )}

      <div className={'mt-4'}>
        <ChipHolder>
          {job.technologies
            .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
            .map((technology, index) => (
              <div key={index} className={'m-1'}>
                <Chip>{technology}</Chip>
              </div>
            ))}
        </ChipHolder>
      </div>
    </>
  );
};
