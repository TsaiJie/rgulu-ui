## Transition

基于 CSSTransition 做的动画封装

### zoom-in-left

```tsx
import React, { useState } from 'react';
import { Button, Transition } from 'rgulu-ui';

export default () => {
  const [visiable, setVisiable] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisiable(!visiable)}>点击显示文本</Button>
      <Transition
        in={visiable}
        timeout={300}
        animation={'zoom-in-left'}
        // 如果您的内部元素使用了transition，最好开启wrapper属性 防止动画失效
        wrapper
      >
        <div>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <Button>按钮</Button>
        </div>
      </Transition>
    </div>
  );
};
```

### zoom-in-right

```tsx
import React, { useState } from 'react';
import { Button, Transition } from 'rgulu-ui';

export default () => {
  const [visiable, setVisiable] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisiable(!visiable)}>点击显示文本</Button>
      <Transition
        in={visiable}
        timeout={300}
        animation={'zoom-in-right'}
        // 如果您的内部元素使用了transition，最好开启wrapper属性 防止动画失效
        wrapper
      >
        <div>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <Button>按钮</Button>
        </div>
      </Transition>
    </div>
  );
};
```

### zoom-in-top

```tsx
import React, { useState } from 'react';
import { Button, Transition } from 'rgulu-ui';

export default () => {
  const [visiable, setVisiable] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisiable(!visiable)}>点击显示文本</Button>
      <Transition
        in={visiable}
        timeout={300}
        animation={'zoom-in-top'}
        // 如果您的内部元素使用了transition，最好开启wrapper属性 防止动画失效
        wrapper
      >
        <div>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <Button>按钮</Button>
        </div>
      </Transition>
    </div>
  );
};
```

### zoom-in-bottom

```tsx
import React, { useState } from 'react';
import { Button, Transition } from 'rgulu-ui';

export default () => {
  const [visiable, setVisiable] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisiable(!visiable)}>点击显示文本</Button>
      <Transition
        in={visiable}
        timeout={300}
        animation={'zoom-in-bottom'}
        // 如果您的内部元素使用了transition，最好开启wrapper属性 防止动画失效
        wrapper
      >
        <div>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <p>一些文本内容...</p>
          <Button>按钮</Button>
        </div>
      </Transition>
    </div>
  );
};
```
