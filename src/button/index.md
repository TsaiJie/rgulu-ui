
## Button

### 默认三种类型的按钮:

```tsx
import React from 'react';
import { Button } from 'rgulu-ui';

export default () => (
    <div>
       <Button onClick={()=>{console.log('111');}}>默认按钮</Button>
       <Button theme="link" href="https://www.baidu.com">link</Button>
       <Button theme="text">text</Button>
     </div>
);
```
### 大按钮小按钮:
```tsx
import React from 'react';
import { Button } from 'rgulu-ui';

export default () => (
    <div>
      <Button size="big">默认按钮</Button>
      <Button size="big" theme="link" href="https://www.baidu.com">link</Button>
      <Button size="big" theme="text">text</Button>
      <br/>
      <Button size="small">默认按钮</Button>
      <Button size="small" theme="link" href="https://www.baidu.com">link</Button>
      <Button size="small" theme="text">text</Button>
    </div>
);
```

### 不同level的按钮:
```tsx
import React from 'react';
import { Button } from 'rgulu-ui';

export default () => (
    <div>
      <Button level={'main'}>main</Button>
      <Button level={'danger'}>danger</Button>
      <Button level={'waring'}>waring</Button>
      <Button level={'success'}>success</Button>
      <Button>默认</Button>
      <br/>
      <Button level={'main'} theme="link" href="https://www.baidu.com">main</Button>
      <Button level={'danger'} theme="link" href="https://www.baidu.com">danger</Button>
      <Button level={'waring'} theme="link" href="https://www.baidu.com">waring</Button>
      <Button level={'success'} theme="link" href="https://www.baidu.com">success</Button>
      <Button theme="link" href="https://www.baidu.com">默认</Button>
      <br/>
      <Button theme="text" level={'danger'}>text</Button>
      <Button theme="text" level={'main'}>text</Button>
      <Button theme="text" level={'waring'}>waring</Button>
      <Button theme="text" level={'success'}>success</Button>
      <Button theme="text">text</Button>
    </div>
);
```
### disabled按钮
```tsx
import React from 'react';
import { Button } from 'rgulu-ui';

export default () => (
    <div>
      <Button disabled={true}>main</Button>
      <Button disabled={true} theme="link" href="https://www.baidu.com">danger</Button>
    </div>
);
```
### loading按钮
```tsx
import React from 'react';
import { Button } from 'rgulu-ui';

export default () => (
    <div>
      <Button loading={true}>loading</Button>
      <Button loading={true} level={'main'}>main</Button>
      <Button loading={true} level={'danger'}>danger</Button>
      <Button loading={true} level={'waring'}>waring</Button>
      <Button loading={true} level={'success'}>success</Button>
    </div>
);
```

