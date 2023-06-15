'use client';
import Head from 'next/head';
import './globals.css'
import { Inter } from 'next/font/google'
import { RecoilRoot } from 'recoil'



const inter = Inter({ subsets: ['latin'] , display:'swap'})

const metadata = {
  title: 'My Food App',
  description: 'First project',
}

export default function RootLayout({ children }) {
  return (
  <RecoilRoot>
    <html lang="en" className={inter.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes='any' />
        <title>Aptech</title>
      </Head>
      <body className={inter.className}>
        <div className=' flex justify-center min-h-screen min-w-[360px] m-auto bg-[#f2f2f2] shadow-2xl border-4 border-white sm:min-h-[100%] sm:w-[100%] md:min-h-[100%] md:w-[100%] lg:min-h-[100%] lg:w-[100%]
        xl:hidden  2xl:hidden'>    
        {children}
        </div>
      </body>
    </html>
  </RecoilRoot>
  )
}
