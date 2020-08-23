import React, { useContext } from 'react';
import classNames from 'classnames';
import { scopedClassMaker } from '@/helper/classes';
import { MenuContext } from '@/components/menu/menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const scopedClass = scopedClassMaker('gulu-menu-item');
const sc = scopedClass;
const MenuItem: React.FunctionComponent<MenuItemProps> = props => {
  const { index, disabled, className, style, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames(sc(''), className, {
    disabled: disabled,
    active: context.index === index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
