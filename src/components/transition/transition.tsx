import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-right'
  | 'zoom-in-bottom';

type TransitionProps = {
  animation?: AnimationName;
  wrapper?: boolean;
} & CSSTransitionProps;

const Transition: React.FunctionComponent<TransitionProps> = props => {
  const { children, classNames, animation, wrapper, ...restProps } = props;
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};
export default Transition;

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};
