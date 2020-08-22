import React from 'react';
import Layout from './layout';
import Content from './content';
import Footer from './footer';
import Header from './header';
import Aside from './aside';
import './layout.example.scss';
const LayoutExample: React.FunctionComponent = props => {
  return (
    <>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{ height: '500px', width: '500px' }} className={'1'}>
          <Header className={'header'}>header</Header>
          <Content className={'content'}>content</Content>
          <Footer className={'footer'}>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout style={{ height: '500px', width: '500px' }} className={'1'}>
          <Header className={'header'}>header</Header>
          <Layout>
            <Aside className={'aside'}>aside</Aside>
            <Content className={'content'}>content</Content>
          </Layout>
          <Footer className={'footer'}>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{ height: '500px', width: '500px' }} className={'1'}>
          <Header className={'header'}>header</Header>
          <Layout>
            <Content className={'content'}>content</Content>
            <Aside className={'aside'}>aside</Aside>
          </Layout>
          <Footer className={'footer'}>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout style={{ height: '500px', width: '500px' }}>
          <Aside className={'aside'}>aside</Aside>
          <Layout>
            <Header className={'header'}>header</Header>
            <Content className={'content'}>content</Content>
            <Footer className={'footer'}>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default LayoutExample;
