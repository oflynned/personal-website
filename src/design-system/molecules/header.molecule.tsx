import { FC } from 'react';
import { Link } from '../../data/experience';
import { Heading } from '../atoms/heading.atom';
import { Glyph, Icon } from '../atoms/icon.atom';
import { Paragraph } from '../atoms/paragraph.atom';

export type Props = {
  name: string;
  summary: string;
  email: string;
  links: Link[];
};

export const Header: FC<Props> = ({ name, summary, email, links }) => {
  return (
    <div>
      <div className={'flex sm:flex-row flex-col justify-between'}>
        <div className={'flex flex-col'}>
          <Heading>{name}</Heading>
          <Paragraph>Software Engineer</Paragraph>
        </div>
        <div className={'flex flex-row mt-2 space-x-2'}>
          <Icon glyph={Glyph.EMAIL} />
          <Icon glyph={Glyph.WEBSITE} />
          <Icon glyph={Glyph.GITHUB} />
          <Icon glyph={Glyph.LINKEDIN} />
        </div>
      </div>
      <div className={'my-4'}>
        <Paragraph>{summary}</Paragraph>
      </div>
    </div>
  );
};
