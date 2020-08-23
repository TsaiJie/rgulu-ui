import React, { createContext, useState } from 'react';
import classNames from 'classnames';
import { scopedClassMaker } from '@/helper/classes';
import { MenuItemProps } from './menuItem';
import './menu.scss';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: number) => void;

interface Props {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}
// 需要传递的Context类型
interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}
// 创建context
export const MenuContext = createContext<IMenuContext>({ index: 0 });
const scopedClass = scopedClassMaker('gulu-menu');
const sc = scopedClass;

const Menu: React.FunctionComponent<Props> = props => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames(sc(''), className, {
    [sc('vertical')]: mode === 'vertical',
  });
  const handleClick = (index: number) => {
    setActive(index);
    onSelect && onSelect(index);
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };
  // 判读哪些子元素不是MenuItem
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index,
        });
      } else {
        console.warn('Menu 的子元素有一个不是 MenuItem');
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
  defaultIndex: 0,
  mode: 'horizontal',
};
