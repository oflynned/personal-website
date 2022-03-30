import React, { FC } from 'react';

export const Paragraph: FC = ({ children }) => {
  return <p className={`font-body`}>{children}</p>;
};
