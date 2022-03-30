import type { NextPage } from 'next';
import Link from 'next/link';
import { Heading } from '../design-system/atoms/heading.atom';

const Home: NextPage = () => {
  return (
    <div
      className={'flex flex-col w-screen h-screen bg-sky-50 overflow-hidden'}
    >
      <nav
        className={'flex justify-between bg-red-50 w-screen h-fit px-12 py-8'}
      >
        <Link href={'/'}>Home</Link>
        <Link href={'/portfolio'}>Portfolio</Link>
        <Link href={'/resume'}>Resume</Link>
      </nav>

      <div className={'h-screen w-screen'}>
        <Heading>Hey, I&apos;m Ed</Heading>
      </div>
    </div>
  );
};

export default Home;
