import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Timeline from '../components/Timeline'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
    <Navbar/>
    {/* <Content/> */}
    <Timeline/>
    <Sponsors/>
    <Footer/>
    </>
  )
}
