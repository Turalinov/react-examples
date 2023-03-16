import React from 'react';

import Count from './components/Count';
import IsFive from './components/IsFive';


// 2 проблемы - 
// 1. в первом счетчике зависает приложение потому что функция в дочернем компоненте isFive рендерится, нам это не нужно

//2. rerender происходит в тех местах где он не должен быть - решение использовать React.memo (поможет избавиться от лишних ререндеров)

//разница useMemo - это хук. React.memo - вспомогательная функция для компонентов (HOC)



function UseMemoExample() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  return(
    <div>
      <h5>Счетчик 1:</h5>
      <div className="counter">
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <Count id={1} value={count1}/>
      </div>

      
      <h5>Счетчик 2:</h5>
      <div className="counter">
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <Count id={2} value={count2}/>
        <IsFive value={count2}/>
      </div>
    </div>
  )

}

export default UseMemoExample;