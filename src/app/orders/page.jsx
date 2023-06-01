import Link from 'next/link';
import React from 'react'
import { CgShoppingCart } from "react-icons/cg"
import BackArrow from '../backarrow';

export default function page() {
  return (
    <div className='min-h-screen w-[100%] bg-white pt-10 '>
        <div className='flex flex-row  '>
            <span className='text-[24px] font-semibold pl-[40px]'><BackArrow/></span>
            <h2 className='text-[18px] font-semibold pl-[110px] '>Orders</h2>
        </div>
        <div className='flex flex-col pt-[190px] items-center '>
            <span className='text-[106px] text-[#c7c7c7]'><CgShoppingCart/></span>
            <h2 className='text-[28px] font-semibold pt-[12px] leading-none'>No orders yet</h2>
            <h3 className='text-[17px] text-center pt-[16px] leading-[1.2em] '>Hit the button down below <br/>
            to create an order</h3>
        </div>
        <div className='flex justify-center py-36 text-white font-semibold text-[17px]'>
            <Link href='./Homepage/Food'>
              <button className='w-[314px] h-[70px]   rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#ffc83a] hover:border-2    '>Start Ordering</button>
            </Link>
        </div>
    </div>
  )
}
