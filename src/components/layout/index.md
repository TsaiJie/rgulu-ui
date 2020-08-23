## Layout

### 第一种布局:

```tsx
import React from 'react';
import { Layout, Content, Footer, Header } from 'rgulu-ui';
// 这是随便定义的样式 可以进行更改
import './layout.example.scss';
export default () => (
  <Layout style={{ height: '500px', width: '500px' }}>
    <Header className={'header'}>header</Header>
    <Content className={'content'}>content</Content>
    <Footer className={'footer'}>footer</Footer>
  </Layout>
);
```

### 第二种布局:

```tsx
import React from 'react';
import { Layout, Content, Footer, Header, Aside } from 'rgulu-ui';
// 这是随便定义的样式 可以进行更改
import './layout.example.scss';
export default () => (
  <Layout style={{ height: '500px', width: '500px' }} className={'1'}>
    <Header className={'header'}>header</Header>
    <Layout>
      <Aside className={'aside'}>aside</Aside>
      <Content className={'content'}>content</Content>
    </Layout>
    <Footer className={'footer'}>footer</Footer>
  </Layout>
);
```

### 第三种布局:

```tsx
import React from 'react';
import { Layout, Content, Footer, Header, Aside } from 'rgulu-ui';
// 这是随便定义的样式 可以进行更改
import './layout.example.scss';
export default () => (
  <Layout style={{ height: '500px', width: '500px' }} className={'1'}>
    <Header className={'header'}>header</Header>
    <Layout>
      <Content className={'content'}>content</Content>
      <Aside className={'aside'}>aside</Aside>
    </Layout>
    <Footer className={'footer'}>footer</Footer>
  </Layout>
);
```

### 第四种布局:

```tsx
import React from 'react';
import { Layout, Content, Footer, Header, Aside } from 'rgulu-ui';
// 这是随便定义的样式 可以进行更改
import './layout.example.scss';
export default () => (
  <Layout style={{ height: '500px', width: '500px' }} className={'1'}>
    <Aside className={'aside'}>aside</Aside>
    <Layout>
      <Header className={'header'}>header</Header>
      <Content className={'content'}>content</Content>
      <Footer className={'footer'}>footer</Footer>
    </Layout>
  </Layout>
);
```
