import React from 'react'
import "./SidebarOption.css"

const SidebarOption = ({Icon,text,active}) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <span>{text}</span>
    </div>
  )
}

export default SidebarOption