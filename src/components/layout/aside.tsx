import React from 'react';
import { scopedClassMaker } from '@/helper/classes';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const sc = scopedClassMaker('gulu-layout');
const Aside: React.FunctionComponent<Props> = props => {
  const { className, children, ...rest } = props;
  return (
    <>
      <div className={sc('aside', { extra: className })} {...rest}>
        {children}
      </div>
    </>
  );
};
export default Aside;
