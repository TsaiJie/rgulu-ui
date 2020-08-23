import React, { FunctionComponentElement, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from '@/components/menu/menu';
import { MenuItemProps } from '@/components/menu/menuItem';
export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: React.FunctionComponent<SubMenuProps> = ({
  index,
  title,
  children,
  className,
}) => {
  const context = useContext(MenuContext);
  const classes = classNames('gulu-menu-item gulu-submenu-item', className, {
    active: context.index === index,
  });
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return childElement;
      } else {
        console.warn('SubMenu 的子元素至少有一个不是 MenuItem');
      }
    });
    return <ul className={'gulu-submenu'}>{childrenComponent}</ul>;
  };
  return (
    <li key={index} className={classes}>
      <div className={'gulu-submenu-title'}>{title}</div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
