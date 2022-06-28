import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Schedule from '../components/Schedule'
import ScheduleItem from '../components/ScheduleItem'
import Table from '../components/Table'
import Sponsors from '../components/Sponsors'

export default function Fixtures() {
  return (
    <>
    <Navbar/>
    <Schedule/>
    <Sponsors/>
    <Footer/>
    </>
  )
}
