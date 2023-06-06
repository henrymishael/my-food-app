import React from 'react'
import {BiUserCircle} from "react-icons/bi";
import {BiCartDownload} from "react-icons/bi";
import {MdOutlineLocalOffer} from "react-icons/md";
import {IoDocumentTextOutline} from "react-icons/io5";
import {MdOutlineSecurity} from "react-icons/md";
import {BsArrowRight} from "react-icons/bs";
import '../../../app/globals.css'
import BackArrow from '@/app/backarrow';
import Link from 'next/link';

export default function sideBar() {
  return (
    <div className='bg-[#ffc83a] h-[100%] pl-[40px] slide-in w-[100%]'>
        <div className=' text-[24px] pt-[50px] font-bold  '>
            <BackArrow />
        </div> 
        <div className='flex flex-row pb-[26px] pt-[77px] border-b-2 border-black w-[165px]'>
            <span className='text-[24px]'><BiUserCircle /></span>
            <Link href='../profile'>
                <h2 className='text-[17px] font-semibold pl-[12px]'>Profile</h2>
            </Link>
        </div>
        <div className='flex flex-row py-[26px] border-b-2 border-black w-[165px]'>
            <span className='text-[24px]'>
                <BiCartDownload/>
            </span>
            <Link href='../orders'>
                <h2 className='text-[17px] font-semibold pl-[12px]'>
                Orders
                </h2>
            </Link>
        </div>
        <div className='flex flex-row py-[26px] border-b-2 border-black w-[165px]'>
            <span className='text-[24px]' >
                <MdOutlineLocalOffer/>
            </span>
            <Link href='../offers'>
                <h2 className='text-[16px] font-semibold pl-[12px]'>
                    Offer and Promo
                </h2>
            </Link>
        </div>
        <div className='flex flex-row py-[26px] border-b-2 border-black w-[165px]'>
            <span className='text-[24px]'>
                <IoDocumentTextOutline/>
            </span>
            <h2 className='text-[16px] font-semibold pl-[12px]'>
                Privacy policy
            </h2>
        </div>
        <div className='flex flex-row py-[26px] border-b-2 border-black w-[165px]'>
            <span className='text-[24px]'>
                <MdOutlineSecurity/>
            </span>
            <h2 className='text-[16px] font-semibold pl-[12px]'>
                Security
            </h2>
        </div>
        <div className='pt-[15rem] pb-10 text-[17px] font-semibold flex flex-row'>
            <Link href=''>
            <h2>
                Sign Out
            </h2>
            </Link>
            <span className='text-[24px] pl-1'>
                <BsArrowRight/>
            </span>
        </div>
    </div>
  )
}
