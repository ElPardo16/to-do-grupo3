import React from 'react'
import { MdClose } from "react-icons/md";
import  ListTask  from './ListTask';


function Modal({funModa, tasks}) {
  return (
    <div className='bg'>
     
      <div className='modal'>
      <div>
         <h1>Tareas Eliminadas</h1> 
         <MdClose size={40} onClick={_ => void funModal(false) }/>
      </div>
      <ListTask tasks={tasks} type={2}/>
      </div>
   </div>
   
  )
}

export default Modal