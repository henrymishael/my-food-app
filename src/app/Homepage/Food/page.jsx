'use client';
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { CgShoppingCart } from "react-icons/cg"
import { RiSearchLine } from "react-icons/ri"
import { AiFillHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import Image from 'next/image'
import foodList from '../../fooditems'
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { cartState } from '@/app/atoms/cartState';





const homePage = () => {
    const [cartItem, setCartItem] = useRecoilState(cartState)

    const addItemToCart = () => {
        if(cartItem.findIndex(pro => pro.id === params.id) === -1){
          setCartItem(prevState => [...prevState, params])
        }else{
          setCartItem(prevState => {
          return prevState.map((item) => {
            return item.id === params.id ? {...item, quantity: item.quantity + 1} : item
          })
        })
      }
      }
   
         const menus = foodList.foodItems.map(foodItem => (
    <div  key={foodItem.id} className=' flex flex-col items-center text-center h-[321px] w-[220px] mt-[50px] ml-[50px] bg-transparent'>
        <div className=' w-[164px] h-[164px] rounded-[100%] bg-transparent mb-[-113px] z-[1]'>
            <Link  href={`/details/${foodItem.slug}`}>
                <Image className='w-[100%] h-[100%]' src={foodItem.image} alt='' /></Link>
        </div>
        <div className='  flex text-center  w-[220px] h-[270px] bg-white rounded-[30px] '> 
            <div className='translate-y-[50%] m-auto text-center   font-semibold'>
                <h1 className='text-[22px] ' >{foodItem.name} </h1>
                <h2 className='pt-3 text-[17px] text-[#ffc83a]'>{foodItem.price}</h2>
            </div>
        </div>    
    </div> 
        ))
return (

    <div className='w-[100%] min-h-screen pt-[2.5rem]'>
        <div className=' text-2xl flex flex-row justify-between m-auto w-[100%] px-8 '>
            <Link href='./Homepage/Sidebar'>
                <RxHamburgerMenu/>
            </Link>
            <div className='relative'>
            <Link href='../../Cart'>
            <div >
                <CgShoppingCart/>{cartItem.length >= 1 ?
                <span className=' absolute -top-1 left-3 text-[13px] bg-red-600 h-[16px] w-[16px] rounded-full flex items-center justify-center text-white font-semibold '>{cartItem.length}</span>: []}
                
            </div>
            </Link>
            </div>
        </div>
        <div>
            <h1 className='size text-[34px] font-cabin text-black font-bold ml-[50px] mt-[43px]'>Delicious <br/>food for you
            </h1>
        </div>
        <Link href='../search'>
            <div className='flex flex-row items-center mt-[28px] min-w-[314px] bg-[#ededed] mx-11 rounded-[30px] m-auto'>
            <span className=' text-[#727272] pl-5 flex text-2xl pr-3'>
                <RiSearchLine/>
            </span>
            <input  className='bg-transparent h-[60px]  outline-none border-none placeholder:text-[14px]' type='text' placeholder='Search' />
            </div>
        </Link>
        <div className='flex flex-row mt-[46px] justify-center text-[17px] font-semibold text-[#9a9a9d]'>
            <div>
                <button className='min-w-[87px] border-b-2 border-[#ffc83a] text-[#ffc83a] p-1'>Foods
                </button>
            </div>
            <div>
                <button className='min-w-[87px] pl-5 p-1'>Drinks</button>
            </div>
            <div>
                <button className='min-w-[87px] p-1 pl-5'>Snacks</button>
            </div>
            <div>
                <button className='min-w-[87px] p-1 pl-5'>Sauce</button>
            </div> 
        </div>
        <div className='overflow-x-auto flex flex-row scrollbar-hide'>
            {menus}
        </div>
        <div className='flex flex-row my-8 h-[40px] translate-y-[50%] justify-around text-[28px] text-[#adadaf]'>
           <span className='text-[#ffc83a] shadow-[#ffc83a]'> 
            <AiFillHome/> 
           </span>
           <MdOutlineFavoriteBorder/>
           <BiUser/>
           <MdHistory/>
        </div>
    </div>

  )
}
export default homePage


  
