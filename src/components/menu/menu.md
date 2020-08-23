## Menu

```tsx
import React from 'react';
import { Menu, MenuItem } from 'rgulu-ui';

export default () => (
  <div>
    <Menu
      defaultIndex={2}
      onSelect={index => {
        console.log(index);
      }}
    >
      <MenuItem>cool link</MenuItem>
      <MenuItem disabled>cool link1</MenuItem>
      <MenuItem>cool link2</MenuItem>
    </Menu>
  </div>
);
```

```tsx
import React from 'react';
import { Menu, MenuItem } from 'rgulu-ui';

export default () => (
  <div>
    <Menu
      mode={'vertical'}
      defaultIndex={2}
      onSelect={index => {
        console.log(index);
      }}
    >
      <MenuItem index={0}>cool link</MenuItem>
      <MenuItem index={1} disabled>
        cool link1
      </MenuItem>
      <MenuItem index={2}>cool link2</MenuItem>
    </Menu>
  </div>
);
```
