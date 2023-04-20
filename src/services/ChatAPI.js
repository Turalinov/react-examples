
const friends = [
  {
    id: 545, 
    name: 'Ruslan',
    status: {
      isOnline: false
    }
  },
  
  {
    id: 546, 
    name: 'Arailym',
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

export default ChatAPI;
export {friends};
