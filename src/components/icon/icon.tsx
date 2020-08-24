import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// 引入所有图标
import { fas } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { scopedClassMaker } from '@/helper/classes';
library.add(fas);
type ThemeProps = 'main' | 'danger' | 'success' | 'warning';

interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const sc = scopedClassMaker('gulu-icon');
const Icon: React.FunctionComponent<IconProps> = props => {
  const { className, theme, ...restProps } = props;
  const classes = classNames('', className, {
    [sc(`${theme}`)]: theme,
  });
  return <FontAwesomeIcon className={classes} {...restProps} />;
};
export default Icon;
