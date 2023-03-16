import React from 'react'
import{useParamas,useNavigate} from "react-router-dom"
const User = () => {
  const params=useParamas()
  const navigation=useNavigate();
  console.log(params.id);
  return (
    <div className='User'>User
     <button onClick={()=>navigation("about")}>click Me</button>
     <button onClick={()=>navigation("/about")}>OK done</button>
     </div>
  )
}

export default User