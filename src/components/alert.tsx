import { ReactNode } from 'react';
import classNames from 'classnames';

export type AlertType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export interface AlertProps {
  type: AlertType;
  children: ReactNode;
  testId?: string;
  className?: string;
  onClick?: () => void;
}

export const Alert = ({
  type,
  children,
  testId,
  className,
  onClick,
}: AlertProps) => (
  <div
    onClick={onClick}
    className={classNames(
      'alert',
      `alert-${type}`,
      onClick && 'alert-clickable',
      className
    )}
    data-testid={testId}
  >
    {children}
  </div>
);
