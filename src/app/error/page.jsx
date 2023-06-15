import Link from 'next/link';
import React from 'react'
import { TbWifiOff } from "react-icons/tb";

export default function page() {
  return (
    <div className='pt-[251px] flex flex-col items-center h-[100%] w-[100%] bg-white '>
        <div className=' flex flex-col items-center'>
            <span className='text-[200px] text-[#c7c7c7]'>
                <TbWifiOff/>
            </span>
            <h3 className='text-[17px] text-center pt-[16px] leading-[1.2em] font-semibold '>Your internet connection is currently<br/>
            not available please check or try again</h3>
        </div>
        <div className='flex justify-center pt-[56px] text-white font-semibold text-[17px]'>
            <Link href='./Account/Login'>
              <button className='w-[314px] h-[70px]   rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#ffc83a] hover:border-2    '>Try again</button>
            </Link>
        </div>    
    </div>
  )
}
