
import {useState, useEffect} from 'react';
import ChatAPI from './../services/ChatAPI';

// use custom hooks для повторной логики с состояниями
function useFriendStatus(friendID) {
  console.log('запуск пользовательского хука'); 
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);

    //указываем как сбросить этот эффект
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
    }

  }, [friendID]); //повтороно подписаться, только если friendID поменялся

  return isOnline;
}


export default useFriendStatus;