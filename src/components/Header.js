import React from 'react'
import Lenders from '../assets/lenders.jpg'

//styles
import './Header.css'
//materialUi ICONS
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={Lenders} alt="logo" className='header-logo'/>
      </div>
      <div className='header-input'>

      <input placeholder='search' type="text"  />
            <SearchIcon className='header-search'/>
      </div>

      <div className='header-right'>
        <p>Docs</p>

        <NotificationsIcon className='bell-icon'/>
        <div className='user'>
        <AccountCircleIcon
        src={Lenders}
        alt="my avatar"
        />
        <p>Adedeji</p>
        <ExpandMoreOutlinedIcon/>
        </div>
       


      </div>
      
    </div>
  )
}
