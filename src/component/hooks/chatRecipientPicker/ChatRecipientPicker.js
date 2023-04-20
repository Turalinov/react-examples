import {useState} from 'react';

import {friends} from './../../../services/ChatAPI';
import useFriendStatus from '../../../helpers/useFriendStatus';


function Circle({color}) {
  return (
    <div 
      style = {{
          backgroundColor: color,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          marginBottom: '10px'
      }}>

    </div>
  )
}

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(546);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientOnline ? 'green' : 'red'} />
      <select 
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >

        {friends.map(friend => (
          <option
            key={friend.id}
            value={friend.id}
            >
              {friend.name}
          </option>
        ))}

      </select>
    </>
  )
}

export default ChatRecipientPicker;