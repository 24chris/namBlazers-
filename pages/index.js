import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
// import FeatureSection from '../components/FeatureSection'
import Hero from '../components/Hero'
import CTA from '../components/CTA'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'
// import { PrismaClient } from '@prisma/client'
// import prisma from "../lib/prisma";


import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

export default function Home({articles}) {

  
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
              Latest Stories
            </p>
          </div>
          {/* <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
        {articles.map((article) =>(
           <div key={article.id} >
           <div className="flex w-full h-full flex-wrap bg-gray-500 overflow-hidden rounded">
             <div className="w-full">
               <Image
                 className="object-cover h-full w-full"
                 alt="blog image"
                 width={378}
                 height={248}
                 src={article.imageSrc}
               />
             </div>
             <div className="w-full p-5">
               <h2 className="text-white leading-normal text-lg">
                {article.name}
               </h2>
               <div className="flex flex-wrap justify-between items-center mt-6">
                 <div className="inline-flex items-center">
                   <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                     <Image
                       className="object-cover h-full w-full"
                       width={50}
                       height={50}
                       alt="author image"
                       src={article.imageSrc}
                     />
                   </div>
                   <div className="flex-1 pl-2">
                     <h2 className="text-white mb-1">{article.name}</h2>
                     <p className="text-white opacity-50 text-xs">May 18</p>
                   </div>
                 </div>
                 <span className="text-white opacity-50">
                   <svg
                     className="fill-current w-5 h-5"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 459 459"
                   >
                     <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                   </svg>
                 </span>
               </div>
             </div>
           </div>
         </div>
        ))}  
        </dl>
      </div> */}
        </div>
      </div>
      
    <CTA/>
    <Sponsors/>
    <Footer/>
    </>
  )
}


// Fetch all blog posts
export async function getStaticProps() {
  // const prisma = new PrismaClient() if active use PrismaClient import
  const articles = await prisma.articles.findMany({
    select:{
      name:true,
      description:true,
      imageSrc:true
    }
  })
  return{
    props:{articles}
  }
}

