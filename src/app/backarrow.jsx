'use client';

import { useRouter } from 'next/navigation'
import React from 'react'
import {FiChevronLeft} from 'react-icons/fi'

const BackArrow = (props) => {

    const router = useRouter()
  return (
    <div className='slide-out cursor-pointer'> 
       <button type="button" onClick={() => router.back()}>
       <FiChevronLeft size={props.Size} style={props.Style}/>
        </button> 
    </div>
  )
}
export default BackArrow