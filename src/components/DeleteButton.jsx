
import { db } from "../firebase.config"
import {ref , remove} from "firebase/database"
export default function DeleteButton({userid,onDelete}) {

    const handleDelete = () => {
         try {
            const userRef = ref(db,`users/${userid}`)
            remove(userRef)
            onDelete(userid)
         } catch (error) {
            console.log(error);
         }
    }
  return (
    
    <button onClick={handleDelete}>Delete Data</button>
  )
}
