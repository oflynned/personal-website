import { FC } from 'react';
import { Qualification } from '../../data/experience';
import { Heading } from '../atoms/heading.atom';
import { Education } from '../components/education';

export type Props = {
  qualifications: Qualification[];
};

export const EducationHistory: FC<Props> = ({ qualifications }) => {
  return (
    <>
      <Heading>Education</Heading>
      <ol className={'divide-y divide-gray-200'}>
        {qualifications.map((qualification) => {
          return (
            <li key={qualification.degree} className={'py-8'}>
              <Education qualification={qualification} />
            </li>
          );
        })}
      </ol>
    </>
  );
};
