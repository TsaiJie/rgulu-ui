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
  const [barTop, setBarTop] = useState(0);
  const viewHeight = useRef<number>(0);
  const onScroll: UIEventHandler = e => {
    //  x1/h1 = x/h    x1 = x/h * h1  x1= scrollTop要求的  x = scrollTop h1 =  viewHeight h =  scrollHeight
    //  x = scrollTop/scrollHeight * viewHeight
    // 整个区域滚动的高度
    const scrollHeight = containerRef.current!.scrollHeight;
    // 可视范围的高度
    const scrollTop = containerRef.current!.scrollTop;
    setBarTop((scrollTop * viewHeight.current) / scrollHeight);
  };
  useEffect(() => {
    // mounted 挂载的时候计算滚动条的高度
    // 整个区域滚动的高度
    const scrollHeight = containerRef.current!.scrollHeight;
    // 可视范围的高度
    viewHeight.current = containerRef.current!.getBoundingClientRect().height;
    // x/y = x1/y1的思想
    setBarHeight((viewHeight.current * viewHeight.current) / scrollHeight);
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
        <div
          className={sc('bar')}
          style={{
            height: barHeight,
            //有可能bar会超出scroll的区域
            transform: `translateY(${
              barTop + barHeight >= viewHeight.current
                ? viewHeight.current - barHeight
                : barTop
            }px)`,
          }}
        />
      </div>
    </div>
  );
};
export default Scroll;
