import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Shows from './show/index'

export default function Home() {
  return ( <div>
    <h1>Hola mundo, esto es mi primer demo con nextjs</h1>
    <Shows></Shows>
  </div>
  )
}
