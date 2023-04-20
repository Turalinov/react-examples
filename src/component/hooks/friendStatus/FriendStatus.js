import useFriendStatus from '../../../helpers/useFriendStatus';

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id)
  
  if(isOnline === null) {
    console.log('Загрузка...')
    return 'Загрузка...'
  }

  console.log(isOnline);
   
  return  isOnline ? `в сети ` : `не в сети `
 
}

export default FriendStatus;



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