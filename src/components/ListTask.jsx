import React from 'react'
import Card from './Card'
// filters the tasks in the database and shows them in 3 different types
export default function ListTask ({tasks, type = 0, txt = ""}){
  const filterTask = tasks.filter(({status}) => status === type).reverse()
  return (
    <div className="list">
        {
          (filterTask.length !== 0)? filterTask.map(item => <Card key={item._id} task={item} type={type}/>)
          :<h2>No hay tareas {txt}</h2>
        }

    </div>
  )
}
