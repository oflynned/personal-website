import Link from 'next/link';
import { FC } from 'react';

export type Props = {
  email: string;
  title: string;
};

export const Mailto: FC<Props> = ({ email, title }) => {
  return <Link href={`mailto:${email}`}>{title}</Link>;
};
