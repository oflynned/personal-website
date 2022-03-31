import { FC } from 'react';

export const Card: FC = ({ children }) => {
  return (
    <div
      className={
        'bg-white border-gray-100 border rounded-xl shadow-sm hover:shadow duration-300'
      }
    >
      {children}
    </div>
  );
};
