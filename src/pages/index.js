import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Form from '../components/Form'
import Header from '../components/Header'

export default function Home() {

  

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
