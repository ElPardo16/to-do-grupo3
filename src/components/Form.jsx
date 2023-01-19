import React, { useState } from 'react'
import {MdAdd} from 'react-icons/md'

function Form() {
    const [title, setTitle] = useState('')
    
    const clickHandler = async e=> { 
        e.preventDefault()
        const res = await fetch('/api/task', {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify( {
                title
            })
        })
        const json = await res.json()
        console.log(json)
    }
  return (
    <form action="">
        <p className='delete'>Eliminadas</p>
        <label htmlFor="title">Crear Tarea</label>
        <div>
            <input type="text" name="title" placeholder='Tarea' onChange={ e=> void setTitle(e.target.value)} />
            <button onClick={clickHandler}> <MdAdd size={40}/> </button>
        </div>
    </form>
  )
}

export default Form
