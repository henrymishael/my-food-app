'use client';
import React from 'react'
import BackArrow from '../backarrow'
import {BiRadioCircleMarked} from 'react-icons/bi'
import {BiRadioCircle} from 'react-icons/bi'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsBank} from 'react-icons/bs'
import {IoCashOutline} from 'react-icons/io5'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { cartState } from '../atoms/cartState';


export default function page() {

   
    const [cartItem, setCartItem] = useRecoilState(cartState)
  ;
// to calculate price of items in cart
  const totalPrice = cartItem.reduce((price, item)=> price + item.quantity * item.price, 0)

  function payment_confirmation() {
    confirm(`Please confirm Payment ₦${totalPrice}`)
  }
  
  return (
    <div className='bg-[#f5f5f8] min-h-screen w-[100%] pt-10 px-8'>
        <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
            <BackArrow/>
            <h1 className=' mt-[-2px] m-auto font-semibold text-[18px]'>Checkout</h1>
        </div>
        <div className='pt-10'>
            <h1 className='text-[2.13rem] font-semibold'>
                Payment
            </h1>
            <form>
            <fieldset id='payment1'>
            <div className='flex flex-col pt-12 w-[100%]'> 
                <h3 className='text-[17px] font-semibold
                '>
                    Payment method
                </h3>
                <div className='mt-6 ml-5 min-w-[314px] '>
                    <span className='flex flex-row items-center min-w-[314px] '>
                        <input type="radio" name='payment1'/>
                        <div className='flex flex-row items-center border-b-[0.5px] border-black my-1 min-w-[232px] h-[50px] mx-3'>
                            <div className='h-[40px] w-[40px] bg-[#f47b0a] rounded-[10px] flex items-center justify-center text-white text-[20px] mr-3'><BsCreditCard2Front/></div>
                            <h2>Card</h2>
                        </div>
                    </span>
                    <span className='flex flex-row items-center min-w-[314px] h-[50px] '>
                        <input type="radio" name='payment1' required/>
                        <div className='flex flex-row items-center border-b-[0.5px] border-black my-1 min-w-[232px] h-[50px] mx-3'>
                            <div className='h-[40px] w-[40px] bg-[#eb4796] rounded-[10px] flex items-center justify-center text-white text-[20px] mr-3'><BsBank/>
                            </div>
                            <h2>Mobile Pay</h2>
                        </div>
                    </span>
                    <span className='flex flex-row items-center min-w-[314px] h-[50px] '>
                        <input type="radio" name='payment1'/>
                        <div className='flex flex-row items-center border-b-[0.5px] border-black my-1 min-w-[232px] h-[50px] mx-3'>
                            <div className='h-[40px] w-[40px] bg-[#ffc83a] rounded-[10px] flex items-center justify-center text-white text-[20px] mr-3'><IoCashOutline/></div>
                            <h2>Cash on Delivery</h2>
                        </div>  
                    </span>
                </div>
            </div>
            </fieldset>
            </form>
            <form>
                <fieldset id='payment2'>

            <div className='mt-8 '>
                <h1 className='text-[17px] font-semibold '>
                    Delivery method
                </h1>
                <div className='bg-white min-w-[314px] h-[156px] rounded-[20px] mt-5 px-6 py-7'>
                    <div className='flex flex-row min-w-[262px] h-11 items-center'>
                    <input type="radio" name='payment2' aria-required/>
                        <h2 className=' min-w-[232px] border-b-[0.5px] border-black pb-3 ml-3 ' >
                            Door Delivery
                        </h2>
                    </div>
                    <div className='flex flex-row min-w-[262px] h-11 items-center pt-4'>
                    <input type="radio" name='payment2'/>
                        <h2 className='ml-3'>
                            Pick up
                        </h2>
                    </div>
                </div>
                <div className='flex flex-row justify-between mt-6'>
                    <h3 className='text-[20px] font-bold'>Total</h3>
                    <h1 className='text-[22px] font-semibold'>₦{totalPrice}</h1>
                </div>
            </div>
            </fieldset>
            </form>
            <div className=' flex justify-center  text-[#ffffff]  py-6 '>
          <Link href='./success'>
            <button onClick={payment_confirmation} className='w-[314px] h-[70px] lg:h-[80px] lg:w-[360px] xl:w-[380px] xl:h-[85px] rounded-[30px] bg-[#ffc83a] hover:bg-[#ffffff] hover:text-[#ffc83a] hover:border-white hover:border-2 cursor-pointer'>Pay Now</button>
          </Link>
        </div>
        </div>
        

    </div>
  )
}
