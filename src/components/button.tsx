import { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

export interface ButtonProps {
  type: ButtonType;
  size: ButtonSize;
  block?: boolean;
  testId?: string;
  outline?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  type,
  size,
  block,
  testId,
  outline,
  disabled,
  className,
  children,
  onClick,
}: ButtonProps) => (
  <button
    type="button"
    disabled={disabled}
    className={classNames(
      'button btn example',
      type && (outline ? `btn-outline-${type}` : `btn-${type}`),
      block && 'btn-block',
      size && `btn-${size}`,
      className
    )}
    onClick={onClick}
    data-testid={testId}
  >
    {children}
  </button>
);
