import React, { useState } from 'react'
import { db } from '../firebase.config'
import {ref,update} from "firebase/database"
export default function Update({user, onClose , onUpdate}) {
    const [editFirstName,setEditFirstName] = useState(user.firstname)
    const [editLastName,setEditLastName] = useState(user.lastname)
    const handleUpdate = async () => {
        const userRef = ref(db,`users/${user.id}`)
  try {
    await update (userRef, {
        firstname:editFirstName,
        lastname:editLastName
    })
    onUpdate(user.id,editFirstName,editLastName)
    onClose()
  } catch (error) {
  console.log(error);  
  }
    }
  return (
   <>
   <div className="model">
    <h2>Edit user</h2>
    <div className="model-content">
        <input type="text" value = {editFirstName} 
        onChange={(e)=>setEditFirstName(e.target.value)}/>
        <input type="text" value = {editLastName}
        onChange={(e)=>setEditLastName(e.target.value)}/>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
    </div>
   </div>
   </>
  )
}
