import React from 'react'
import Card from './Card'

export const ListTask = ({tasks, type=0}) => {
  return (
    <div className='list'>
        {tasks.filter(({status})=>status===type)
            .map(({title})=><Card title={title} type={type}/> )
        }

    <Card title="title" type={0}/>
    <Card title="title" type={0}/>
    <Card title="title" type={0}/>
    <Card title="title" type={0}/>


    </div>
  )
}
