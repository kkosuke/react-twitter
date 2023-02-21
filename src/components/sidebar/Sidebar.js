import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from '@mui/material';
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className='sidebar--twitterIcon' />

      <SidebarOption Icon={HomeIcon} text="ホーム" />
      <SidebarOption Icon={SearchIcon} text="話題を検索" />
      <SidebarOption Icon={NotificationsIcon} text="通知" />
      <SidebarOption Icon={MailOutlineIcon} text="メッセージ" />
      <SidebarOption Icon={BookmarkBorderIcon} text="ブックマーク" />
      <SidebarOption Icon={ListAltIcon} text="リスト" />
      <SidebarOption Icon={PermIdentityIcon} text="プロフィール" />
      <SidebarOption Icon={MoreHorizIcon} text="もっとみる" />

      <Button variant="outlined" className='sidebar--tweet' fullWidth>ツイートする</Button>
    </div>
  )
}

export default Sidebar