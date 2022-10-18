import React from 'react'
import './SidebarOptions.css'

export default function SidebarOptions({Icon,selected, title}) {
  return (
    <div className= {`sidebarOptions ${selected && 'selected'}`}>
      <Icon className="sidebarOptions-icon"/>
      <h2 className="sidebarOptions-title"> {title}  </h2>
    </div>
  )
}
