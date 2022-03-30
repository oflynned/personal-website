import React, { FC } from 'react';

export const Title: FC = ({ children }) => {
  return <h1 className={'font-bold font-body'}>{children}</h1>;
};
