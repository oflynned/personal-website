import { FC } from 'react';
import { Paragraph } from './paragraph.atom';

export type Props = {
  onClick?: () => void;
};

export const Chip: FC<Props> = ({ children, onClick = () => {} }) => {
  return (
    <div
      className={
        'rounded-lg bg-blue-100 hover:bg-blue-300 hover:cursor-pointer duration-150 p-2 text-center'
      }
      onClick={onClick}
    >
      <Paragraph>{children}</Paragraph>
    </div>
  );
};
