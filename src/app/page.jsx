import React from 'react'
import logo from '/public/images/logonew.png'
import pizza from '/public/images/burger.png'
import burger from '/public/images/pizza.png'
import boy from '/public/images/boy.png'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    
      <div className='content-center min-h-screen min-w-[100%]  bg-[#ffc83a]  '>
        <div className='flex flex-col justify-center pl-10'>
          <Image className='pt-[70px]' src={logo} alt='my-logo' height='200' width='200'/>
          <h1 className='lg:text-6xl xl:text-8xl text-5xl font-cabin text-white font-bold mt-[15px]'> Food for <br/>Everyone</h1>
        </div>
        <div className='flex flex-row h-[auto] justify-center w-[auto] mt-8'>
          <div className='flex pt-20 flex-col'>
            <div>
              <Image src={burger} alt='pizza-slice' height='119' width='131'/>
            </div>
            <div className=''>
              <Image src={pizza} alt='pizza-slice' height='124' width='155'/>
            </div>
          </div>
          <div className=' flex'>
            <Image src={boy} alt='pizza-slice' height='395' width='241'/>
          </div>
        </div>
        <div className='flex justify-center  text-[#ffc83a] py-[3rem]'>
          <Link href='./Account/Login'>
            <button className='w-[314px] h-[70px] lg:h-[80px] lg:w-[360px] xl:w-[380px] xl:h-[85px] rounded-[30px] bg-white hover:bg-[#ffc83a] hover:text-white hover:border-white hover:border-2'>Get Started</button>
          </Link>
        </div>
      </div>
  
  )
}
