import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Form from '../components/Form'
import Header from '../components/Header'
import ListTask  from '../components/ListTask'
import Modal from '../components/Modal'
import { setTask } from '../utils/taskSlice'
import { getData } from '../utils/tools'

export default function Home({listTask}) {

  const tasks = useSelector(state => state.task.listT) 
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setTask(listTask))
  },[])

  /* useEffect(() => {
    dispatch(setTask(listTask))
  },[tasks]) */

  return (
    <div className='app'>
      <Head>
        <title>To-do</title>
        <meta name="description" content="Aplicacion todo list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>

        <Form funModal={setShow}/>
        <ListTask tasks={tasks}/>

      </main>

      {show && <Modal funModal={setShow} tasks={tasks}/> }
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const json = await getData()
    return {
      props:{
        listTask:json
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props:{
        listTask:[]
      }
    }
  }
}
