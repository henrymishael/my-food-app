import React from 'react'
import {BiNotepad} from "react-icons/bi";
import Link from 'next/link';
import BackArrow from '../backarrow';

export default function historyPage() {
  return (
    <div className='h-[100%] bg-white pt-[60px] '>
        <div className='flex flex-row  '>
            <span className='text-[24px] font-semibold pl-[40px]'><BackArrow/></span>
            <h2 className='text-[18px] font-semibold pl-[110px] '>History</h2>
        </div>
        <div className='flex flex-col pt-[190px] items-center '>
            <span className='text-[106px] text-[#c7c7c7]'><BiNotepad/></span>
            <h2 className='text-[28px] font-semibold pt-[12px] leading-none'>No history yet</h2>
            <h3 className='text-[17px] text-center pt-[16px] leading-[1.2em] '>Hit the button down below <br/>
            to create an order</h3>
        </div>
        <div className='flex justify-center pt-[277px] text-white font-semibold text-[17px]'>
            <Link href='./Account/Login'>
              <button className='w-[314px] h-[70px]   rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#ffc83a] hover:border-2    '>Start Ordering</button>
            </Link>
        </div>
    </div>
  )
}
