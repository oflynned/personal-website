import type { NextPage } from 'next';
import { Heading } from '../design-system/atoms/heading.atom';

const Home: NextPage = () => {
  return (
    <div
      className={'flex justify-center items-center w-screen h-screen bg-sky-50'}
    >
      <div className={'h-fit justify-self-center'}>
        <Heading>Hey, I&apos;m Ed</Heading>
      </div>
    </div>
  );
};

export default Home;
