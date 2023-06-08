'use client';
import React, { useState } from 'react'
import BackArrow from '../backarrow'
import Image from 'next/image'
import profile from '../../../public/images/profile.jpeg'
import {FiChevronRight} from 'react-icons/fi'
import Link from 'next/link'

export default function page() {

    const [isEditing, setEditing] = useState(false)
    const [newName, setNewName] = useState("")
    const [newAddress, setNewAddress] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [newEmail, setNewEmail] = useState("")

    function handleChange(e) {
        setNewName(e.target.value);
      }
      function handleChange1(e) {
        setNewAddress(e.target.value);
      }
    
      function handleChange2(e) {
        setNewNumber(e.target.value);
      }

      function handleChange3(e) {
        setNewEmail(e.target.value);
      }
    const viewTemplate = (
    <div >
        <div className='flex flex-row justify-between mt-8 '>
            <h1 className='font-semibold text-[18px]'>
                Personal details
            </h1>
                <h1 className='flex hover:bg-white hover:text-black rounded-[6px] text-[15px] font-normal border-[.5px] border-white bg-black text-white w-20 h-8 cursor-pointer justify-center' onClick={()=> setEditing(true)}>
                    change
                </h1>
        </div>
        <div className='flex flex-row justify-around min-w-[100%] h-[197px] rounded-[20px] bg-white mt-2 px-2'>
            <div className='flex flex-row items-center mr-1 '>
                <Image className='rounded-[90%]' src={profile} alt='' width={92} height={92}/>
            </div>
            <div className='min-w-[50%] flex flex-col justify-center 
            '>
                <span className='flex flex-row items-center '>
                <input onChange={handleChange} className=' outline-none border-none mb-2' type="text" placeholder='Henry Mishael' value={newName}  />
                </span>
                <span className='h-[30px]  border-black border-b-[0.5px] py-1'>
                <input onChange={handleChange1} className=' border-black outline-none' type='text'  placeholder='Email' value={newEmail}/>
                </span>
                <span className=' h-[30px] border-black border-b-[0.5px] py-1'>
                <input  onChange={handleChange2} type='text' className=' border-black outline-none' placeholder='Phone Number' value={newNumber}/>
                </span>
                <span   className='h-[30px]  border-black border-b-[0.5px] py-1'>
                <input  onChange={handleChange3}  type='text' placeholder='Address' className='border-black outline-none' value={newAddress}/>
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
                <h1 className='flex hover:bg-white hover:text-black rounded-[6px] text-[15px] font-normal border-[.5px] border-white bg-black text-white w-20 h-8 cursor-pointer justify-center' onClick={()=> setEditing(false)}>
                    change
                </h1>
        </div>
        <div className='flex flex-row justify-around min-w-[100%] h-[197px] rounded-[20px] bg-white mt-2 px-2'>
            <div className='flex flex-row items-center mr-1 '>
                <Image className='rounded-[90%]' src={profile} alt='' width={92} height={92}/>
            </div>
            <div className='flex flex-col justify-center min-w-[50%]
            '>
                 <span className='flex flex-row items-center  border-black border-b-[0.5px]'>
                <input onChange={handleChange} className=' outline-none mb-2' type="text" placeholder='Enter Name' value={newName}  />
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
    <div className='bg-[#f5f5f8] min-h-screen w-[100%] pt-8 px-8'>
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
        <div className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6'>
            <h2 className='font-semibold text-[18px]'>Orders</h2>
                <span className='text-[24px]'>
                    <FiChevronRight/>
                </span>
        </div>
        </Link>
        <Link href='./reviews'>
        <div className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6'>
            <h2 className='font-semibold text-[18px]'>
                    Pending reviews
            </h2>
                <span className='text-[24px]'>
                    <FiChevronRight/>
                </span>
        </div>
        </Link>
        <div className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6'>
            <h2 className='font-semibold text-[18px]'>Faq</h2>
            <span className='text-[24px]'>
                    <FiChevronRight/>
            </span>
        </div>
        <div  className='flex items-center justify-between min-w-[315px] h-16 bg-white rounded-[30px] px-4 mt-6'>
            <h2 className='font-semibold text-[18px]'>Help</h2>
            <span className='text-[24px]'>
                    <FiChevronRight/>
            </span>
        </div>
    </div>
  )
}
