'use client';

import React, { useState } from 'react'
import { RiSearchLine } from "react-icons/ri"
import {FiChevronLeft} from "react-icons/fi";
import Link from 'next/link';
import food from '../storage/food';
import Image from 'next/image';


const search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [filteredResults, setFilteredResults] = useState([])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    console.log(searchValue)

    if (searchInput !== '') {
      const filteredData = food.foodDetails.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      console.log(filteredData)
      setFilteredResults(filteredData)
    } else{
      setFilteredResults(food.foodDetails)
    }
  }

    const [selectedProduct, setSelectedProduct] = useState(null)

    const handleProductClick = (product) => {
      setSelectedProduct(product)
      console.log(product)
    }

    const foodlists = filteredResults.map((foodlist) => (
    
      <div 
        key={foodlist.id} className=' flex flex-col items-center text-center h-[252px] w-[156px] mt-[45px] ml-[35px] bg-transparent'
        onClick={() => handleProductClick (foodlist.info)}>
          <div className=' w-[128px] h-[128px] rounded-[100%] bg-transparent mb-[-89px] z-[1]'>
            <Link href={`./details/${foodlist.slug}`}>
              <Image className='w-[100%] h-[100%]' src={foodlist.image} alt='' />
            </Link>
          </div>
          <div className='  flex text-center  min-w-[156px] min-h-[212px] bg-white rounded-[30px] '> 
            <div className='translate-y-[50%] m-auto text-center   font-semibold'>
              <h1 className='text-[18px] ' >{foodlist.name} </h1>
              <h2 className='pt-3 text-[17px] text-[#ffc83a]'>{foodlist.price}</h2>
            </div>
          </div>     
      </div>
    
     
    ))
  
  return ( 
    
      <div className='pt-[3.75rem] w-[100%] min-h-screen' > 
        <div className='flex flex-row pl-[2.5rem] w-[100%] move-up'>

            <div className='text-2xl 
            pt-4 '>
                <Link href='./Homepage/Food'><FiChevronLeft/></Link>
            </div>
            <div className='flex flex-row items-center  w-[256px] bg-transparent rounded-[30px]  m-auto'>
            <span className=' text-[#727272] pl-5 flex text-2xl pr-3'><RiSearchLine/></span>
            <input  className='bg-transparent h-[60px]  outline-none border-none placeholder:text-[14px]' type='text' placeholder='Search' onChange={(e) => searchItems(e.target.value)}/>
        </div>
       
      </div>
      <div className=' flex flex-col items-center w-[100%] min-h-[83%] mt-8 bg-[#f9f9f9] rounded-tr-[30px] rounded-tl-[30px] move-up'>
        {searchInput.length > 1 ?(
          <h1 className='mt-[35px] text-[28px] font-bold'>
            {filteredResults.length == 1 ? `Found ${filteredResults.length} result`:
            filteredResults.length == 0 ? null :
            `Found ${filteredResults.length} results`
          }
          </h1>
        ) : null
        }
        <div>

        </div>
        <div className='flex flex-row flex-wrap h-[80%] w-[100%]'>
        {foodlists}
        </div> 
      </div>
  </div>
  )
}

export default search
