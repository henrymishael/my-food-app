import React from 'react'
import BackArrow from '../backarrow'
import Image from 'next/image'
import profile from '../../../public/images/profile.jpeg'
import {FiChevronRight} from 'react-icons/fi'
import Link from 'next/link'

export default function page() {
  return (
    <div className='bg-[#f5f5f8] min-h-screen w-[100%] pt-8 px-8'>
        <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
            <BackArrow/>
        </div>
        <div className='mt-8'>
            <h1 className='text-[34px] font-semibold'>
                My Profile
            </h1>
        </div>
        <div className='flex flex-row justify-between mt-8 '>
            <h1 className='font-semibold text-[18px]'>
                Personal details
            </h1>
            <Link href='./edit'>
                <h1>
                    change
                </h1>
            </Link>
        </div>
        <div className='flex flex-row justify-between min-w-[315px] h-[197px] rounded-[20px] bg-white mt-2 px-4'>
            <div className='flex flex-row items-center '>
                <Image className='rounded-[90%]' src={profile} alt='' width={92} height={92}/>
            </div>
            <div className='flex flex-col justify-center
            '>
                <input className='border-b-[1px] border-black outline-none' type="text" placeholder='Henry Mishael'  />
                <span className='min-w-[165px] border-black border-b-[0.5px] py-1'>
                    <h2 className='text-[11px]'>Henrymishael.hm@gmail.com</h2>
                </span>
                <span className='min-w-[165px] border-black border-b-[0.5px] py-1'>
                    <h3 className='text-[15px]'>+2348115173291</h3>
                </span>
                <span   className='min-w-[165px] border-black border-b-[0.5px] py-1'>
                    <h3 className='text-[15px]'>Surulere, Lagos</h3>
                </span>
            </div>
            
        </div>
        <div className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6'>
            <h2 className='font-semibold text-[18px]'>Orders</h2>
            <Link href='./orders'>
                <span className='text-[24px]'>
                    <FiChevronRight/>
                </span>
            </Link>
        </div>
        <div className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6'>
            <h2 className='font-semibold text-[18px]'>
                    Pending reviews
            </h2>
            <Link href='./reviews'>
                <span className='text-[24px]'>
                    <FiChevronRight/>
                </span>
            </Link>
        </div>
        <div className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6'>
            <h2 className='font-semibold text-[18px]'>Faq</h2>
            <span className='text-[24px]'>
                    <FiChevronRight/>
            </span>
        </div>
        <div  className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6'>
            <h2 className='font-semibold text-[18px]'>Help</h2>
            <span className='text-[24px]'>
                    <FiChevronRight/>
            </span>
        </div>
    </div>
  )
}
