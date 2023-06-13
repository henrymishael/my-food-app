
import React from 'react'
import BackArrow from '../backarrow'
import Image from 'next/image'
import complete from '../../../public/images/complete.gif'
import Link from 'next/link'

export default function page() {
  
  return (
    <div className='bg-white min-h-screen w-[100%] pt-8 px-8'>
      <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
        <BackArrow/>
      </div>
      <div className='mt-8'>
        <h1 className='text-[34px] font-semibold'>
            ORDER COMPLETED
        </h1>
      </div>
      <div className='mt-10 flex justify-center'>
        <Image src={complete} width={300} height={300} ></Image>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-[17px] font-semibold'>Review</h1>
        <p className='pt-6 text-[20px] font-semi
        '>Ratings 5.0 ⭐⭐⭐⭐⭐</p>
        <div className='flex flex-row items-center  w-[100%] bg-[#fbfbf3] rounded-[15px] mt-4 pl-4 m-auto '>
                <input onChange={handleChange} className='bg-transparent h-[60px]  outline-none border-none placeholder:text-[14px]' type='text' placeholder='Reviews' />
            </div>
      </div>
      <div className='flex flex-row justify-around py-10'>
        <Link href='../Homepage/Food'>
        <button className=' h-[70px] w-[150px] bg-[#ffc83a] rounded-[30px]  font-semibold'>
          Skip
        </button>
        </Link>
        <button className=' h-[70px] w-[150px] bg-[#ffc83a] rounded-[30px]  font-semibold '>
          Feedback
        </button>
      </div>
      
    </div>
  )
}
