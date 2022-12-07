import {useState} from 'react'
import './UserDetails.css'
import Pagination from  '../components/Pagination'
import { useFetch } from '../hooks/useFetch'
import UserTab from './UserTab'
import UserCard from './UserCard'

export default function UserDetails() {
  const [currentPage, setCurrentPage]= useState(1)
  const [postPerPage, setPostPerPage]= useState(8)
  const [url, setUrl]  = useState("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
  const {data:users}= useFetch(url)

  const prevPage =()=>{
    if(currentPage <=1){
      return currentPage
    }
    setCurrentPage((currentPage)=>currentPage-1)
  }

  const nextPage = ()=>{
    const pageLength = users.length/postPerPage
    if(currentPage <pageLength-1){
      setCurrentPage((currentPage)=>currentPage+1)
    }
  }

  //get current post
  const indexOfLastPost = currentPage* postPerPage;
  const indexOfFirsPost = indexOfLastPost-postPerPage
  const currentPosts = users.slice(indexOfFirsPost, indexOfLastPost);

  //pagination function
  const paginate =(pageNumber)=>setCurrentPage(pageNumber)


  return (
    <div className='userdetails'>
      <h3>Users</h3>
     <div className='list'>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>


     </div>
      
     <UserTab users={currentPosts}/>

     {/* <Pagination postPerPage={postPerPage} totalPosts={users.length} paginate={paginate} prevPage={prevPage} nextPage={nextPage}/> */}

      
     
    </div>
  )
}
