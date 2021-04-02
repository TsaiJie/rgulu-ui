import * as React from 'react';
import { HTMLAttributes } from 'react';
import { scopedClassMaker } from '@/helper/classes';
import './scroll.scss';

const sc = scopedClassMaker('gulu-scroll');

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<Props> = props => {
  const { children, ...rest } = props;
  return (
    <div className={sc('')} {...rest}>
      <div className={sc('inner')}>{children}</div>
    </div>
  );
};
export default Scroll;
