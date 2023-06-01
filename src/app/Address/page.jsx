import React from 'react'
import BackArrow from '../backarrow'
import Link from 'next/link'

export default function () {
  return (
    <div className='bg-[#f5f5f8] min-h-screen w-[100%] pt-10 px-8'>
        <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
            <BackArrow/>
            <h1 className=' mt-[-2px] m-auto font-semibold text-[18px]'>Address</h1>
        </div>
        <div className='pt-10 flex flex-col'>
            <h1 className='text-[34px] font-semibold'>Delivery</h1>
            <div className='flex flex-row pt-11 justify-between w-[100%]'>
                <h2 className='text-[17px] font-semibold'>
                    Address details
                </h2>
                <h2 className='text-[15px] font-normal'>
                    change
                </h2>
            </div>
            <div className='px-10 py-[1.5rem]  flex flex-col mt-5 min-w-[314px] h-[156px] bg-white rounded-[20px]'>
                <span className='min-w-[232px] h-[40px] border-b-[0.5px] border-black'>
                    <h1 className='text-[17px] font-semibold '>Henry Mishael</h1>
                </span>
                <span className='text-[15px] min-w-[232px] h-[40px] border-b-[0.5px] border-black pt-1'>
                    <h3>Lagos, Nigeria</h3>
                </span>
                <span className='text-[15px] min-w-[232px] h-[40px] border-b-[0.5px] border-black pt-1'>
                    <h3>+2348115173291</h3>
                </span>
            </div>
        </div>
        <div className=' flex justify-center  text-[#ffffff]  py-10 '>
          <Link href='./checkout'>
            <button className='w-[314px] h-[70px] lg:h-[80px] lg:w-[360px] xl:w-[380px] xl:h-[85px] rounded-[30px] bg-[#ffc83a] hover:bg-[#ffffff] hover:text-[#ffc83a] hover:border-white hover:border-2'>Confirm Address</button>
          </Link>
        </div>
    </div>
  )
}
