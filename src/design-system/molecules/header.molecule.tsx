import { FC } from 'react';
import { Experience } from '../../data/experience';
import { Heading } from '../atoms/heading.atom';
import { Glyph, Icon } from '../atoms/icon.atom';
import { Paragraph } from '../atoms/paragraph.atom';

export type Props = Pick<
  Experience,
  'name' | 'summary' | 'email' | 'github' | 'linkedin' | 'website'
>;

export const Header: FC<Props> = ({
  name,
  summary,
  email,
  github,
  website,
  linkedin,
}) => {
  return (
    <div>
      <div className={'flex sm:flex-row flex-col justify-between'}>
        <div className={'flex flex-col'}>
          <Heading>{name}</Heading>
          <Paragraph>Software Engineer</Paragraph>
        </div>
        <div className={'flex flex-row mt-2 space-x-2'}>
          <Icon
            glyph={Glyph.EMAIL}
            onClick={() => {
              window.open(`mailto:${email}`);
            }}
          />
          <Icon
            glyph={Glyph.WEBSITE}
            onClick={() => window.open(website.url, '_blank')}
          />
          <Icon
            glyph={Glyph.GITHUB}
            onClick={() => window.open(github.url, '_blank')}
          />
          <Icon
            glyph={Glyph.LINKEDIN}
            onClick={() => window.open(linkedin.url, '_blank')}
          />
        </div>
      </div>
      <div className={'my-4'}>
        <Paragraph>{summary}</Paragraph>
      </div>
    </div>
  );
};
