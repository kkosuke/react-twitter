import { Avatar, Button } from '@mui/material'
import React,{useState} from 'react'
import "./TweetBox.css"

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase'


const TweetBox = () => {
  const [message, setMessage] = useState("")
  const [image, setImage] = useState("https://source.unsplash.com/random")
  const sendMessage = (e) =>{
    e.preventDefault();
    const docRef = addDoc(collection(db, "posts"), {
      createdAt: serverTimestamp(),
      displayName:"displayNameです",
      username:"usernameです",
      verified:true,
      text: message,
      avatar:"https://pbs.twimg.com/profile_images/1390625710864166912/Y6MXQX22_x96.png",
      image
    });
    console.log("Document written with ID: ", docRef.id);
    setMessage('');
    setImage('')
  }
  return (
    <div className='tweetBox'>
      <form onSubmit={sendMessage}>
        <div className='tweetBox--input'>
          <Avatar />
          <input type="text"
            placeholder='いまどうしてる？'
            value={message}
            onChange={((e)=> setMessage(e.target.value))}
          />
        </div>
        <input className='tweetBox--imageInput'
          placeholder='画像のURLを入力してください' type="text"
          value={image}
          onChange={((e)=> setImage(e.target.value))}
        />
        <Button className="tweetBox--tweetButton" type="submit">ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox