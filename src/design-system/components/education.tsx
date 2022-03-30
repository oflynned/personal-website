import { FC } from 'react';
import { Qualification } from '../../data/experience';
import { Paragraph } from '../atoms/paragraph.atom';
import { Title } from '../atoms/title.atom';

export interface Props {
  qualification: Qualification;
}

export const Education: FC<Props> = ({ qualification }) => {
  return (
    <>
      <div className={'flex justify-between'}>
        <Title>
          {qualification.degree} ({qualification.award})
        </Title>
        <Title>{qualification.result}</Title>
      </div>

      <div className={'flex justify-between'}>
        <Paragraph>{qualification.institution}</Paragraph>
        <Paragraph>{qualification.location}</Paragraph>
      </div>
    </>
  );
};
