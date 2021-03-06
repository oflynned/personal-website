import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

export enum Glyph {
  EMAIL,
  GITHUB,
  LINKEDIN,
  WEBSITE,
}

export type Props = {
  glyph: Glyph;
  text?: string;
  href?: string;
  onClick?: () => void;
};

const getIconFromGlyph = (glyph: Glyph): IconDefinition => {
  switch (glyph) {
    case Glyph.EMAIL:
      return faEnvelope;
    case Glyph.GITHUB:
      return faGithub;
    case Glyph.LINKEDIN:
      return faLinkedin;
    case Glyph.WEBSITE:
    default:
      return faWifi;
  }
};

export const Icon: FC<Props> = ({ text, glyph, onClick = () => {} }) => {
  const icon = getIconFromGlyph(glyph);

  return (
    <div
      className={
        'flex justify-between hover:cursor-pointer hover:text-red-500 duration-150'
      }
      onClick={onClick}
    >
      {text && <p className={'flex-auto text-right font-body mr-2'}>{text}</p>}
      <div>
        <FontAwesomeIcon icon={icon} className={'flex-1 w-6'} />
      </div>
    </div>
  );
};
