import {friends} from './../../../services/ChatAPI';
import FriendListItem from '../friendListItem/FriendListItem';

function FriendList(props) {

  const items = friends.map(friend => {
    return <FriendListItem friend={friend} key={friend.id}/>;
  })

  return (
    <ul>
      {items}
    </ul>
  )
}

export default FriendList;