'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom'));
var classNames = _interopDefault(require('classnames'));

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css =
  '.gulu-dialog {\n  position: fixed;\n  background: white;\n  min-width: 20em;\n  border-radius: 4px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 11;\n  -webkit-animation: Spread 0.3s;\n          animation: Spread 0.3s;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n}\n.gulu-dialog-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n}\n.gulu-dialog-header {\n  font-size: 22px;\n  padding: 8px 16px;\n  border-bottom: 1px #cccccc solid;\n}\n.gulu-dialog-main {\n  min-height: 6em;\n}\n.gulu-dialog-footer {\n  border-top: 1px solid #cccccc;\n  padding: 8px 16px;\n  display: flex;\n  justify-content: flex-end;\n}\n.gulu-dialog-close {\n  position: absolute;\n  bottom: 100%;\n  right: 0;\n  background: white;\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 50%;\n  transform: translate(0%, 50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  cursor: pointer;\n}\n\n@-webkit-keyframes Spread {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n\n@keyframes Spread {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}';
styleInject(css);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/*
   Object.entries({a:1, c:2, b:3})
    out:0: (2) ["a", 1]
        1: (2) ["c", 2]
        2: (2) ["b", 3]
  * */
// name = {hasAside: true, active: false, x:true, y:false}
// ['hasAside', 'x']
// ['.gulu-layout-hasAside', '.gulu-layout-x']'
// .gulu-layout-hasAside .gulu-layout-x

var scopedClassMaker = function scopedClassMaker(prefix) {
  return function(name, options) {
    return Object.entries(
      name instanceof Object ? name : _defineProperty({}, name, name),
    )
      .filter(function(kv) {
        return kv[1] !== false;
      })
      .map(function(kv) {
        return kv[0];
      })
      .map(function(name) {
        return [prefix, name].filter(Boolean).join('-');
      })
      .concat((options && options.extra) || [])
      .join(' ');
  };
};

var css$1 =
  '.gulu-button {\n  position: relative;\n  box-sizing: border-box;\n  height: 32px;\n  font-size: 16px;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  color: #333;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  white-space: nowrap;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);\n  padding: 0 15px;\n}\n.gulu-button:hover, .gulu-button:focus {\n  color: #40a9ff;\n  border-color: #40a9ff;\n}\n.gulu-button:hover > .gulu-loadingIndicator, .gulu-button:focus > .gulu-loadingIndicator {\n  border-color: #40a9ff #40a9ff #40a9ff transparent;\n}\n.gulu-button:focus {\n  outline: none;\n}\n.gulu-button.gulu-theme-link {\n  line-height: 32px;\n  display: inline-block;\n  border-color: transparent;\n  box-shadow: none;\n  color: #40a9ff;\n  text-decoration: none;\n}\n.gulu-button.gulu-theme-link:hover, .gulu-button.gulu-theme-link:focus {\n  color: #73c0ff;\n}\n.gulu-button.gulu-theme-link.gulu-size-big {\n  font-size: 24px;\n  height: 48px;\n  padding: 0 16px;\n  line-height: 48px;\n}\n.gulu-button.gulu-theme-link.gulu-size-small {\n  font-size: 14px;\n  height: 24px;\n  padding: 0 7px;\n}\n.gulu-button.gulu-theme-text {\n  border-color: transparent;\n  box-shadow: none;\n  color: inherit;\n}\n.gulu-button.gulu-theme-text:hover, .gulu-button.gulu-theme-text:focus {\n  background: #f2f2f2;\n}\n.gulu-button.gulu-theme-text.gulu-size-big {\n  font-size: 24px;\n  height: 48px;\n  padding: 0 16px;\n}\n.gulu-button.gulu-theme-text.gulu-size-small {\n  font-size: 14px;\n  height: 24px;\n  padding: 0 7px;\n}\n.gulu-button.gulu-theme-button.gulu-size-big {\n  font-size: 24px;\n  height: 48px;\n  padding: 0 16px;\n}\n.gulu-button.gulu-theme-button.gulu-size-small {\n  font-size: 14px;\n  height: 24px;\n  padding: 0 7px;\n}\n.gulu-button.gulu-theme-button:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.gulu-button.gulu-theme-button.gulu-level-main {\n  background: #40a9ff;\n  color: white;\n  border-color: #40a9ff;\n}\n.gulu-button.gulu-theme-button.gulu-level-main > .gulu-loadingIndicator {\n  border-color: white white white transparent;\n}\n.gulu-button.gulu-theme-button.gulu-level-main:hover, .gulu-button.gulu-theme-button.gulu-level-main:focus {\n  background: #0d92ff;\n  border-color: #0d92ff;\n}\n.gulu-button.gulu-theme-button.gulu-level-danger {\n  background: #db4e2b;\n  border-color: #db4e2b;\n  color: white;\n}\n.gulu-button.gulu-theme-button.gulu-level-danger > .gulu-loadingIndicator {\n  border-color: white white white transparent;\n}\n.gulu-button.gulu-theme-button.gulu-level-danger:hover, .gulu-button.gulu-theme-button.gulu-level-danger:focus {\n  background: #b43c1f;\n  border-color: #b43c1f;\n}\n.gulu-button.gulu-theme-button.gulu-level-waring {\n  background: #f4af4f;\n  border-color: #f4af4f;\n  color: white;\n}\n.gulu-button.gulu-theme-button.gulu-level-waring > .gulu-loadingIndicator {\n  border-color: white white white transparent;\n}\n.gulu-button.gulu-theme-button.gulu-level-waring:hover, .gulu-button.gulu-theme-button.gulu-level-waring:focus {\n  background: #f1991f;\n  border-color: #f1991f;\n}\n.gulu-button.gulu-theme-button.gulu-level-success {\n  background: #6ec88e;\n  border-color: #6ec88e;\n  color: white;\n}\n.gulu-button.gulu-theme-button.gulu-level-success > .gulu-loadingIndicator {\n  border-color: white white white transparent;\n}\n.gulu-button.gulu-theme-button.gulu-level-success:hover, .gulu-button.gulu-theme-button.gulu-level-success:focus {\n  background: #49ba71;\n  border-color: #49ba71;\n}\n.gulu-button.gulu-theme-link.gulu-level-danger {\n  color: #db4e2b;\n}\n.gulu-button.gulu-theme-link.gulu-level-danger:hover, .gulu-button.gulu-theme-link.gulu-level-danger:focus {\n  color: #b43c1f;\n}\n.gulu-button.gulu-theme-link.gulu-level-waring {\n  color: #f4af4f;\n}\n.gulu-button.gulu-theme-link.gulu-level-waring:hover, .gulu-button.gulu-theme-link.gulu-level-waring:focus {\n  color: #f1991f;\n}\n.gulu-button.gulu-theme-link.gulu-level-success {\n  color: #6ec88e;\n}\n.gulu-button.gulu-theme-link.gulu-level-success:hover, .gulu-button.gulu-theme-link.gulu-level-success:focus {\n  color: #49ba71;\n}\n.gulu-button.gulu-theme-text:active::after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.gulu-button.gulu-theme-text.gulu-level-main {\n  color: #40a9ff;\n}\n.gulu-button.gulu-theme-text.gulu-level-main:hover, .gulu-button.gulu-theme-text.gulu-level-main:focus {\n  color: #0d92ff;\n}\n.gulu-button.gulu-theme-text.gulu-level-danger {\n  color: #db4e2b;\n}\n.gulu-button.gulu-theme-text.gulu-level-danger:hover, .gulu-button.gulu-theme-text.gulu-level-danger:focus {\n  color: #b43c1f;\n}\n.gulu-button.gulu-theme-text.gulu-level-waring {\n  color: #f4af4f;\n}\n.gulu-button.gulu-theme-text.gulu-level-waring:hover, .gulu-button.gulu-theme-text.gulu-level-waring:focus {\n  color: #f1991f;\n}\n.gulu-button.gulu-theme-text.gulu-level-success {\n  color: #6ec88e;\n}\n.gulu-button.gulu-theme-text.gulu-level-success:hover, .gulu-button.gulu-theme-text.gulu-level-success:focus {\n  color: #49ba71;\n}\n.gulu-button.gulu-theme-button[disabled] {\n  cursor: not-allowed;\n  color: gray;\n  pointer-events: none;\n}\n.gulu-button.gulu-theme-button[disabled]:hover {\n  border-color: gray;\n}\n.gulu-button.gulu-theme-text[disabled] {\n  cursor: not-allowed;\n  color: gray;\n  pointer-events: none;\n}\n.gulu-button.gulu-theme-link.disabled {\n  cursor: not-allowed;\n  color: gray;\n  pointer-events: none;\n}\n.gulu-button > .gulu-loadingIndicator {\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n  margin-right: 4px;\n  border-radius: 8px;\n  border-color: #333 #333 #333 transparent;\n  border-style: solid;\n  border-width: 2px;\n  -webkit-animation: gulu-spin 1s infinite linear;\n          animation: gulu-spin 1s infinite linear;\n}\n.gulu-button.gulu-theme-button, .gulu-button.gulu-theme-text {\n  overflow: hidden;\n}\n.gulu-button.gulu-theme-button:after, .gulu-button.gulu-theme-text:after {\n  content: "";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #666 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.3s, opacity 0.6s;\n}\n\n@-webkit-keyframes gulu-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes gulu-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}';
