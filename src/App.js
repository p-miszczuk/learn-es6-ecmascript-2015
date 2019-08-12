import React from 'react';
import './App.css';
import {
    squared,
    arrowGreating3,
    arrowGreating2,
    arrowGreating,
    createGreating,
    deliverBoy
} from './lessons/lesson1';

import {
  message,
  message2,
  message3,
  varTest,
  letTest,
  varFunc,
  letFunc
} from'./lessons/lesson2';

function App() {
  return (
    <div className="lessons">
      <div className="lesson"><p>Lesson 1 -arrow function</p>
        <div>{`createGreating function: ${createGreating("Hello"," Roman")}`}</div>
        <div>{`arrowGreating: ${arrowGreating("Hello"," Maxi")}`}</div>
        <div>{`arrowGreating2: ${arrowGreating2("Hello"," Dolly")}`}</div>
        <div>{`arrowGreating3: ${arrowGreating3("Hello"," Adam")}`}</div>
        <div>{`Score 2x2: ${squared(2)}`}</div>
        <div>{`deliverBoy in console`}{deliverBoy.receive()}</div>
      </div>
      <div className="lesson"><p>Lesson 2 - let keywords</p>
        <div>{`Message after var: ${message}`}</div>
        <div>{`Message after add function greet: ${message2}`}</div>
        <div>{`Message after let: ${message3}`}</div>
        <div>var test in console {varTest()}</div>
        <div>let test in console{letTest()}</div>
        <div>varFunc in console{varFunc()}</div>
        <div>varFunc in console{varFunc()}</div>
      </div>
    </div>
  );
}

export default App;
