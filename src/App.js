
import './App.css';
import React, { useState } from 'react';
import Sub from './Sub';

function App() {
  // let number = 1; // 상태 값 아님
  const [number, setNumber] = useState(2); // React 안에 hooks 라이브러리 상태값이 됨.
  
  const add = () => {
    // number ++; 을 할 수 없다.
     setNumber(number + 1); // 리액트한테 number 값 변경할께라고 요청 
     console.log('add', number);
  };
  // 랜더링 시점 = 상태 값 변경
  return (
  <div>
    <div>
      <h1>숫자:{number}</h1>
      <button onClick={add}>더하기</button>
    </div>
    <Sub/>
  </div>
  );
}

export default App;