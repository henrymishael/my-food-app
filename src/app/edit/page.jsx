import React from 'react'
import BackArrow from '../backarrow'
import Image from 'next/image'
import profile from '../../../public/images/profile.jpeg'
import {BiRadioCircleMarked} from 'react-icons/bi'
import {BiRadioCircle} from 'react-icons/bi'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsBank} from 'react-icons/bs'
import Link from 'next/link'

export default function page() {
  return (
    <div className='bg-[#f5f5f8] h-screen w-[100%] pt-10 px-8'>
        <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
            <BackArrow/>
            <h1 className=' mt-[-2px] m-auto font-semibold text-[18px]'>My Profile</h1>
        </div>
        <div className='mt-10'>
            <h3 className='text-[17px] font-semibold'>Infomation</h3>
        </div>
        <div className='flex flex-row min-w-[315px] h-[133px] bg-white rounded-[20px] mt-2 pl-4'>
            <div className='mr-4 flex items-center'>
                <Image className='rounded-[90%]' src={profile} alt='' width={70} height={70}/>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='font-semibold text-[18px]'>Henry Mishael</h1>
                <h3 className='text-[13px]'>Henrymishael.hm@gmail.com</h3>
                <h3 className='text-[13px]' >+2348115173291</h3>
            </div>
        </div>
        <form>
            <fieldset id='payment'>
        <div className='mt-6'>
            <h1 className='text-[17px] font-semibold'>Payment Methods</h1>
            <div className='flex items-center mt-4 min-w-[315px] h-[165px] bg-white rounded-[20px]'>
                <div className='ml-5 min-w-[314px] '>
                    <span className='pb-2 flex flex-row items-center min-w-[314px] '>
                        <input type="radio"  name='payment'/>
                        
                        <div className='flex flex-row pb-2 items-center border-b-[0.5px] border-black  min-w-[232px] h-[50px] mx-3'>
                            <div className='h-[40px] w-[40px] bg-[#f47b0a] rounded-[10px] flex items-center justify-center text-white text-[20px] mr-3'><BsCreditCard2Front/></div>
                            <h2>Card</h2>
                        </div>
                    </span>
                    <span className='flex flex-row items-center min-w-[314px] h-[50px] '>
                        <input type="radio"  name='payment' />
                        <div className='flex flex-row items-center min-w-[232px] h-[50px] mx-3'>
                            <div className='h-[40px] w-[40px] bg-[#eb4796] rounded-[10px] flex items-center justify-center text-white text-[20px] mr-3'><BsBank/>
                            </div>
                            <h2>Mobile Pay</h2>
                        </div>
                    </span>
                </div>
            </div>
        </div>
            </fieldset>
        </form>
        <div className=' flex justify-center  text-[#ffffff]  translate-y-[300%] '>
          <Link href='./profile'>
            <button className='w-[314px] h-[70px] lg:h-[80px] lg:w-[360px] xl:w-[380px] xl:h-[85px] rounded-[30px] bg-[#ffc83a] hover:bg-[#ffffff] hover:text-[#ffc83a] hover:border-white hover:border-2'>Update</button>
          </Link>
        </div>
    </div>
  )
}
