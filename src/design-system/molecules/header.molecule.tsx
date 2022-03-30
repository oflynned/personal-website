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
      <div className={'flex justify-between'}>
        <div className={'flex flex-col'}>
          <Heading>{name}</Heading>
          <Paragraph>Software Engineer</Paragraph>
        </div>
        <div className={'flex flex-col'}>
          <Icon glyph={Glyph.EMAIL} text={email} />
          <Icon glyph={Glyph.WEBSITE} text={'syzible.com'} />
          <Icon glyph={Glyph.GITHUB} text={'Github'} />
          <Icon glyph={Glyph.LINKEDIN} text={'LinkedIn'} />
        </div>
      </div>
      <div className={'my-4'}>
        <Paragraph>{summary}</Paragraph>
      </div>
    </div>
  );
};
