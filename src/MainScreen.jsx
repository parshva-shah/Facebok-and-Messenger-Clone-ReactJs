import React from 'react';
import { useState } from 'react';
import './MainScreen.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import { useStateVavlue } from './StateProvider';
import Widgets from './Widgets'

function MainScreen() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')
  const [ {user}, dispatch] = useStateVavlue();

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="mainscreen">
      <div className="mainscreen__top">
        <img src='https://www.logo.wine/a/logo/Facebook_Messenger/Facebook_Messenger-Logo.wine.svg' alt=''></img>
        <img src></img>
        <h2>Welcome {user.displayName}</h2>
      </div>

      <form className="mainscreen__form">
        <FormControl style={{width: '200px'}}>
          <InputLabel >Enter message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant='contained' type='submit' onClick={sendMessage}>Send mesasge</Button>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={user.displayName} message={message} />
          ))
        }
      </FlipMove>
      
    </div>
    
  );
}

export default MainScreen;
