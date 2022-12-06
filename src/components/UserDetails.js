import {useState} from 'react'
import './UserDetails.css'
import { useFetch } from '../hooks/useFetch'
import UserTab from './UserTab'
import UserCard from './UserCard'

export default function UserDetails() {
  const [url, setUrl]  = useState("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
  const {data:users}= useFetch(url)

  return (
    <div className='userdetails'>
      <h3>Users</h3>
     <div className='list'>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>


     </div>
      
     <UserTab users={users}/>

      
     
    </div>
  )
}
