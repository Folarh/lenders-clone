import './UserTab.css'

export default function UserTab({users}){
    return(
        <div className="user__tab">
             <table cellPadding="0" cellSpacing='0' >
    <thead>
    <tr >
  <th>ORGANIZATION</th>
  <th>USERNAME</th>
  <th>EMAIL</th>
  <th>PHONE NUMBER</th>
  <th>DATE JOINED</th>
  <th>STATUS</th>
</tr>
    </thead>
   
<tbody>
{users && users.map((user)=>(
<tr>
<td>{user.orgName}</td>
  <td>{user.userName}</td>
  <td>{user.email}</td>
  <td>{user.phoneNumber}</td>
  <td>{user.createdAt}</td>
  <td>{user.id}</td>
</tr>

))}
</tbody>
</table>
        </div>
    )
}