## Tree

```tsx
import React, { useState } from 'react';
import { Tree } from 'rgulu-ui';

export default () => {
  const [array, setArray] = useState([
    {
      text: '一',
      value: '1',
      children: [
        { text: '一点一', value: '1.1' },
        { text: '一点二', value: '1.2' },
      ],
    },
    {
      text: '二',
      value: '2',
      children: [
        { text: '二点一', value: '2.1' },
        { text: '二点二', value: '2.2' },
      ],
    },
  ]);
  return (
    <div>
      <Tree sourceData={array} />
    </div>
  );
};
```
