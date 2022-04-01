import Link from 'next/link';
import { FC } from 'react';
import { Glyph, Icon } from '../atoms/icon.atom';

const InternalLink: FC<{ text: string; href: string }> = ({ text, href }) => {
  return (
    <Link passHref={true} href={href}>
      <a
        className={
          'font-heading hover:text-red-500 duration-150 hover:cursor-pointer'
        }
      >
        {text}
      </a>
    </Link>
  );
};

const ExternalLink: FC<{ text: string; href: string }> = ({ text, href }) => {
  return (
    <a
      href={href}
      target={'_blank'}
      className={
        'font-heading hover:text-red-500 duration-150 hover:cursor-pointer'
      }
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export const Navbar = () => {
  return (
    <nav className={'flex w-screen h-fit p-4 sm:py-8 max-w-screen-lg'}>
      <div className={'flex w-full justify-between'}>
        <div
          className={
            'flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0 divider-x divide-gray-500'
          }
        >
          <InternalLink text={'Home'} href={'/'} />
          <InternalLink text={'Portfolio'} href={'/portfolio'} />
          <InternalLink text={'CV'} href={'/cv'} />
          <ExternalLink text={'Thesis'} href={'/thesis.pdf'} />
          <ExternalLink
            text={'Snapchat Filter Project'}
            href={'/snapchat-filters.pdf'}
          />
        </div>
        <div className={'flex'}>
          <a
            href={'https://github.com/oflynned'}
            target={'_blank'}
            rel="noreferrer"
          >
            <Icon glyph={Glyph.GITHUB} />
          </a>
          <a
            href={'https://www.linkedin.com/in/edmond-%C3%B3-floinn-41b06497/'}
            target={'_blank'}
            rel="noreferrer"
          >
            <Icon glyph={Glyph.LINKEDIN} />
          </a>
          <a href={'mailto:oflynned@gmail.com'} rel="noreferrer">
            <Icon glyph={Glyph.EMAIL} />
          </a>
        </div>
      </div>
    </nav>
  );
};
