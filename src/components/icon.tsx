import classNames from 'classnames';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x';

export interface IconProps {
  name: IconName;
  size: IconSize;
  prefix: IconPrefix;
  testId?: string;
  className?: string;
  onClick?: () => void;
}

export const Icon = ({
  name,
  size,
  prefix,
  testId,
  className,
  onClick,
}: IconProps) => (
  <i
    onClick={onClick}
    data-testid={testId}
    className={classNames(
      'icon',
      prefix,
      `fa-${size}`,
      `fa-${name}`,
      onClick && 'icon-clickable',
      className
    )}
  />
);
