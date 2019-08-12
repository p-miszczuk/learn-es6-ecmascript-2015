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

function App() {
  return (
    <div>
      <div><p>Lesson 1</p>
        <div>{`createGreating function: ${createGreating("Hello"," Roman")}`}</div>
        <div>{`arrowGreating: ${arrowGreating("Hello"," Maxi")}`}</div>
        <div>{`arrowGreating2: ${arrowGreating2("Hello"," Dolly")}`}</div>
        <div>{`arrowGreating3: ${arrowGreating3("Hello"," Adam")}`}</div>
        <div>{`Score 2x2: ${squared(2)}`}</div>
        <div>{`deliverBoy in console`}{deliverBoy.receive()}</div>
      </div>
    </div>
  );
}

export default App;
