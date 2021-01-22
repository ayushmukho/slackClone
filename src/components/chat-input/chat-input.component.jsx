import React, {useState} from 'react'
import db from '../../firebase/firebase';
import { useStateValue } from '../../StateProvider';
import firebase from 'firebase';

import './chat-input.styles.css'

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState("");
    const [{user}] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();

        if(channelId){
            db.collection('rooms').doc(channelId)
            .collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,

            });
        }
        
        setInput(""); 
    }

    return (
        <div className='chatInput'>
            <form>
                <input 
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                    value ={input}
                    onChange={(e)=>setInput(e.target.value)} 
                />
                <button type="sumbit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput
