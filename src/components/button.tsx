import classNames from 'classnames';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
  Link = 'link',
}

export enum ButtonSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export interface ButtonProps {
  /**
   * Button content
   */
  label?: string;
  /**
   * Button icon
   */
  icon?: JSX.Element;
  /**
   * Button type
   */
  type?: ButtonType;
  /**
   * Button size
   */
  size?: ButtonSize;
  /**
   * Is fullwidth?
   */
  block?: boolean;
  /**
   * Is outline?
   */
  outline?: boolean;
  /**
   * Is disabled?
   */
  disabled?: boolean;
  /**
   * Custom className
   */
  className?: string;
  /**
   * onClick
   */
  onClick?: () => void;
}

export const Button = ({
  label,
  icon,
  type = ButtonType.Primary,
  size,
  block,
  outline,
  disabled,
  className,
  onClick,
}: ButtonProps) => (
  <button
    type="button"
    disabled={disabled}
    className={classNames(
      'button btn',
      { [`btn-outline-${type}`]: outline },
      { [`btn-${type}`]: !outline },
      { [`btn-${size}`]: size },
      { 'btn-block': block },
      className
    )}
    onClick={onClick}
  >
    {label && label}
    {icon && <span className="ml-2">{icon}</span>}
  </button>
);
