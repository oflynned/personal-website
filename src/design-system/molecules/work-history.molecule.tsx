import { FC } from 'react';
import { Position } from '../../data/experience';
import { Heading } from '../atoms/heading.atom';
import { Job } from '../components/job';

export type Props = {
  positions: Position[];
};

export const WorkHistory: FC<Props> = ({ positions }) => {
  return (
    <>
      <Heading content={'Jobs'} />
      <ol className={'divide-y divide-gray-200'}>
        {positions.map((job, index) => {
          return (
            <li key={job.name} className={'py-8'}>
              <Job job={job} />
            </li>
          );
        })}
      </ol>
    </>
  );
};
