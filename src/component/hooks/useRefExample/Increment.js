import React from 'react';
import './Increment.css';


export default function Increment() {
  
  const [numbers, setNumbers] = React.useState([1,2,3,4,5]);
  const ulRef = React.useRef();

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumber + 1])
  };

  const handleScroll = React.useCallback(() => {
    console.log('Был скролл!');
  }, [])

  React.useEffect(() => {
    ulRef.current.addEventListener('scroll', handleScroll)
  }, []);

  const removeScroll = () => {
    console.log(ulRef)
    ulRef.current.removeEventListener('scroll', handleScroll)
  }

  return (
    <div>
      <ul ref={ulRef}>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Добавить число</button>
      <button onClick={removeScroll}>Не следить</button>
    </div>
  )
}