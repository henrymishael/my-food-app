'use client';
import { getCartItems, removeFromCart } from './cart';
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineMinus} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import { MdOutlineSwipeLeft } from "react-icons/md";
import Image from 'next/image';
import BackArrow from '../backarrow';
import { useParams } from 'next/navigation';
import special from '../../../public/images/special.png'
import beans from '../../../public/images/beans.png'
import plantain from '../../../public/images/plantain.png'
import mac from '../../../public/images/mac.png'


const cartPage = (params) => {
    const cartItems = getCartItems();
    const router = useParams();


const handleRemoveFromCart = () => {
    removeFromCart(cartItems);
    alert(`${cartItems.name} has been removed cart`)
}
    

const [count, setCount] = useState(1)
const cartDisplay = cartItems.map((item) => (
        <div key = {item.id} className='w-[314px] h-[102px] bg-white m-auto mt-[18px] rounded-[20px] flex flex-row shadow-2xl'>
            <div  className='align-middle translate-y-[15%] pl-[16px]'>
                <Image src={item.image} alt='' width='70' height='70' />
            </div>
            <div className='flex flex-col place-content-center text-center text-[17px] font-semibold h-[100%]'>
                <h2>{item.name && item.name.length > 15 ? item.name.substring(0,15) + '...' : item.name}</h2>
                <h2 className='text-[#ffc83a] mt-0.5'>{item.price}</h2>
            </div>
            <div className='flex h-[100%]'>
                <div className='p-[.1rem] flex flex-row justify-center w-[52px] bg-[#ffc83a] h-[20px] rounded-[30px] translate-y-[280%] ' >
                <button onClick = {() =>{setCount(count + 1)}} className='text-[15px] font-bold'>      <AiOutlinePlus/>
                </button>
                <h2 className='px-1 flex items-center text-[15px] font-bold'>{count > 0 ? count : handleRemoveFromCart(item.name)}</h2>
                <button onClick = {() => {setCount(count - 1)}} className='text-[15px] font-bold'>
                    <AiOutlineMinus/>
                </button>
                </div>
            </div>
        </div>
    ))
    

    return(

    <div className='pt-[3.5rem] px-6 w-[100%] min-h-screen'>
        <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
        <BackArrow/>
        <h1 className=' mt-[-2px] m-auto font-semibold text-[18px]'>Cart</h1>
        </div>
        <div className='flex flex-row justify-center mt-[2.5rem]'>
            <span className='text-[20px] -rotate-45'><MdOutlineSwipeLeft/></span>
            <h2 className='text-[10px]'>Swipe on an item to delete</h2>
        </div>
            {cartDisplay}
        <div className='flex justify-center  text-white translate-y-[500%]'>
            <Link href='./Cart'>
              <button className='w-[314px] h-[70px] rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#413e39]  hover:border-2 '>Add to Cart</button>
            </Link>
        </div>
    </div>
  
    )
    
}

export default cartPage
