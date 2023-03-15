import {useState, useEffect} from 'react';
import ChatAPI from '../../../services/ChatAPI';


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

export default FriendStatus;