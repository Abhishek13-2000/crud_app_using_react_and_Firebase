import { useEffect, useState } from "react"
import { db } from "../firebase.config"
import {ref,get, set} from "firebase/database"
import DeleteButton from "./DeleteButton"
import Update from "./Update"


export default function Get() {


    const [editUser,setEditUser] = useState(null)
    const [users,setUsers] = useState([])
    const [notify,setNotify] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            const userRef = ref(db,"users")
            try{
                const snapshot = await get(userRef)
                const data = snapshot.val();
                const userArray = Object.keys(data).map((key) => (
                    {
                        id:key,
                        ...data[key]
                    }
                ))
                setUsers(userArray)
                console.log("Fetched Data", userArray);
            }catch(error){
                console.log(error);

            }
        }
        fetchData();
    },[])

    // handle delete
const handleDelete = (deleteUserId) => {
          setUsers((PrevUser) => 
            PrevUser.filter((user)=> user.id !== deleteUserId))
            setNotify("Data deleted")
            setTimeout(() => {
                setNotify()
            }, 2000);
}
// handle edit
const handleEdit = (user) => {
    setEditUser(user)
} 

//handle close 
const handleCloseEdit = () => {
    setEditUser(null)
}

//handleUpdateUSer
const handleUpdateUser =  (userid,updateFirstName,updateLastName)=>{
    setUsers((PrevUser)=> 
    PrevUser.map((user)=>
    user.id === userid ? {...user, firstname:updateFirstName , lastname:updateLastName}:user
    ))
}
  return (
    
    <>
      <div className="user-table">
      <span className="notify">{notify}</span>
        <h1>Your data</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
            {
                users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td> <DeleteButton  userid={user.id} onDelete={handleDelete}/> </td>
                        <td><button onClick={()=>handleEdit(user)}>Edit</button></td>

                    </tr>
                ))
            }
        </table>
      </div>
                {
                    editUser && (
                        <Update user={editUser}
                        onClose = {handleCloseEdit}
                        onUpdate = {handleUpdateUser}
                        />
                    )
                }
    </>
  )
}
