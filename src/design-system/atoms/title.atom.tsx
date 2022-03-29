import React, { FC } from 'react';

export type Props = {
  content: string;
};

export const Title: FC<Props> = (props) => {
  return <h1 className={'font-bold font-body'}>{props.content}</h1>;
};
