import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import classes from '@/helper/classes';
import './input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FunctionComponent<Props> = props => {
  const { className, ...rest } = props;
  return <input className={classes('gulu-input', className)} {...rest} />;
};
export default Input;
