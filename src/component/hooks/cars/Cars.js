import React, { useState, useCallback, memo} from 'react';

const  Car = memo(({car, onCarClick, id}) => {

  const onClick = () => onCarClick(car);
  console.log('render car' + id)  

  return (
    <button onClick={onClick}>{car.model}</button>
  )
});


function Cars({cars}) {
  const [state, setState] = useState(true);

  console.log('render cars');

  // const onCarClick = (car) => {
  //   console.log(car.model);
  // }

  // мемоизированная функция + React.memo
  const onCarClick = useCallback((car) => {
    console.log(car.model);
  }, [])

  const buttons = cars.map((car) => {
    return (
      <Car key={car.id} id={car.id} car={car} onCarClick={onCarClick}/>
    )
  }) 

  return (
    <>
      {buttons}
      <p>значение из состояния: {state ? 'true' : 'false'}</p>
      <button onClick={(e) => setState(state => !state)}>Давай перерендерим</button>
    </>
  )

};




export default Cars;