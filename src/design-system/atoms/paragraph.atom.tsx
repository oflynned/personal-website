import React, { FC } from 'react';

export type Props = {
  content: string;
};

export const Paragraph: FC<Props> = (props) => {
  return <p className={`font-body`}>{props.content}</p>;
};
