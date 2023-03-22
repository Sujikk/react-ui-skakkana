import * as React from 'react';
import './style.css';
import { useState } from 'react';


function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    alert('You clicked me!');
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You Clicked me {count}
    </button>
  );

}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <MyButton />
    </div>
  );
}
