import * as React from 'react';
import {
  HTMLAttributes,
  UIEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { scopedClassMaker } from '@/helper/classes';
import './scroll.scss';
import { scrollbarWidth } from '@/components/scroll/scrollbarWidth';

const sc = scopedClassMaker('gulu-scroll');

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<Props> = props => {
  const { children, ...rest } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [barHeight, setBarHeight] = useState(0);
  const onScroll: UIEventHandler = e => {};
  useEffect(() => {
    // mounted 挂载的时候计算滚动条的高度
    // 整个区域滚动的高度
    const scrollHeight = containerRef.current!.scrollHeight;
    // 可视范围的高度
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    // x/y = x1/y1的思想
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
  }, []);

  return (
    <div className={sc('')} {...rest}>
      <div
        className={sc('inner')}
        style={{ right: -scrollbarWidth() }}
        onScroll={onScroll}
        ref={containerRef}
      >
        {children}
      </div>
      <div className={sc('track')}>
        <div className={sc('bar')} style={{ height: barHeight }} />
      </div>
    </div>
  );
};
export default Scroll;
