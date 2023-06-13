'use client';
import React, { useEffect, useState } from 'react'
import BackArrow from '../backarrow'
import {FiClock} from 'react-icons/fi'
import {BiMap} from 'react-icons/bi'
import {FiPhoneCall} from 'react-icons/fi'
import profile from '../../../public/images/profile.jpeg'
import map from '../../../public/images/map.png'
import Image from 'next/image';
import Link from 'next/link';








export default function page() {

 const [newName, setNewName] = useState('')
 const [newAddress, setNewAddress] = useState("")
  // const savedName = localStorage.getItem('name')

  useEffect(() => {
    const savedProfileName = localStorage.getItem('newName')
    if (savedProfileName){
      setNewName(savedProfileName)
    }
    const savedProfileAddress = localStorage.getItem('newAddress')
    if (savedProfileAddress){
      setNewAddress(savedProfileAddress)
    }
  })
  return (
      <div className='flex flex-col min-h-screen w-[100%] pt-10 bg-cover bg-center h-screen' style={{ backgroundImage:{map} }}>
        <div className='flex flex-grow min-w-[186px] justify-between  text-[24px] px-8'>
          <BackArrow/>
        </div>
      <div className=' mt-auto w-[100%] bg-white min-h-[50vh] rounded-tr-[20px] rounded-tl-[20px] pt-6 px-8'>
        <div className=' flex flex-row items-center'>
            <div className='flex justify-center items-center text-[12px] rounded-full bg-[#ffc83a] h-[30px] w-[30px]'>
              <FiClock/>
            </div>
            <div className='ml-4 text-[12px]'>
              <h2 className='text-[#9d9d9d]'>Delivery Time</h2>
              <h2>03:00PM (Max 20min)</h2>
            </div>
        </div>
        <div className='border-l-2 border-dashed border-[#ffc83a] h-[46px] w-[100%] ml-3 my-3'>

        </div>
        <div  className='m-auto flex flex-row items-center'>
          <div className='flex justify-center items-center text-[12px] rounded-full bg-[#ffc83a] h-[30px] w-[30px]'>
              <BiMap/>
          </div>
          <div className='ml-4 text-[12px]'>
            <h2 className='text-[#9d9d9d]'>Delivery Address</h2>
            <h2>{newAddress}</h2>
          </div>
        </div>
        <div className='flex flex-row items-center  justify-between w-[100%] h-[103px] bg-[#f2f1f1] px-3 mt-8 rounded-[20px]'>
          <div className='flex items-center justify-center rounded-full h-[60px] w-[60px] bg-white'>
            <Image className='rounded-full' src={profile} alt='profile-picture' height={50} width={50} />
          </div>
          <h2 className='text-[18px] font-semibold'>{newName}</h2>
          <div className='flex justify-center items-center text-white text-[30px] rounded-full h-[60px] w-[60px] bg-black'>
            <FiPhoneCall/>
          </div>
        </div>
        <div className='flex justify-center  text-white my-6'>
            <Link href='./checkout'>
              <button className='w-[314px] h-[70px] rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#413e39]  hover:border-2 '>Proceed to Payment</button>
            </Link>
        </div>
      </div>
      </div>
    
  )
}




