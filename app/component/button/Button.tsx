import clsx from 'clsx';
import { ReactNode } from 'react';
import { buttonBase, buttonType } from './ButtonStyles';

export default function Button({
  type = 'default',
  children,
}: {
  type?: keyof typeof buttonType;
  children: ReactNode;
}) {
  return (
    <>
      <button className={clsx(buttonBase, buttonType[type])}>
        {children}
      </button>
      <button className="bg-primaryForeground">{children}</button>
    </>
  );
}
