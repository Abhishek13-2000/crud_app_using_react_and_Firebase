import { useState } from "react";
import { db } from "../firebase.config";
import {ref,set} from "firebase/database"
import "./style.css"

export default function Add() {

    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [notify,setNotify] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const useRef = ref(db,'users/' + id)
    set(useRef,{
        firstname: firstname,
        lastname: lastname
    })
    setNotify("Data Added")
    setFirstName("")
    setLastName("")
    setTimeout(() => {
        setNotify("")
    }, 2000);
  };

  return (
    
    <>
    <span className="notify">{notify}</span>
    
      <form onSubmit={handleSubmit}>
        {/* //firstName Input */}
        <input type="text" placeholder="Enter first name" 
        required 
        value = {firstname}
         onChange={(e)=> setFirstName(e.target.value)}/>
           {/* //lastname input */}
        <input type="text" placeholder="Enter last name" 
        required 
        value = {lastname} 
        onChange={(e) => setLastName (e.target.value)}/>
        <button type="submit">Add data</button>
      </form>
    </>
  );
}
