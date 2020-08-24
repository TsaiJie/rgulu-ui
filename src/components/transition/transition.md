## Transition

### zoom-in-left

```tsx
import React, { useState } from 'react';
import { Button, Transition } from 'rgulu-ui';

export default () => {
  const [visiable, setVisiable] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisiable(!visiable)}>切换</Button>
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
