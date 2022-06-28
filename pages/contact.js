import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Message from '../components/Message'
import Sponsors from '../components/Sponsors'

export default function Contact() {
  return (
    <>
    <Navbar/>
    <Message/>
    <Sponsors/>
    <Footer/>
    </>
  )
}
