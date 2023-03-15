import {useState, useEffect} from 'react';

function Example() {
  const [count, setCount] = useState(0);

  //Аналогично componentDidMount и componentDidUpdate

  useEffect(() => {
    //Объявляем заголовок документа с помощью api браузера
    document.title = `Вы нажали ${count} раз`;
  }, [count]); //перезапускать эффект только если count поменялся 

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  )
}

export default Example;

