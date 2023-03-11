import React from 'react';
import styled from 'styled-components';
import './App.css';
// import {Button}  from 'react-bootstrap';


// cols, rows
// import BootstrapTest from './component/botstrapTest/BootstrapTest';;

//принимает color пропсом и выводит колоны элементов придавая одинаковые классы 
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



const App = () => {
  

  const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
  `;

  
  return (
    <Wrapper>

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