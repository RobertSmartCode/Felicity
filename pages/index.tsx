import Head from 'next/head'
import Navbar from "../component /Navbar"
import Carrusel from "../component /Carrusel"
import Cuerpo from "../component /Cuerpo"
import Footer from "../component /Footer"

export default function Home() {

  
  return (
    <>
     <Head>
        <title>Felicity</title>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </Head>
    <Navbar/>
    <Carrusel/>
    <Cuerpo/>
    <Footer/>
    </>
  )
}