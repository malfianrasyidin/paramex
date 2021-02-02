import classNames from 'classnames';
import { IconName } from '@fortawesome/fontawesome-common-types';

export enum IconSize {
  ExtraSmall = 'fa-xs',
  Small = 'fa-sm',
  Medium = 'fa-md',
  Large = 'fa-lg',
  TwoTimes = 'fa-2x',
  ThreeTimes = 'fa-3x',
  FiveTimes = 'fa-5x',
  SevenTimes = 'fa-7x',
  TenTimes = 'fa-10x',
}

export enum IconStyle {
  Solid = 'fas',
  Regular = 'far',
  Light = 'fal',
  DuoTone = 'fad',
  Brands = 'fab',
}

export interface IconProps {
  name: IconName;
  size?: IconSize;
  style?: IconStyle;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
}

export const Icon = ({
  name,
  size = IconSize.Medium,
  style = IconStyle.Solid,
  className,
  onClick,
  ...rest
}: IconProps) => {
  const args = Object.keys(rest).map((arg) => `fa-${arg}`);

  return (
    <i
      className={classNames(style, size, `fa-${name}`, args, className)}
      onClick={onClick}
    />
  );
};
