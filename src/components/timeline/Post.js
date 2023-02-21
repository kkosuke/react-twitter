import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import "./Post.css"

const Post = forwardRef(
  ({displayName,username,verified,avatar,text,image},ref) => {
    return (
      <div className='post' ref={ref}>
        <div className='post--avatar'>
          <Avatar src={avatar} />
        </div>
        <div className='post--body'>
          <div className='post--header'>
            <div className='post--headerText'>
              <h3>
              {displayName}
              <span className='post--headerSpecial'>
                {verified && (<VerifiedUser className='post--badge' />)}@{username}
              </span>
              </h3>
            </div>
            <div className='post--headerDescription'>
              <p>{text}</p>
            </div>
          </div>
          {image && (<img src={image} alt="" />)}
          <div className='post--footer'>
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small"/>
            <PublishOutlined fontSize="small"/>
          </div>
        </div>
      </div>
    )
  }
)
export default Post
