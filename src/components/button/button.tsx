import React from 'react';
import classNames from 'classnames';

import './button.scss';
import { scopedClassMaker } from '@/helper/classes';

type ButtonSize = 'big' | 'small';
type ButtonType = 'main' | 'default' | 'danger' | 'waring' | 'success';
type Theme = 'button' | 'link' | 'text';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  theme?: Theme;
  level?: ButtonType;
  loading?: boolean;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const scopedClass = scopedClassMaker('gulu');
const sc = scopedClass;
const Button: React.FC<ButtonProps> = props => {
  const {
    theme,
    level,
    disabled,
    size,
    children,
    href,
    loading,
    className,
    ...restProps
  } = props;
  const classes = classNames(sc('button'), className, {
    [sc(`theme-${theme}`)]: theme,
    [sc(`size-${size}`)]: size,
    [sc(`level-${level}`)]: level,
    disabled: theme === 'link' && disabled,
  });
  if (theme === 'link' && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        <span>{children}</span>
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {loading && <span className="gulu-loadingIndicator" />}
        <span>{children}</span>
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  theme: 'button',
  loading: false,
};
export default Button;
