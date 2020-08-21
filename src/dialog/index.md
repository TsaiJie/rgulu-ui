
## dialog

Demo:

```tsx
import React, { useState} from 'react';
import { Dialog } from 'rgulu-ui';
const [x, setX] = useState(false);
export default () => (
<div>
      <h2>example1</h2>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog visible={x} buttons={
        [
          <button onClick={() => setX(false)}>1</button>,
          <button onClick={() => setX(false)}>2</button>
        ]

      } onClose={() => {setX(false);}}>
        <div>hi</div>
      </Dialog>
    </div>);
```
