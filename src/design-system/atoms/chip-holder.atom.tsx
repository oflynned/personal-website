import { FC } from 'react';

export const ChipHolder: FC = ({ children }) => {
  return <div className={'flex flex-wrap flex-row'}>{children}</div>;
};
