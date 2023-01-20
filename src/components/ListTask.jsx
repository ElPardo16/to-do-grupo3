import React from 'react'
import Card from './Card'

export default function ListTask ({tasks, type=0}){
  const filterTask = tasks.filter(({status})=>status===type)
  return (
    <div className='list'>
        {
          filterTask !== [] ? filterTask.map(({title})=><Card title={title} type={type}/>)
          :<h2>Vacio</h2>
        }

    <Card title="title" type={0}/>
    <Card title="title" type={0}/>
    <Card title="title" type={0}/>
    <Card title="title" type={0}/>


    </div>
  )
}
