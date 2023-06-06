'use client';
import React from 'react'
import BackArrow from '../backarrow';
import Link from 'next/link';
import { MdOutlineSwipeLeft } from "react-icons/md";
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cartState';
import Image from 'next/image';



  


export default function 
() {
    
    
    const [cartItem, setCartItem] = useRecoilState(cartState)

   const addItemToCart = (productItem) => {
        if(cartItem.findIndex(pro => pro.id === productItem.id) === -1){
          setCartItem(prevState => [...prevState, productItem])
          alert(`${product.name} has been added to cart`)
        }else{
          setCartItem(prevState => {
          return prevState.map((item) => {
            return item.id === productItem.id? {...item, quantity: item.quantity + 1} : item
          })
        })
      }
      }
    
      const removeItemFromCart = (productItem) => {
        const productExist = cartItem.find((item) => item.id === productItem.id);
        if (productExist.quantity === 1){
            setCartItem(cartItem.filter((item) => item.id !== productItem.id));
            alert(`${productItem.name} has been removed from cart`)
        }else{
            setCartItem(
            cartItem.map((item) =>
            item.id === productItem.id 
            ? {...productExist, quantity: productExist.quantity -1}: item))
        }
        
      }
 
const totalPrice = cartItem.reduce((price, item)=> price + item.quantity * item.price, 0)

const handleCartClearance = () =>{
    
    setCartItem([]) 
    
  }

  const product = cartItem.map((item) => (
    <>
    <div key = {item.id} className='w-[314px] h-[102px] bg-white m-auto mt-[18px] rounded-[20px] flex flex-row shadow-2xl'>
    <div  className='align-middle translate-y-[15%] pl-[16px]'>
        <Image src={item.image} alt={item.name} width='70' height='70' />
    </div>
    <div className='flex flex-col place-content-center text-center text-[17px] font-semibold h-[100%]'>
        <h2>{item.name && item.name.length > 15 ? item.name.substring(0,15) + '...' : item.name}</h2>
        <h2 className='text-[#ffc83a] mt-0.5'>₦{item.price}</h2>
    </div>
    <div className='flex h-[100%]'>
        <div className='p-[.1rem] flex flex-row justify-around items-center w-[52px] bg-[#ffc83a] h-[20px] rounded-[30px] translate-y-[280%] font-semibold ' >
            <button onClick={() => removeItemFromCart(item)}>
                -
            </button>
            {item.quantity}
            <button onClick={() => addItemToCart(item)}>+
            
            </button>
        </div>
    </div>
</div>
<h1 className='font-bold text-[14px] text-center'>Total: ₦{item.price} * {item.quantity}</h1>
</>
))
    
    return (
        <div>
    
<div className='pt-[3.5rem] px-6 w-[100%] min-h-screen'>
        <div className='flex flex-row min-w-[186px] justify-between  text-[24px]'>
        <BackArrow/>
        <h1 className=' mt-[-2px] m-auto font-semibold text-[18px]'>Cart</h1>
        </div>
        <div className='flex flex-row justify-center mt-[2.5rem]'>
            <span className='text-[20px] -rotate-45'><MdOutlineSwipeLeft/></span>
            <h2 className='text-[10px]'>Swipe on an item to delete</h2>
        </div>
        {cartItem.length >=1 && (
          <button onClick={handleCartClearance} className=' mt-2 translate-x-[200%] h-[40px] w-[100px] bg-[#ffc83a] rounded-[15px] font-semibold'>
          clear cart
        </button>
        )}
        <h1 className='mt-2 font-bold text-[20px] text-center'>SUB-TOTAL: ₦{totalPrice}</h1>
        {cartItem.length === 0 && (<div className='flex translate-y-[100%] justify-center '>No Items are added</div>)}
        {product}
        
        <div className='flex justify-center  text-white py-20'>
            <Link href='./Address'>
              <button className='w-[314px] h-[70px] rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#413e39]  hover:border-2 '>Order Now</button>
            </Link>
        </div>
    </div>
    </div>
  )
  
}

