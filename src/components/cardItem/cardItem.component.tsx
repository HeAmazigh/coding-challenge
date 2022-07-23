import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import {addItemQuantity, subtractItemQuantity, removeFromCart} from '../../app/features/cartSlise';
import { formatCurrency } from '../../utils/formatCurrency'

interface cardItemProps {
  id: number
  name: string
  img: string
  price: number
  discount: number
  qty: number
}

export const CardItem = ({id, img,name, price, discount, qty}: cardItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className='border-b-4  p-3 my-3'>
      <div className='flex flex-row justify-center items-center space-x-3'>
        <div className='flex justify-center items-center w-24 h-24 overflow-hidden rounded-full border-2 border-[#cacaca]'>
          <img src={img} alt="" className='w-48 h-16'/>
        </div>
        <div className='flex-1'>
          <h3 className='text-gray-700 font-bold'>{name}</h3>
          <div className='flex flex-row items-center space-x-4'>
            <p className='text-xs font-bold'>Quantity</p>
            <button className='px-2 border-2 shadow-sm bg-white rounded-full cursor-pointer' onClick={() => dispatch(subtractItemQuantity({id, price, discount}))}>-</button>
            <p className='text-lg font-bold'>{qty}</p>
            <button className='px-2 border-2 shadow-sm bg-white rounded-full cursor-pointer' onClick={() => dispatch(addItemQuantity({id, price, discount}))}>+</button>
          </div>
        </div>
        <div className='flex flex-col justify-end'>
          {discount > 0 && <p className='text-red-500'>{formatCurrency(discount)}</p>}
          <p className='flex justify-end text-md font-bold'>{formatCurrency(price)}</p>
        </div>
        <div>
          <button onClick={()=> dispatch(removeFromCart({id, qty, price}))}> <FaTrash color='red'/></button>
        </div>
      </div>
    </div>
  )
}