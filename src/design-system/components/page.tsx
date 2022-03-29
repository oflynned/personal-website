import { FC } from 'react';

export const Page: FC = (props) => {
  return (
    <div className={'bg-gray-50 max-w-6xl'}>
      <div className={'m-12'}>{props.children}</div>
    </div>
  );
};
