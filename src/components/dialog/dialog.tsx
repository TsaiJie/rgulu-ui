import React, { Fragment, ReactElement, ReactNode, useEffect } from 'react';
import './dialog.scss';

import ReactDOM from 'react-dom';
import { scopedClassMaker } from '@/helper/classes';
import { Button } from '@/index';

interface Props {
  visible: boolean;
  buttons?: ReactElement[];
  onClose: React.MouseEventHandler;
  clickMaskClose?: boolean;
  enableMask?: boolean;
}
let bodyPaddingRightGlobal = document.body.style.paddingRight;
let bodyOverflowGlobal = document.body.style.overflow;

const scopedClass = scopedClassMaker('gulu-dialog');
const sc = scopedClass;
const getScrollBarWidth = () => {
  const outer = document.createElement('div');
  outer.style.width = '100px';
  outer.style.visibility = 'hidden';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  outer.parentNode && outer.parentNode.removeChild(outer);
  return widthNoScroll - widthWithScroll;
};
const hasScrollbar = () => {
  return (
    document.body.scrollHeight >
    (window.innerHeight || document.documentElement.clientHeight)
  );
};

const Dialog: React.FunctionComponent<Props> = props => {
  const {
    visible,
    children,
    buttons,
    onClose,
    clickMaskClose,
    enableMask,
  } = props;
  const onClickClose: React.MouseEventHandler = e => {
    onClose(e);
  };
  const onClickMaskClose: React.MouseEventHandler = e => {
    clickMaskClose && onClose(e);
  };

  // 挂载的时候获取 body 的padding和overflow
  useEffect(() => {
    const close: React.KeyboardEventHandler = e => {
      if (e.key === 'Escape') {
        // @ts-ignore
        onClose(e);
      }
    };
    // @ts-ignore
    document.addEventListener('keydown', close);
    return () => {
      // @ts-ignore
      document.removeEventListener('keydown', close);
      console.log('移除了');
    };
  }, []);
  // 隐藏滚动条
  useEffect(() => {
    if (visible && hasScrollbar()) {
      document.body.style.paddingRight = getScrollBarWidth() + 'px';
      document.body.style.overflow = 'hidden';
      console.log('执行了');
    } else {
      document.body.style.paddingRight = bodyPaddingRightGlobal;
      document.body.style.overflow = bodyOverflowGlobal;
    }
  }, [visible]);

  const dialog = visible ? (
    <Fragment>
      {enableMask && <div className={sc('mask')} onClick={onClickMaskClose} />}
      <div className={sc('')}>
        <div className={sc('close')} onClick={onClickClose}>
          <span />
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{children}</main>
        {buttons && buttons.length > 0 && (
          <footer className={sc('footer')}>
            {buttons &&
              buttons.map((button, index) =>
                // 会损耗一些性能，渲染就会进行复制， 可以使用memo解决
                React.cloneElement(button, { key: index }),
              )}
          </footer>
        )}
      </div>
    </Fragment>
  ) : null;

  // 必须返回一个null或者组件children有可能是组件也可能不是组件
  return ReactDOM.createPortal(dialog, document.body);
};
Dialog.defaultProps = {
  clickMaskClose: false,
  enableMask: true,
};
const modal = (
  content: ReactNode,
  buttons?: ReactElement[],
  afterClose?: () => void,
) => {
  const onClose = () => {
    document.body.style.paddingRight = bodyPaddingRightGlobal;
    document.body.style.overflow = bodyOverflowGlobal;
    // 把 component 复制一份儿 visible变为false，重新新渲染
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    // 把div从reactDom卸载
    ReactDOM.unmountComponentAtNode(div);
    // 删除div
    div.remove();
  };
  const component = (
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        onClose();
        afterClose && afterClose();
      }}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};

const alert = (content: string) => {
  const button = <Button onClick={() => close()}>Ok</Button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <Button onClick={onNo}>取消</Button>,
    <Button level={'main'} onClick={onYes}>
      确定
    </Button>,
  ];
  const close = modal(content, buttons, no);
};
// ReactNode 可以是标签可以是字符串 包括ReactFragment ReactElement
// ReactElement 只能是字符串
// ReactFragment 是多个 ReactNode

export { alert, confirm, modal };

// @ts-ignore
export default Dialog;
