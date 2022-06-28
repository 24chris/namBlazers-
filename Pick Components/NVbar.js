import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



export default function NVbarr(){
    return(
      <>
        <Head>
        <title>Nam Blazers</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="text-gray-700 body-font border-b border-gray-200">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            {/* <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/" target="_blank"> */}
            <Image src="/fieldlogo.png" alt="" width={100} height={50}></Image>
            {/* </Link> */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {/* <Link href ="/login">
          <a className="mr-5 hover:text-gray-900">Login</a>
          </Link>
          <Link href="/register">
          <a className="mr-5 hover:text-gray-900">Register</a>
          </Link> */}
        </nav>
        </div>
      </header>
</>

    
    )
}