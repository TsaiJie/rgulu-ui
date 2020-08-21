
## dialog

Demo:

```tsx
import React, { useState} from 'react';
import { Dialog, Button } from 'rgulu-ui';
const [x, setX] = useState(false);
export default () => (
<div>
      <h2>example1</h2>
      <Button onClick={() => setX(!x)}>click</Button>
      <Dialog visible={x} buttons={
        [
          <Button onClick={() => setX(false)}>1</Button>,
          <Button onClick={() => setX(false)}>2</Button>
        ]

      } onClose={() => {setX(false);}}>
        <div>hi</div>
      </Dialog>
    </div>);
```
