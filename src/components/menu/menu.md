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
      <MenuItem>cool link</MenuItem>
      <MenuItem disabled>cool link1</MenuItem>
      <MenuItem>cool link2</MenuItem>
    </Menu>
  </div>
);
```

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from 'rgulu-ui';

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
      <SubMenu title={'dropdown'}>
        <MenuItem>dropdown1</MenuItem>
        <MenuItem>dropdown2</MenuItem>
      </SubMenu>
      <MenuItem>cool link2</MenuItem>
    </Menu>
  </div>
);
```

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from 'rgulu-ui';

export default () => (
  <div>
    <Menu
      mode={'vertical'}
      defaultIndex={2}
      onSelect={index => {
        console.log(index);
      }}
    >
      <MenuItem>cool link</MenuItem>
      <MenuItem disabled>cool link1</MenuItem>
      <SubMenu title={'dropdown'}>
        <MenuItem>dropdown1</MenuItem>
        <MenuItem>dropdown2</MenuItem>
      </SubMenu>
      <MenuItem>cool link2</MenuItem>
    </Menu>
  </div>
);
```
