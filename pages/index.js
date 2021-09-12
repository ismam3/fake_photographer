import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <head>
        <title>Fake photography</title>
      </head>
      <Navbar></Navbar>
      <Header></Header>
    </div>
  )
}
