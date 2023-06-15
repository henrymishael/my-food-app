'use client';

import React, { useEffect, useState } from 'react'
import BackArrow from '../backarrow'
import Link from 'next/link'



export default function () {
  
  // function toggleInput() {
  //   // get the input
  //   var myInput = document.getElementById('input');
  //   var myInput1 = document.getElementById('input1');
  //   var myInput2 = document.getElementById('input2');

  //   var name = document.getElementById('input').placeholder
  //   var email = document.getElementById('input1').placeholder
  //   var number = document.getElementById('input2').Placeholder
  
    
  //   // get the current value of the clock's display property
  //   var displaySetting = myInput.style.display;
  //   var displaySetting1 = myInput1.style.display;
  //   var displaySetting2 = myInput2.style.display;
  
  //   // also get the clock button, so we can change what it says
  //   var edit = document.getElementById('inputField');
    
  
  //   // now toggle the input and the button text, depending on current state
  //   if (displaySetting == 'block') {
  //     // input is visible. hide it
  //     myInput.style.display = 'none';
  //     // change button text
  //     edit.innerHTML = 'edit'
      
  //   }
  //   else {
  //     // input is hidden. show it
  //     myInput.style.display = 'block';
  //     // change button text
  //     // edit.innerHTML = 'save';
  //     myInput.value = saved_text
  //   }
  
  //   if (displaySetting1 == 'block') {
  //     // input is visible. hide it
  //     myInput1.style.display = 'none';
  //     // change button text
  //     edit.innerHTML = 'edit';
  //   }
  //   else {
  //     // input is hidden. show it
  //     myInput1.style.display = 'block';
  //     // change button text
  //     // edit.innerHTML = 'save';
  //     myInput1.value = saved_text
  //   }
  
  //   if (displaySetting2 == 'block') {
  //     // input is visible. hide it
  //     myInput2.style.display = 'none';
  //     // change button text
  //     edit.innerHTML = 'edit';
  //   }
  //   else {
  //     // input is hidden. show it
  //     myInput2.style.display = 'block';
  //     // change button text
  //     // edit.innerHTML = 'save'
  //     myInput2.value = saved_text 
  //   }
  // } 

  // function getUserInput(){
  //   var name = document.getElementById('input').placeholder
  //   var email = document.getElementById('input1').placeholder
  //   var number = document.getElementById('input2').Placeholder
  // }

  // const [name, setName] = useState("")
  const [newName, setNewName] = useState("Henry Mishael")
  const [newAddress, setNewAddress] = useState("Surulere, Lagos")
  const [newNumber, setNewNumber] = useState("+2348115173291")
  const [isEditing, setEditing] = useState(false)

 useEffect(() => {
  const savedProfileName = localStorage.getItem('newName')
  if (savedProfileName){
    setNewName(savedProfileName)
  }
  
  const savedProfileAddress = localStorage.getItem('newAddress')
  if (savedProfileAddress){
    setNewAddress(savedProfileAddress)
  }

  const savedProfileNumber = localStorage.getItem('newNumber')
  if (savedProfileNumber){
    setNewNumber(savedProfileNumber)
  }
 })
  
   

  function handleChange(e) {
    const name = e.target.value
    setNewName(name);
    localStorage.setItem('newName', name)
  }
  function handleChange1(e) {
    const address = e.target.value
    setNewAddress(address);
    localStorage.setItem('newAddress', address)
  }

  function handleChange2(e) {
    const number = e.target.value
    setNewNumber(number);
    localStorage.setItem('newNumber', number)
  }

  function handleSubmit() {
    setEditing(false)
  }


  
  const viewTemplate = (
  <div>
    <div className='flex flex-row pt-11 justify-between w-[100%]'>
                <h4 className='text-[17px] font-semibold'>
                    Address details
                </h4>
                <button onClick={() => setEditing(true)} id="inputField" className=' hover:bg-white hover:text-black rounded-[6px] text-[15px] font-normal border-[.5px] border-white bg-black text-white w-20 h-8'>
                    Edit
                </button>
            </div>
            <div className='px-10 py-[1.5rem]  flex flex-col mt-5 min-w-[314px] h-[156px] bg-white rounded-[20px]'>
                <span className='flex flex-wrap min-w-[232px] h-[40px] border-b-[0.5px] border-black'>
                    <h1 onChange={handleChange} id='name'> {newName}</h1>
                </span>
                <span className='text-[15px] min-w-[232px] h-[40px] border-b-[0.5px] border-black pt-1'>
                <h2 onChange={handleChange1}  id='email'>{newAddress && newAddress.length > 25 ? newAddress.substring(0, 25) + '...' : newAddress}</h2>
                </span>
                <span className='text-[15px] min-w-[232px] h-[40px] border-b-[0.5px] border-black pt-1'>
                <h3 onChange={handleChange2} id='num'>{newNumber}</h3>
                </span>
            </div>
          </div>
  )

  const editingTemplate = (
    <div>
      <div className='flex flex-row pt-11 justify-between w-[100%]'>
                  <h4 className='text-[17px] font-semibold'>
                      Address details
                  </h4>
                  <button id="inputField" className='text-[15px] font-normal border-[.5px] border-white bg-black text-white w-20 h-8 hover:bg-white hover:text-black rounded-[6px]' onClick={(handleSubmit)}>
                      save
                  </button>
              </div>
              <div className='px-10 py-[1.5rem]  flex flex-col mt-5 min-w-[314px] h-[156px] bg-white rounded-[20px]'>
                  <span className='flex flex-wrap min-w-[232px] h-[40px] border-b-[0.5px] border-black'>
                      <input className='border-none outline-none' type="text" placeholder='Enter Name' onChange={handleChange} value={newName} />
                  </span>
                  <span className='text-[15px] min-w-[232px] h-[40px] border-b-[0.5px] border-black pt-1'>
                  <input className='border-none outline-none' type="text" placeholder='Adress' onChange={handleChange1} value={newAddress}/>
                  </span>
                  <span className='text-[15px] min-w-[232px] h-[40px] border-b-[0.5px] border-black pt-1'>
                  <input className='border-none outline-none' type="text" placeholder='Phone Number' onChange={handleChange2} value={newNumber}/>
                  </span>
              </div>
            </div>
            )

  return (
    <div className='bg-[#f5f5f8] min-h-screen w-[100%] pt-10 px-8'>
        <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
            <BackArrow/>
            <h4 className=' mt-[-2px] m-auto font-semibold text-[18px]'>Address</h4>
        </div>
        <div className='pt-10 flex flex-col'>
            <h4 className='text-[34px] font-semibold'>Delivery</h4>
            {isEditing ? editingTemplate : viewTemplate}
        </div>
        <div className=' flex justify-center  text-[#ffffff]  py-10'>
          <Link href='./map'>
            <button className='w-[314px] h-[70px] lg:h-[80px] lg:w-[360px] xl:w-[380px] xl:h-[85px] rounded-[30px] bg-[#ffc83a] hover:bg-[#ffffff] hover:text-[#ffc83a] hover:border-white hover:border-2'>Confirm Address</button>
          </Link>
        </div>
    </div>
  )
}
