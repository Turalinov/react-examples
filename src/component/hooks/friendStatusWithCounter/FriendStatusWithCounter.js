import {useState, useEffect} from 'react';
import ChatAPI from '../../../services/ChatAPI';




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

function FriendStatusWithCounter(props) {
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Вы кликнули ${count} раз`;
  }, [count]);

  const [isOnline, setIsOnline] = useState(null);


  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  })


  if(isOnline === null) {
    console.log('Загрузка...')
    return 'Загрузка...'
  }

  console.log(isOnline);

  
  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <p>{isOnline ? 'В сети' : 'Не в сети'}</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  )
}

export default FriendStatusWithCounter;