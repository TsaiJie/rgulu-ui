import React from 'react';
import classNames from 'classnames';
import { scopedClassMaker } from '@/helper/classes';
type MenuMode = 'horizontal' | 'vertical';
interface Props {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}
const scopedClass = scopedClassMaker('gulu-menu');
const sc = scopedClass;

const Menu: React.FunctionComponent<Props> = props => {
  const { className, mode, style, children, defaultIndex } = props;
  const classes = classNames(sc(''), className, {
    [sc('vertical')]: mode === 'vertical',
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

export default Menu;

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};
