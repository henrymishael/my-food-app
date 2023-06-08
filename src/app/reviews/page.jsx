import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import BackArrow from '../backarrow';
import thumbs from '../../../public/images/thumbs.png'

export default function page() {
  return (
    <div className='bg-[#f5f5f8] h-screen w-[100%] pt-10 px-8'>
        <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
            <BackArrow/>
            <h4 className=' mt-[-2px] m-auto font-semibold text-[18px]'>Reviews</h4>
        </div>
        <div className='flex flex-col pt-[190px] items-center '>
            <Image src={thumbs} alt='' w='121' h='121'/>
           
            <h2 className='text-[28px] font-semibold pt-[38px] leading-none'>No Review yet</h2>
            
        </div>
        <div className='flex justify-center pt-[288px] text-white font-semibold text-[17px]'>
            <Link href='./Account/Login'>
              <button className='w-[314px] h-[70px]   rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#ffc83a] hover:border-2    '>Start Ordering</button>
            </Link>
        </div>
    </div>
    
  )
}
