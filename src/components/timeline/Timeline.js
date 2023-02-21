import React , {useState, useEffect} from 'react'
import Post from './Post'
import "./Timeline.css"
import TweetBox from './TweetBox'
import { collection, onSnapshot, query, orderBy} from "firebase/firestore";
import { db } from '../firebase';
import FlipMove from 'react-flip-move';



const Timeline = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const postData = collection(db, "posts")
    const q = query(postData, orderBy('createdAt', "desc"))
    // getDocs(q).then((snapshot)=>{
    //   setPosts(snapshot.docs.map((doc)=>(doc.data())));
    // });
    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc)=>(doc.data())));
    });
  },[])
  return (
    <div className='timeline'>
      <div className='timeline--header'>
        <h2>ホーム</h2>
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map((post)=>(
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Timeline