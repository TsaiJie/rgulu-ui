## Dialog

### 1 默认用法

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'rgulu-ui';

export default () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <Button onClick={() => setX(!x)}>click</Button>
      <Dialog
        //点击遮罩或者取消按钮，或者键盘esc按键时的回调
        onCancel={() => alert('我是回掉函数')}
        visible={x}
        buttons={[
          <Button onClick={() => setX(false)}>取消</Button>,
          <Button level={'main'} onClick={() => setX(false)}>
            确定
          </Button>,
        ]}
        onClose={() => {
          setX(false);
        }}
      >
        <div>hi</div>
      </Dialog>
    </div>
  );
};
```

### 2 自定义 title

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'rgulu-ui';

export default () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <Button onClick={() => setX(!x)}>click</Button>
      <Dialog
        title={
          <h3 style={{ padding: 0, margin: 0, color: 'pink' }}>
            我是自定义title
          </h3>
        }
        visible={x}
        buttons={[
          <Button onClick={() => setX(false)}>取消</Button>,
          <Button level={'main'} onClick={() => setX(false)}>
            确定
          </Button>,
        ]}
        onClose={() => {
          setX(false);
        }}
      >
        <div>hi</div>
      </Dialog>
    </div>
  );
};
```

### 3 可以点击遮罩层进行关闭

```tsx
import React, { useState } from 'react';
import { Dialog, Button } from 'rgulu-ui';

export default () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <Button onClick={() => setX(!x)}>click</Button>
      <Dialog
        visible={x}
        buttons={[
          <Button onClick={() => setX(false)}>取消</Button>,
          <Button level={'main'} onClick={() => setX(false)}>
            确定
          </Button>,
        ]}
        onClose={() => {
          setX(false);
        }}
        clickMaskClose={true}
      >
        <div>hi</div>
      </Dialog>
    </div>
  );
};
```

### 4 函数用法---alert

```tsx
import React, { useState } from 'react';
export default () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <Button onClick={() => alert('1')}>alert</Button>
    </div>
  );
};
```

### 5 函数用法---confirm

```tsx
import React, { useState } from 'react';
import { Dialog, confirm, Button } from 'rgulu-ui';

export default () => {
  return (
    <div>
      <Button
        onClick={() =>
          confirm(
            '我是文本',
            () => {
              console.log('你点击了yes');
            },
            () => {
              console.log('你点击了no');
            },
          )
        }
      >
        confirm
      </Button>
    </div>
  );
};
```

### 6 函数用法---modal

```tsx
import React, { useState } from 'react';
import { Dialog, modal, Button } from 'rgulu-ui';
const openModal = () => {
  // 函数是延迟执行的
  // 函数操作组件内部返回的api 和 闭包很像
  const close = modal(
    <h1>
      你好{' '}
      <Button
        onClick={() => {
          close();
        }}
      >
        close
      </Button>
    </h1>,
  );
};

export default () => (
  <div>
    <Button onClick={openModal}>modal</Button>
  </div>
);
```
