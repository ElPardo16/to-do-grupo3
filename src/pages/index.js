import Head from 'next/head'
import Image from 'next/image'
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
      
    </div>
  )
}
