import React from 'react';
import './button.scss';
declare type ButtonSize = 'big' | 'small';
declare type ButtonType = 'main' | 'default' | 'danger' | 'waring' | 'success';
declare type Theme = 'button' | 'link' | 'text';
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
declare type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
