import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
import Header from '../components/Header'

export default function Home({listTask}) {

  const [tasks, setTasks] = useState(listTask)

  console.log(listTask)

  return (
    <div className='app'>
      <Head>
        <title>To-do</title>
        <meta name="description" content="Aplicacion todo list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>

        <Form/>
        <Card title='hola andres' />
        <Card title='hola andres' type={0}/>
      </main>
      
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/task')
    const json = await response.json()
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
