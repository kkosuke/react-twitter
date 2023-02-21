import React from 'react'
import Post from './Post'
import "./Timeline.css"
import TweetBox from './TweetBox'

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className='timeline--header'>
        <h2>ホーム</h2>
      </div>

      <TweetBox />

      <Post
        displayName="post--headerText"
        username="aaaaa"
        verified={true}
        avatar="https://pbs.twimg.com/profile_images/1390625710864166912/Y6MXQX22_x96.png"
        text="post-headerDescription"
        image="https://source.unsplash.com/random"
      />


    </div>
  )
}

export default Timeline