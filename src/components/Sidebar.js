import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
//materialUI icon
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import GroupsIcon from '@mui/icons-material/Groups';
import PaidIcon from '@mui/icons-material/Paid';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SavingsIcon from '@mui/icons-material/Savings';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SummarizeIcon from '@mui/icons-material/Summarize';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BugReportIcon from '@mui/icons-material/BugReport';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import StreamIcon from '@mui/icons-material/Stream';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import SpeakerIcon from '@mui/icons-material/Speaker';
import LoginIcon from '@mui/icons-material/Login';
// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='switch'>
      <SidebarOptions Icon={BusinessCenterIcon} title="Switch Organization"/>
      <SidebarOptions Icon={HomeIcon} title="Dashboard"/>
      </div>
      <div className="customers">
      <h4>CUSTOMERS</h4>
      <SidebarOptions selected Icon={PeopleAltIcon} title="Users"/>
      <SidebarOptions Icon={GroupsIcon} title="Guarantors"/>
      <SidebarOptions Icon={PaidIcon} title="Loans"/>
      <SidebarOptions Icon={HandshakeIcon} title="Decision Models"/>
      <SidebarOptions Icon={SavingsIcon} title="Savings"/>
      <SidebarOptions Icon={CleanHandsIcon} title="Loan request"/>
      <SidebarOptions Icon={GroupAddIcon} title="WhiteList"/>
      <SidebarOptions Icon={GroupRemoveIcon} title="Karma"/>
      </div>

      <div className='business'>
      <h4>BUSINESSES</h4>
      <SidebarOptions Icon={BusinessCenterIcon} title="Organization"/>
      <SidebarOptions Icon={CorporateFareIcon} title="Loan Products"/>
      <SidebarOptions Icon={CleanHandsIcon} title="Savings Products"/>
      <SidebarOptions Icon={EnergySavingsLeafIcon} title="Fee and charges"/>
      <SidebarOptions Icon={ReceiptIcon} title="Transactions"/>
      <SidebarOptions Icon={MiscellaneousServicesIcon} title="Service"/>
      <div className='service-account'>
      <h4>SERVICE ACCOUNT</h4>
      <SidebarOptions Icon={SummarizeIcon} title="Settlement"/>
      <SidebarOptions Icon={BugReportIcon} title="Reports"/>
      <h4>SETTINGS</h4>
      <SidebarOptions Icon={RoomPreferencesIcon} title="Preference"/>
      <SidebarOptions Icon={StreamIcon} title="Fees and Pricing"/>
      <SidebarOptions Icon={EarbudsIcon} title="Audit Logs"/>
      <SidebarOptions Icon={SpeakerIcon} title="Systems Messages"/>

      <div>
      <SidebarOptions Icon={LoginIcon}/>
      </div>
      <hr/>
      <span>Logout</span>
      </div>
      
      </div>
      
      
      
    
      
    </div>
  )
}
