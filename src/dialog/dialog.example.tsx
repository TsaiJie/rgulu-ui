import React, {Fragment, useState} from 'react';
import Dialog from './dialog';
import {alert, confirm, modal} from './dialog';
import { Button } from '@/index';


const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  //函数操作模块内部的api
  const openModal = () => {
    // 函数是延迟执行的
    // 函数操作组件内部返回的api 和 闭包很像
    const close = modal(<h1>你好 <Button onClick={() => {close();}}>close</Button></h1>);
  };
  return (<Fragment>
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
    </div>
    <div>
      <h2>example2</h2>
      <Button onClick={() => setY(!y)}>click</Button>
      <Dialog visible={y} buttons={
        [
          <Button onClick={() => setY(false)}>1</Button>,
          <Button onClick={() => setY(false)}>2</Button>
        ]

      } onClose={() => {setY(false);}} clickMaskClose={true}>
        <div>hi</div>
      </Dialog>
    </div>
    <div>
      <h2>example3--alert</h2>
      <Button onClick={() => alert('1')}>alert</Button>
    </div>
    <div>
      <h2>example4--confirm</h2>
      <Button onClick={() => confirm('1', () => {
        console.log('你点击了yes');
      }, () => {
        console.log('你点击了no');
      })}>confirm
      </Button>
    </div>
    <div>
      <h2>example5--modal</h2>
      <Button onClick={openModal}>modal</Button>
    </div>
    <div>
      <h2>example6</h2>
      <Button onClick={() => setZ(!z)}>click</Button>
      <Dialog visible={z} buttons={
        [
          <Button onClick={() => setZ(false)}>1</Button>,
          <Button onClick={() => setZ(false)}>2</Button>
        ]

      } onClose={() => {setZ(false);}} enableMask={false}>
        <div>hi</div>
      </Dialog>
    </div>
  </Fragment>);
};
export default DialogExample;
