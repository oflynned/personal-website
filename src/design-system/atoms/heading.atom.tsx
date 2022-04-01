import React, { FC } from 'react';

export const Heading: FC = ({ children }) => {
  return (
    <h3 className={'text-2xl font-bold font-heading leading-relaxed'}>
      {children}
    </h3>
  );
};
