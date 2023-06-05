'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useParams, useRouter } from 'next/navigation';
import foodList from '@/app/fooditems';
import Link from 'next/link';
import BackArrow from '@/app/backarrow';
import { useRecoilState } from 'recoil';
import { cartState } from '@/app/atoms/cartState';


const productDetails = ({params}) => {
  const [cartItem, setCartItem] = useRecoilState(cartState)
 
 
  const router = useParams();

  const {slug} = params;
  const product = foodList.foodItems.find(x => x.slug === slug);





  if (!product){
    return (
      <>
        Not found
      </>
    )
  }

  const addItemToCart = () => {
    if(cartItem.findIndex(pro => pro.id === product.id) === -1){
      setCartItem(prevState => [...prevState, product])
      alert(`${product.name} has been added to cart`)
    }else{
      setCartItem(prevState => {
      return prevState.map((item) => {
        return item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      })
    })
  }
  }





  return(
    <div key={product.id} className='bg-white min-h-screen w-[100%] pt-[2.5rem] px-6'>
      <div className=' h-auto text-2xl flex flex-row  justify-between w-[100%]  m-auto'> 
          <BackArrow/>
          <MdOutlineFavoriteBorder/>
      </div>
      <div className=' w-[241px] h-[241px] m-auto mt-[24px]'>
          <Image src={product.image} alt='' width='235px' height='235px' />
      </div>
      <div className='flex flex-col items-center m-auto text-center  mt-[24px] w-[100%]'>
        <p className='text-[24px] font-semibold'>{product.name}</p>
        <p className='text-[18px] font-bold pt-3 text-[#ffc83a]'>{product.price}</p>
      </div>
      <div className=' min-w-[314px] mt-[24px] m-auto border-b-2 border-black '>
        <h2 className='text-[15px] font-semibold'>Rating {product.rating}</h2>
      </div>
      <div className='w-[100%] text-[15px] mt-3 m-auto text-[#727272]'>
        <div>
          <h2 className='text-[17px] text-black font-semibold' >Delivery Info</h2>
          <p>Delivered between monday May and thursday 20 from 8pm to 8:32 pm</p>
        </div>
        <div className='mt-[36px] w-[100%]'>
          <h2 className='text-[17px] text-black font-semibold'>Return Policy</h2>
          <p>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</p>
        </div>
      </div>
      <div className='flex justify-center  text-white '>
            <Link href='./Cart'>
              <button onClick={addItemToCart} className='w-[314px] h-[70px] rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#413e39]  hover:border-2 my-[2rem]'>Add to Cart</button>
            </Link>

      </div>
    </div>
  );
}
export default productDetails;