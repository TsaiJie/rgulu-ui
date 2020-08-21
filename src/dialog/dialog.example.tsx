import React, {Fragment, useState} from 'react';
import Dialog from './dialog';
import {alert, confirm, modal} from './dialog';


const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  //函数操作模块内部的api
  const openModal = () => {
    // 函数是延迟执行的
    // 函数操作组件内部返回的api 和 闭包很像
    const close = modal(<h1>你好 <button onClick={() => {close();}}>close</button></h1>);
  };
  return (<Fragment>
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
    </div>
    <div>
      <h2>example2</h2>
      <button onClick={() => setY(!y)}>click</button>
      <Dialog visible={y} buttons={
        [
          <button onClick={() => setY(false)}>1</button>,
          <button onClick={() => setY(false)}>2</button>
        ]

      } onClose={() => {setY(false);}} clickMaskClose={true}>
        <div>hi</div>
      </Dialog>
    </div>
    <div>
      <h2>example3--alert</h2>
      <button onClick={() => alert('1')}>alert</button>
    </div>
    <div>
      <h2>example4--confirm</h2>
      <button onClick={() => confirm('1', () => {
        console.log('你点击了yes');
      }, () => {
        console.log('你点击了no');
      })}>confirm
      </button>
    </div>
    <div>
      <h2>example5--modal</h2>
      <button onClick={openModal}>modal</button>
    </div>
    <div>
      <h2>example6</h2>
      <button onClick={() => setZ(!z)}>click</button>
      <Dialog visible={z} buttons={
        [
          <button onClick={() => setZ(false)}>1</button>,
          <button onClick={() => setZ(false)}>2</button>
        ]

      } onClose={() => {setZ(false);}} enableMask={false}>
        <div>hi</div>
      </Dialog>
    </div>
  </Fragment>);
};
export default DialogExample;