styleInject(css$1);

var scopedClass = scopedClassMaker('gulu');
var sc = scopedClass;

var Button = function Button(props) {
  var _classNames;

  var theme = props.theme,
    level = props.level,
    disabled = props.disabled,
    size = props.size,
    children = props.children,
    href = props.href,
    loading = props.loading,
    className = props.className,
    restProps = _objectWithoutProperties(props, [
      'theme',
      'level',
      'disabled',
      'size',
      'children',
      'href',
      'loading',
      'className',
    ]);

  var classes = classNames(
    sc('button'),
    className,
    ((_classNames = {}),
    _defineProperty(_classNames, sc('theme-'.concat(theme)), theme),
    _defineProperty(_classNames, sc('size-'.concat(size)), size),
    _defineProperty(_classNames, sc('level-'.concat(level)), level),
    _defineProperty(_classNames, 'disabled', theme === 'link' && disabled),
    _classNames),
  );

  if (theme === 'link' && href) {
    return React__default.createElement(
      'a',
      Object.assign(
        {
          href: href,
          className: classes,
        },
        restProps,
      ),
      React__default.createElement('span', null, children),
    );
  } else {
    return React__default.createElement(
      'button',
      Object.assign(
        {
          className: classes,
          disabled: disabled,
        },
        restProps,
      ),
      loading &&
        React__default.createElement('span', {
          className: 'gulu-loadingIndicator',
        }),
      React__default.createElement('span', null, children),
    );
  }
};

Button.defaultProps = {
  disabled: false,
  theme: 'button',
  loading: false,
};

var bodyPaddingRightGlobal = document.body.style.paddingRight;
var bodyOverflowGlobal = document.body.style.overflow;
var scopedClass$1 = scopedClassMaker('gulu-dialog');
var sc$1 = scopedClass$1;

var getScrollBarWidth = function getScrollBarWidth() {
  var outer = document.createElement('div');
  outer.style.width = '100px';
  outer.style.visibility = 'hidden';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth;
  outer.parentNode && outer.parentNode.removeChild(outer);
  return widthNoScroll - widthWithScroll;
};

var hasScrollbar = function hasScrollbar() {
  return (
    document.body.scrollHeight >
    (window.innerHeight || document.documentElement.clientHeight)
  );
};

