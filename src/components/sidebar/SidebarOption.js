import React from 'react'
import "./SidebarOption.css"

const SidebarOption = ({Icon,text}) => {
  return (
    <div className='sidebarOption'>
      <Icon />
      <span>{text}</span>
    </div>
  )
}

export default SidebarOption