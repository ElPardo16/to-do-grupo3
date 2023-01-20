import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Form from '../components/Form'
import React, {useState} from 'react'
import Header from '../components/Header'
import ListTask  from '../components/ListTask'
import Modal from '../components/Modal'

export default function Home() {

const [show, setShow] = useState(false)

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
        <ListTask tasks={[]}/>
        <Card title='hola andres' />
        <Card title='hola andres' type={0}/>

      </main>

      {show && <Modal funModal={setShow}/> }
    </div>
  )
}
