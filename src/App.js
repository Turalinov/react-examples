import React, {useState, useEffect, Component} from 'react';
import styled from 'styled-components';
import './App.css';


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


// import Message from './component/message/Message';
// import CounterAdditional from './component/counter/CounterAdditional';


// import Form from './component/form/Form';
// import Form2 from './component/form/Form2';

// import Calendar from './component/calendar/Calendar';


//HOOKS

// import Slider from './component/hooks/slider/Slider.js'


//useEffect

const friends = [
  {
    id: 545, 
    status: {
      isOnline: false
    }
  },
  
  {
    id: 546, 
    status: {
      isOnline: true
    }
  }
]

class ChatAPI {
  static subscribeToFriendStatus(id, func) {
    const friend = friends.find(friend => friend.id == id) || friends[0];

    func(friend.status)
    return true;
  }
  static unsubscribeFromFriendStatus(id, func) {
    return false;
  }
}

// class FriendStatus extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isOnline: null
//     }
//     this.handleStatusChange = this.handleStatusChange.bind(this);
//   }

  
//     componentDidMount() {
//       ChatAPI.subscribeToFriendStatus(
//         this.props.friend.id,
//         this.handleStatusChange
//       )
//     }

//     componentDidUpdate(prevProps) {
//       //отписаться от предыдущего friend.id
//       ChatAPI.unsubscribeFromFriendStatus(
//         prevProps.friend.id,
//         this.handleStatusChange
//       )

//       //подписаться на следующий friend
//       ChatAPI.subscribeToFriendStatus(
//         this.props.friend.id,
//         this.handleStatusChange
//       )
//     }

//     componentWillUnmount() {
//       ChatAPI.unsubscribeFromFriendStatus(
//         this.props.friend.id,
//         this.handleStatusChange
//       )
//     }

//     handleStatusChange(status) {
//       this.setState({
//         isOnline: status.isOnline
//       })
//     }

//     render() {
//       if (this.state.isOnline === null) {
//         console.log('Заргрузка...');
//         return 'Заргрузка...'
//       }  

//       console.log(this.state.isOnline);
//       return this.state.isOnline ? 'В сети' : 'Не в сети';
//     }
// }


function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    //указываем как сбросить этот эффект
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }

  }, [props.friend.id]); //повтороно подписаться, только если props.friend.id поменялся   
  
  if(isOnline === null) {
    console.log('Загрузка...')
    return 'Загрузка...'
  }

  console.log(isOnline);
  return isOnline ? 'В сети' : 'Не в сети'
}

// class FriendStatusWithCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 0, isOnline: null};
//     this.handleStatusChange = this.handleStatusChange.bind(this);
//   }

//   componentDidMount() {
//     document.title = `Вы нажали ${this.state.count}`;
//     ChatAPI.subscribeToFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.count !== this.state.count) {  
//        document.title = `Вы нажали ${this.state.count}`;
//     }
//   }

//   componentWillUnmount() {
//     ChatAPI.unsubscribeFromFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }

//   handleStatusChange(status) {
//     this.setState({
//       isOnline: status.isOnline
//     })
//   }

// }

// function FriendStatusWithCounter(props) {
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     document.title = `Вы кликнули ${count} раз`;
//   });

//   const [isOnline, setIsOnline] = useState(null);
//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }

//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)

//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
//     }
//   })

//   // .....
// }



// function Example() {
//   const [count, setCount] = useState(0);

//   //Аналогично componentDidMount и componentDidUpdate

//   useEffect(() => {
//     //Объявляем заголовок документа с помощью api браузера
//     document.title = `Вы нажали ${count} раз`;
//   }, [count]); //перезапускать эффект только если count поменялся 

//   return (
//     <div>
//       <p>Вы нажали {count} раз</p>
//       <button onClick={() => setCount(count + 1)}>
//         Нажми на меня
//       </button>
//     </div>
//   )
// }



const App = () => {

  const Wrapper = styled.div`
    /* width: 600px; */
    /* margin: 80px auto 0 auto; */
  `;

  
  return (
    <Wrapper>
      <FriendStatus friend={{id: 546}}/>
      {/* <Example/> */}

      {/* <Slider/> */}

      {/* <Calendar/>  */}

      {/* <Form2/> */}
      {/* <Form/> */}


      {/* <CounterAdditional render={counter => (
        <Message counter={counter}/>
      )} />
      <CounterAdditional render={counter => (
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