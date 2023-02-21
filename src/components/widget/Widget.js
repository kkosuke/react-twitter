import { Search } from "@mui/icons-material";
import React from 'react'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widget.css"

const Widget = () => {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets--widgetContainer">
        <h2>いまどうしてる？</h2>

        <TwitterTweetEmbed tweetId={"1626755300249440256"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="katoon081"
          options={{ height: 400 }}
        />
        <br />
        <TwitterShareButton
          url={"https://twitter.com/katoon081"}
          options={{ text: "#Reactjs勉強中", via: "katoon081" }}
        />

      </div>
    </div>
  )
}

export default Widget