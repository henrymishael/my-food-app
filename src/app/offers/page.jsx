import React from 'react'
import BackArrow from '../backarrow'


export default function page() {
  return (
    <div className='bg-[#f5f5f8] h-screen w-[100%] pt-8 px-8'>
    <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
        <BackArrow/>
    </div>
    <div className='mt-8'>
        <h1 className='text-[34px] font-semibold'>
            My Offers
        </h1>
    </div>
    <div className='flex flex-col justify-center place translate-y-[200%] '>
        <h1 className='text-[28px] font-medium '>Ohh snap! No offers yet</h1>
        <p className='text-[17px] font-normal text-center xl:text-left lg:text-left'>Mishael does not have any offers yet please check again</p>
    </div>
    </div>
  )
}
