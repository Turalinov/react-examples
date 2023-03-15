import React, {useState, useEffect, useCallback, Component} from 'react';
import styled from 'styled-components';
import './App.css';


// cols, rows
// import BootstrapTest from './component/botstrapTest/BootstrapTest';;

//принимает color пропсом и выводит элементы придавая одинаковые классы 
// import DynamicGreeting from './component/dynamicGreeting/DynamicGreeting';

// import SplitPane from './component/splitPane/SplitPane';

// import HelloGreeting from './component/helloGreeting/HelloGreeting';

// import FancyBorder from './component/fancyBorder/FancyBorder';

// import WelcomeDialog from './component/welcomeDialog/WelcomeDialog'


// temperature
// import CalcTemp from './component/calcTemp/CalcTemp';

// clock
// import Clock from './component/clock/Clock'

// counter
// import Counter from "./component/counter/Counter";


// todo 
// import ToDoList from "./component/todo/Todo";

// блок с увеличением возраста
// import WhoAmI from './component/whoami/WhoAmI';


//изображения
// import slides from './data/slides.js'


// slider
// import CitiesSlider from './component/slider/CitiesSlider';


// import CounterAdditional from './component/counter/CounterAdditional';
// import Message from './component/message/Message';


// import Calendar from './component/calendar/Calendar';
// import Form2 from './component/form/Form2';
// import Form from './component/form/Form';


//HOOKS

// useState
import Slider from './component/hooks/slider/Slider.js'


//useEffect
// import FriendStatusWithCounter from './component/hooks/friendStatusWithCounter/FriendStatusWithCounter';
// import FriendStatus from './component/hooks/friendStatus/FriendStatus';
// import Example from './component/hooks/example/Example';


//useCallback

// const memoizedCallback = useCallback(() => {
//   doSomething(a,b)
// }, [a, b]) 


// import Cars from './component/hooks/cars/Cars'





const App = () => {

  const Wrapper = styled.div`
    /* width: 600px; */
    /* margin: 80px auto 0 auto; */
  `;


//  const cars = [
//   {id: 1, model: 'model1'},
//   {id: 2, model: 'model2'},
//   {id: 3, model: 'model3'},
//   {id: 4, model: 'model4'},
//  ]

  
  return (
    <Wrapper>
      {/* <Cars cars={cars}/> */}
      <Slider/>

      {/* <FriendStatusWithCounter friend={{id: 546}}/> */}
      {/* <FriendStatus friend={{id: 546}}/> */}
      {/* <Example/> */}


      {/* <Calendar/>  */}
      {/* <Form2/> */}
      {/* <Form/> */}


      {/* <CounterAdditional render={counter => (
        <Message counter={counter}/>
      )} /> */}

      {/* <SplitPane
          left={<WelcomeDialog/>}
          right={<HelloGreeting/>}
        />
       */}




      {/* <DynamicGreeting color={'primary'}>
        <h2>This weel was hard</h2>
        <h2>Hello world</h2>
      </DynamicGreeting> */}

    

      {/* <BootstrapTest
        left = {
          <DynamicGreeting color={'primary'}>
            <h2 className="first">This weel was hard</h2>
            <h2>Hello world</h2>
          </DynamicGreeting>
        } 
        right = {
          <DynamicGreeting color={'primary'}>
            <h2>Right!</h2>
          </DynamicGreeting>
        }
      /> */}

      {/* temperature */}
      {/* <CalcTemp/> */}

      {/* clock*/}
      {/* <Clock/> */}

      {/* counter */}
      {/* <Counter/> */}

      {/* todo */}
      {/* <ToDoList/> */}

      {/* карточка сотрудника */}
      {/* <WhoAmI name="Ruslan" surname="Turalinov" link="https://booking.com"/> */}

      {/* слайдер  */}
      {/* <CitiesSlider slides={slides} /> */}

      
    </Wrapper>
  )
}

export default App;