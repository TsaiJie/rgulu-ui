import * as React from 'react';
import {
  HTMLAttributes,
  MouseEventHandler,
  TouchEventHandler,
  UIEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { scopedClassMaker } from '@/helper/classes';
import './scroll.scss';
import { scrollbarWidth } from '@/components/scroll/scrollbarWidth';
import { CSSTransition } from 'react-transition-group';

const sc = scopedClassMaker('gulu-scroll');

interface Props extends HTMLAttributes<HTMLDivElement> {
  onPull?: () => void;
}

const Scroll: React.FunctionComponent<Props> = props => {
  const { children, ...rest } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const [barVisible, setBarVisible] = useState(false);
  const viewHeightRef = useRef(0);
  const draggingRef = useRef(false);
  const firstYRef = useRef(0);
  const firstBarTopRef = useRef(0);
  const timeIdRef = useRef<null | number>(null);
  const [translateY, _setTranslateY] = useState(0);
  const lastYPosRef = useRef(0);
  const moveCountRef = useRef(0);
  const onPullingRef = useRef(false);
  const setBarTop = (value: number) => {
    const scrollHeight = containerRef.current!.scrollHeight;
    const maxBarTop =
      ((scrollHeight - viewHeightRef.current) * viewHeightRef.current) /
      scrollHeight;
    if (value < 0) return;
    if (value > maxBarTop) return;
    _setBarTop(value);
  };
  const setTranslateY = (y: number) => {
    if (y < 0) {
      y = 0;
    } else if (y > 150) {
      y = 150;
    }
    _setTranslateY(y);
  };
  const onScroll: UIEventHandler = e => {
    //  x1/h1 = x/h    x1 = x/h * h1  x1= scrollTop要求的  x = scrollTop h1 =  viewHeightRef h =  scrollHeight
    //  x = scrollTop/scrollHeight * viewHeightRef
    // 整个区域滚动的高度
    const scrollHeight = containerRef.current!.scrollHeight;
    // 可视范围的高度
    const scrollTop = containerRef.current!.scrollTop;
    setBarTop((scrollTop * viewHeightRef.current) / scrollHeight);
    setBarVisible(true);
    if (timeIdRef.current !== null) {
      window.clearTimeout(timeIdRef.current);
    }
    if (!draggingRef.current) {
      timeIdRef.current = window.setTimeout(() => {
        setBarVisible(false);
      }, 500);
    }
  };
  //对比第一次和第二次鼠标移动的位置
  const onMouseDownBar: MouseEventHandler = e => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
    firstBarTopRef.current = barTop;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - firstYRef.current;
      const newBarTop = delta + firstBarTopRef.current;
      setBarTop(newBarTop);
      const scrollHeight = containerRef.current!.scrollHeight;
      containerRef.current!.scrollTop =
        (newBarTop * scrollHeight) / viewHeightRef.current;
    }
  };
  const onMouseUpBar = (e: MouseEvent) => {
    draggingRef.current = false;
  };
  const onSelect = (e: Event) => {
    if (draggingRef.current) {
      e.preventDefault();
    }
  };
  const onMouseOverTrack: MouseEventHandler = e => {
    setBarVisible(true);
  };
  const onMouseOutTrack: MouseEventHandler = e => {
    if (timeIdRef.current !== null) {
      window.clearTimeout(timeIdRef.current);
    }
    timeIdRef.current = window.setTimeout(() => {
      setBarVisible(false);
    }, 500);
  };
  const onTouchStart: TouchEventHandler = e => {
    const scrollTop = containerRef.current!.scrollTop;
    if (scrollTop !== 0) return;
    onPullingRef.current = true;
    moveCountRef.current = 0;
    lastYPosRef.current = e.touches[0].clientY;
  };
  const onTouchMove: TouchEventHandler = e => {
    const deltaY = e.touches[0].clientY - lastYPosRef.current;
    moveCountRef.current += 1;
    if (moveCountRef.current === 1 && deltaY < 0) {
      //如果不是下拉置为 false
      onPullingRef.current = false;
      return;
    }
    if (!onPullingRef.current) return;
    setTranslateY(translateY + deltaY);
    lastYPosRef.current = e.touches[0].clientY;
  };
  const onTouchEnd: TouchEventHandler = e => {
    if (onPullingRef.current) {
      setTranslateY(0);
      props.onPull && props.onPull();
      onPullingRef.current = false;
    }
  };
  useEffect(() => {
    // mounted 挂载的时候计算滚动条的高度
    // 整个区域滚动的高度
    const scrollHeight = containerRef.current!.scrollHeight;
    // 可视范围的高度
    viewHeightRef.current = containerRef.current!.getBoundingClientRect().height;
    // x/y = x1/y1的思想
    setBarHeight(
      (viewHeightRef.current * viewHeightRef.current) / scrollHeight,
    );

    document.addEventListener('mouseup', onMouseUpBar);
    document.addEventListener('mousemove', onMouseMoveBar);
    document.addEventListener('selectstart', onSelect);
    return () => {
      document.removeEventListener('mousemove', onMouseMoveBar);
      document.removeEventListener('mouseup', onMouseUpBar);
      document.removeEventListener('selectstart', onSelect);
    };
  }, []);

  return (
    <div className={sc('')} {...rest}>
      <div
        className={sc('inner')}
        style={{
          right: -scrollbarWidth(),
          transform: `translateY(${translateY}px)`,
        }}
        onScroll={onScroll}
        ref={containerRef}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>
      <div
        className={sc('track')}
        onMouseOver={onMouseOverTrack}
        onMouseOut={onMouseOutTrack}
      >
        <CSSTransition
          in={barVisible}
          timeout={300}
          unmountOnExit={true}
          classNames={'fade'}
        >
          <div
            className={sc('bar')}
            style={{
              height: barHeight,
              transform: `translateY(${barTop}px)`,
            }}
            onMouseDown={onMouseDownBar}
          />
        </CSSTransition>
      </div>
      <div className={sc('onPulling')} style={{ height: translateY }}>
        {translateY === 150 ? (
          <span className={sc('onPulling-text')}>释放手指即可更新</span>
        ) : (
          <span className={sc('onPulling-icon')}>↓</span>
        )}
      </div>
    </div>
  );
};
export default Scroll;
