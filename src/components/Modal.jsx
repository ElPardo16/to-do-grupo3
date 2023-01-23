import React from 'react'
import { MdClose } from "react-icons/md";
import ListTask from './ListTask';

// loads the list of deleted tasks from the database 

function Modal({funModal, tasks}) {
  return (
    <div className='bg'>

      <div className='modal'>
        <div>
          <h1>Tareas Eliminadas</h1>
          <MdClose size={40} onClick={_ => void funModal(false)} />
        </div>
        <ListTask tasks={tasks} type={2} txt="eliminadas" />
      </div>
    </div>

  )
}

export default Modal