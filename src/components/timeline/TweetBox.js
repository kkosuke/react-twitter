import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./TweetBox.css"

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
          <Avatar />
          <input type="text"
            placeholder='いまどうしてる？'
          />
        </div>
        <input className='tweetBox--imageInput' placeholder='画像のURLを入力してください' type="text" />
        <Button className="tweetBox--tweetButton" type="submit">ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox