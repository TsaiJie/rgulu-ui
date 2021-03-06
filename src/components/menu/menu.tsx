import React, { createContext, useState } from 'react';
import classNames from 'classnames';
import { scopedClassMaker } from '@/helper/classes';
import { MenuItemProps } from './menuItem';
import './menu.scss';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;

interface Props {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
}
// 需要传递的Context类型
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
// 创建context
export const MenuContext = createContext<IMenuContext>({ index: '0' });
const scopedClass = scopedClassMaker('gulu-menu');
const sc = scopedClass;

const Menu: React.FunctionComponent<Props> = props => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames(sc(''), className, {
    [sc('vertical')]: mode === 'vertical',
    [sc('horizontal')]: mode !== 'vertical',
  });
  const handleClick = (index: string) => {
    setActive(index);
    onSelect && onSelect(index);
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };
  // 判读哪些子元素不是MenuItem和SubMenu
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.warn('Menu 的子元素至少有一个不是 MenuItem 或者 SubMenu');
      }
    });
  };
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
};
