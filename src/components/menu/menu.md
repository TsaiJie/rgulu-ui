## Menu

### 横向模式

```tsx
import React from 'react';
import { Menu, MenuItem } from 'rgulu-ui';

export default () => (
  <div>
    <Menu
      defaultIndex={'2'}
      onSelect={index => {
        console.log(index);
      }}
    >
      <MenuItem>item</MenuItem>
      <MenuItem>item 1</MenuItem>
      <MenuItem>item 2</MenuItem>
    </Menu>
  </div>
);
```

### 纵向模式

```tsx
import React from 'react';
import { Menu, MenuItem } from 'rgulu-ui';

export default () => (
  <div>
    <Menu
      mode={'vertical'}
      defaultIndex={'2'}
      onSelect={index => {
        console.log(index);
      }}
    >
      <MenuItem>item</MenuItem>
      <MenuItem>item 1</MenuItem>
      <MenuItem>item 2</MenuItem>
    </Menu>
  </div>
);
```

### 支持 disabled

```tsx
import React from 'react';
import { Menu, MenuItem } from 'rgulu-ui';

export default () => (
  <div>
    <Menu
      defaultIndex={'2'}
      onSelect={index => {
        console.log(index);
      }}
    >
      <MenuItem>item</MenuItem>
      <MenuItem disabled>item 1</MenuItem>
      <MenuItem>item 2</MenuItem>
    </Menu>
  </div>
);
```

### 横向模式下拉子菜单

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from 'rgulu-ui';

export default () => (
  <div>
    <Menu
      defaultIndex={'2'}
      onSelect={index => {
        console.log(index);
      }}
    >
      <MenuItem>item 1</MenuItem>
      <MenuItem>item 2</MenuItem>
      <SubMenu title={'dropdown'}>
        <MenuItem>dropdown item1</MenuItem>
        <MenuItem>dropdown item2</MenuItem>
      </SubMenu>
      <MenuItem>item3</MenuItem>
    </Menu>
  </div>
);
```

### 纵向模式下拉子菜单

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from 'rgulu-ui';

export default () => (
  <div>
    <Menu
      mode={'vertical'}
      defaultIndex={'2'}
      onSelect={index => {
        console.log(index);
      }}
    >
      <MenuItem>item</MenuItem>
      <MenuItem disabled>cool link1</MenuItem>
      <SubMenu title={'dropdown'}>
        <MenuItem>dropdown item1</MenuItem>
        <MenuItem>dropdown item2</MenuItem>
      </SubMenu>
      <MenuItem>item2</MenuItem>
    </Menu>
  </div>
);
```

### 纵向模式下拉子菜单默认展开

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from 'rgulu-ui';

export default () => (
  <div>
    <Menu
      mode={'vertical'}
      defaultOpenSubMenus={['2']}
      defaultIndex={'2'}
      onSelect={index => {
        console.log(index);
      }}
    >
      <MenuItem>item</MenuItem>
      <MenuItem disabled>item1</MenuItem>
      <SubMenu title={'dropdown'}>
        <MenuItem>dropdown item1</MenuItem>
        <MenuItem>dropdown item2</MenuItem>
      </SubMenu>
      <MenuItem>item2</MenuItem>
    </Menu>
  </div>
);
```
