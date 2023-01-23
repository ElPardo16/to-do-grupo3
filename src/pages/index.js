import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Form from '../components/Form'
import Header from '../components/Header'
import ListTask from '../components/ListTask'
import Modal from '../components/Modal'
import { setTask } from '../utils/taskSlice'
import { getData } from '../utils/tools'

export default function Home({ listTask }) {

  const tasks = useSelector(state => state.task.listT)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTask(listTask))
  }, [])

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
      <Header />
      <main>

        <Form funModal={setShow} />
        <section>
          <div className="con_list">
            <h1>Tareas</h1>
            <ListTask tasks={tasks} />
          </div>
          <div className="con_list">
            <h1>Terminadas</h1>
            <ListTask tasks={tasks} type={1} txt="terminadas" bg='check'/>
          </div>
        </section>

      </main>

      {show && <Modal funModal={setShow} tasks={tasks} />}
    </div>
  )
}

// fetches data at the server level, gets the data and sends
// it to the front end as a prop but rendered. 

export async function getServerSideProps() {
  try {
    const json = await getData()
    return {
      props: {
        listTask: json
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        listTask: []
      }
    }
  }
}
