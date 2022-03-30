import { FC } from 'react';
import { Position } from '../../data/experience';
import { Paragraph } from '../atoms/paragraph.atom';
import { Title } from '../atoms/title.atom';

export interface Props {
  job: Position;
}

export const Job: FC<Props> = ({ job }) => {
  return (
    <>
      <div className={'flex justify-between'}>
        <Title> {job.title}</Title>
        <Title>
          {job.start} - {job.end ?? 'now'}
        </Title>
      </div>

      <div className={'flex justify-between'}>
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

      <div className={'mt-4 flex flex-wrap flex-row'}>
        {job.technologies.map((technology) => (
          <div
            key={technology}
            className={
              'rounded-lg bg-blue-100 hover:bg-blue-300 hover:cursor-pointer duration-150 p-2 m-1'
            }
          >
            <Paragraph>{technology}</Paragraph>
          </div>
        ))}
      </div>
    </>
  );
};
