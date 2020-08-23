import React, { ReactElement } from 'react';
import './layout.scss';
import Aside from './aside';
import { scopedClassMaker } from '@/helper/classes';

const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[];
}

const Layout: React.FunctionComponent<Props> = props => {
  const { className, children, ...rest } = props;
  // let hashAside = false;
  // // 判断子元素中 是否有Aside
  // React.Children.map(children, node=>{
  //   if('type' in node && node.type === Aside){
  //     hashAside = true;
  //   }
  // });
  const childrenAsArray = children as ReactElement[];
  const hasAside =
    'length' in childrenAsArray &&
    childrenAsArray.reduce((result, node) => {
      return result || node.type === Aside;
    }, false);
  return (
    <div className={sc({ '': true, hasAside }, { extra: className })} {...rest}>
      {children}
    </div>
  );
};
export default Layout;
