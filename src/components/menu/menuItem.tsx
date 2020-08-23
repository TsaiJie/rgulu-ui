import React from 'react';
import classNames from 'classnames';
import { scopedClassMaker } from '@/helper/classes';
export interface Props {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
const scopedClass = scopedClassMaker('gulu-menu-item');
const sc = scopedClass;
const MenuItem: React.FunctionComponent<Props> = props => {
  const { index, disabled, className, style, children } = props;
  const classes = classNames(sc(''), className, {
    'is-disabled': disabled,
  });
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};
export default MenuItem;
