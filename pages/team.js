import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TeamGuys from '../components/TeamGuys'
import Sponsors from '../components/Sponsors'
import TeamNew from '../components/TeamNew'

export default function Team() {
  return (
    <>
    <Navbar/>
    <TeamNew/>
    <Sponsors/>
    <Footer/>
    </>
  )
}
