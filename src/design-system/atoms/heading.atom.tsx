import React, { FC } from 'react';

export type Props = {
  content: string;
};

export const Heading: FC<Props> = (props) => {
  return <h3 className={'text-2xl font-bold font-heading'}>{props.content}</h3>;
};