var Dialog = function Dialog(props) {
  var visible = props.visible,
    children = props.children,
    buttons = props.buttons,
    onClose = props.onClose,
    clickMaskClose = props.clickMaskClose,
    enableMask = props.enableMask;

  var onClickClose = function onClickClose(e) {
    onClose(e);
  };

  var onClickMaskClose = function onClickMaskClose(e) {
    clickMaskClose && onClose(e);
  }; // 挂载的时候获取 body 的padding和overflow

  React.useEffect(function() {
    var close = function close(e) {
      if (e.key === 'Escape') {
        // @ts-ignore
        onClose(e);
      }
    }; // @ts-ignore

    document.addEventListener('keydown', close);
    return function() {
      // @ts-ignore
      document.removeEventListener('keydown', close);
      console.log('移除了');
    };
  }, []); // 隐藏滚动条

  React.useEffect(
    function() {
      if (visible && hasScrollbar()) {
        document.body.style.paddingRight = getScrollBarWidth() + 'px';
        document.body.style.overflow = 'hidden';
        console.log('执行了');
      } else {
        document.body.style.paddingRight = bodyPaddingRightGlobal;
        document.body.style.overflow = bodyOverflowGlobal;
      }
    },
    [visible],
  );
  var dialog = visible
    ? React__default.createElement(
        React.Fragment,
        null,
        enableMask &&
          React__default.createElement('div', {
            className: sc$1('mask'),
            onClick: onClickMaskClose,
          }),
        React__default.createElement(
          'div',
          {
            className: sc$1(''),
          },
          React__default.createElement(
            'div',
            {
              className: sc$1('close'),
              onClick: onClickClose,
            },
            React__default.createElement('span', null),
          ),
          React__default.createElement(
            'header',
            {
              className: sc$1('header'),
            },
            '\u63D0\u793A',
          ),
          React__default.createElement(
            'main',
            {
              className: sc$1('main'),
            },
            children,
          ),
          buttons &&
            buttons.length > 0 &&
            React__default.createElement(
              'footer',
              {
                className: sc$1('footer'),
              },
              buttons &&
                buttons.map(function(button, index) {
                  return (
                    // 会损耗一些性能，渲染就会进行复制， 可以使用memo解决
                    React__default.cloneElement(button, {
                      key: index,
                    })
                  );
                }),
            ),
        ),
      )
    : null; // 必须返回一个null或者组件children有可能是组件也可能不是组件

  return ReactDOM.createPortal(dialog, document.body);
};

Dialog.defaultProps = {
  clickMaskClose: false,
  enableMask: true,
};

var modal = function modal(content, buttons, afterClose) {
  var _onClose = function onClose() {
    document.body.style.paddingRight = bodyPaddingRightGlobal;
    document.body.style.overflow = bodyOverflowGlobal; // 把 component 复制一份儿 visible变为false，重新新渲染

    ReactDOM.render(
      React__default.cloneElement(component, {
        visible: false,
      }),
      div,
    ); // 把div从reactDom卸载

    ReactDOM.unmountComponentAtNode(div); // 删除div

    div.remove();
  };

  var component = React__default.createElement(
    Dialog,
    {
      visible: true,
      buttons: buttons,
      onClose: function onClose() {
        _onClose();

        afterClose && afterClose();
      },
    },
    content,
  );
  var div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return _onClose;
};

var alert = function alert(content) {
  var button = React__default.createElement(
    Button,
    {
      onClick: function onClick() {
        return close();
      },
    },
    'Ok',
  );
  var close = modal(content, [button]);
};

var confirm = function confirm(content, yes, no) {
  var onYes = function onYes() {
    close();
    yes && yes();
  };

  var onNo = function onNo() {
    close();
    no && no();
  };

  var buttons = [
    React__default.createElement(
      Button,
      {
        onClick: onYes,
      },
      'yes',
    ),
    React__default.createElement(
      Button,
      {
        onClick: onNo,
      },
      'no',
    ),
  ];
  var close = modal(content, buttons, no);
}; // ReactNode 可以是标签可以是字符串 包括ReactFragment ReactElement

exports.Button = Button;
exports.Dialog = Dialog;
exports.alert = alert;
exports.confirm = confirm;
exports.modal = modal;
