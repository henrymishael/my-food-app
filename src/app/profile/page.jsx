'use client';
import React, { useEffect, useState } from 'react'
import BackArrow from '../backarrow'
import Image from 'next/image'
import profile from '../../../public/images/profile.jpeg'
import {FiChevronRight} from 'react-icons/fi'
import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdHistory } from "react-icons/md";


export default function page() {

    const [isEditing, setEditing] = useState(false)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        const savedName = localStorage.getItem('name')
        if (savedName){
          setName(savedName)
        }
        
        const savedAddress = localStorage.getItem('address')
        if (savedAddress){
          setAddress(savedAddress)
        }
      
        const savedNumber = localStorage.getItem('number')
        if (savedNumber){
          setNumber(savedNumber)
        }

        const savedEmail = localStorage.getItem('email')
        if (savedEmail){
          setEmail(savedEmail)
        }
       })

    function handleChange(e) {
        const new_name = e.target.value
        setName(new_name);
        localStorage.setItem('name', new_name)
      }
      function handleChange1(e) {
        const new_email = e.target.value
        setEmail(new_email);
        localStorage.setItem('email', new_email)
      }
    
      function handleChange2(e) {
        const new_number = e.target.value
        setNumber(new_number);
        localStorage.setItem('number', new_number)
      }

      function handleChange3(e) {
        const new_address = e.target.value
        setAddress(new_address);
        localStorage.setItem('address', new_address)
       
      }
    const viewTemplate = (
    <div >
        <div className='flex flex-row justify-between mt-8 '>
            <h1 className='font-semibold text-[18px]'>
                Personal details
            </h1>
                <h1 className='flex hover:bg-white hover:text-black rounded-[6px] text-[15px] font-normal border-[.5px] border-white bg-black text-white w-20 h-8 cursor-pointer justify-center item-center' onClick={()=> setEditing(true)}>
                    Edit
                </h1>
        </div>
        <div className='flex flex-row justify-around min-w-[100%] h-[197px] rounded-[20px] bg-white mt-2 px-2'>
            <div className='flex flex-row items-center mr-1 '>
                <Image className='rounded-[90%]' src={profile} alt='' width={92} height={92}/>
            </div>
            <div className='min-w-[50%] flex flex-col justify-center 
            '>
                <span className='flex flex-row items-center '>
                <input className=' outline-none border-none mb-2' type="text" placeholder='Henry Mishael' value={name}  />
                </span>
                <span className='h-[30px]  border-black border-b-[0.5px] py-1'>
                <input  className=' border-black outline-none' type='text'  placeholder='Email' value={email}/>
                </span>
                <span className=' h-[30px] border-black border-b-[0.5px] py-1'>
                <input   type='text' className=' border-black outline-none' placeholder='Phone Number' value={number}/>
                </span>
                <span   className='h-[30px]  border-black border-b-[0.5px] py-1'>
                <input    type='text' placeholder='Address' className='border-black outline-none' value={address}/>
                </span>
            </div>
        </div>
        </div>
        
    )

    const editTemplate = (
        <div>
        <div className='flex flex-row justify-between mt-8 '>
            <h1 className='font-semibold text-[18px]'>
                Personal details
            </h1>
                <h1 className='flex hover:bg-white hover:text-black rounded-[6px] text-[15px] font-normal border-[.5px] border-white bg-black text-white w-20 h-8 cursor-pointer justify-center items-center' onClick={()=> setEditing(false)}>
                    save
                </h1>
        </div>
        <div className='flex flex-row justify-around min-w-[100%] h-[197px] rounded-[20px] bg-white mt-2 px-2'>
            <div className='flex flex-row items-center mr-1 '>
                <Image className='rounded-[90%]' src={profile} alt='' width={92} height={92}/>
            </div>
            <div className='flex flex-col justify-center min-w-[50%]
            '>
                 <span className='flex flex-row items-center  border-black border-b-[0.5px]'>
                <input onChange={handleChange} className=' outline-none mb-2' type="text" placeholder='Enter Name' value={name}  />
                </span>
                <span className=' border-black border-b-[0.5px] py-1'>
                    <input onChange={handleChange1} className=' border-black outline-none' type='text'  placeholder='Email' />
                </span>
                <span className=' border-black border-b-[0.5px] py-1'>
                    <input onChange={handleChange2} type='text' className=' border-black outline-none' placeholder='Phone Number'/>
                </span>
                <span   className=' border-black border-b-[0.5px] py-1'>
                    <input onChange={handleChange3} type='text' placeholder='Address' className='border-black outline-none' />
                </span>
            </div>
        </div>
        </div>
    )
    
  return (
    <div className='flex flex-col bg-[#f5f5f8] min-h-screen w-[100%] pt-8 px-8'>
        <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
            <BackArrow/>
        </div>
        <div className='mt-8'>
            <h1 className='text-[34px] font-semibold'>
                My Profile
            </h1>
        </div>
        {isEditing ? editTemplate : viewTemplate}
        <Link href='./orders'>
        <div className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6 shadow-sm'>
            <h2 className='font-semibold text-[18px]'>Orders</h2>
                <span className='text-[24px]'>
                    <FiChevronRight/>
                </span>
        </div>
        </Link>
        <Link href='./reviews'>
        <div className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6 shadow-sm'>
            <h2 className='font-semibold text-[18px]'>
                    Pending reviews
            </h2>
                <span className='text-[24px]'>
                    <FiChevronRight/>
                </span>
        </div>
        </Link>
        <div className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6 shadow-sm'>
            <h2 className='font-semibold text-[18px]'>Faq</h2>
            <span className='text-[24px]'>
                    <FiChevronRight/>
            </span>
        </div>
        <div  className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6 shadow-sm'>
            <h2 className='font-semibold text-[18px]'>Help</h2>
            <span className='text-[24px]'>
                    <FiChevronRight/>
            </span>
        </div>
        <div className='mt-auto flex flex-row my-8 h-[100px] items-center justify-around text-[28px] text-[#adadaf]'>
            <span>
                <AiOutlineHome/> 
            </span>
            <span>
                <MdOutlineFavoriteBorder/>
           </span>
           <Link href='./profile'>
            <span className='text-[#ffc83a] shadow-[#ffc83a]'>            
                <HiUser/>
            </span>
           </Link>
           <span>
                <MdHistory/>
           </span>
        </div>
    </div>
  )
}
