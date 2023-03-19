import React from 'react';
import './Increment.css';


export default function Timer() {

  const [numbers, setNumbers] = React.useState([1,2,3,4,5]);
  const timerRef = React.useRef();

  const addNumber = () => {
    // console.log(numbers)
    // const lastNumber = numbers[numbers.length - 1];
    // setNumbers([...numbers, lastNumber + 1])
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const start = () => {
    timerRef.current = setInterval(addNumber, 5000);
  }

  const stop = () => {
    console.log(timerRef.current)
    clearInterval(timerRef.current)
  }


  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Добавить число</button>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}