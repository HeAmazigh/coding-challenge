import React from 'react'
import {useDispatch} from 'react-redux';
import { FaStar } from 'react-icons/fa';

import {formatCurrency} from '../../utils/formatCurrency';
import { addToCart } from '../../app/features/cartSlise';

interface productProps {
  id: number
  name: string
  description: string
  img: string
  price: number
  discount: number
}

export const ProductItem = ({id, name, description, img, price, discount}: productProps) => {
  const dispatch = useDispatch();

  const addItemToCart = (pyload) => {
    dispatch(addToCart(pyload))
  }

  return (
    <div className='border-2 rounded-lg shadow-md p-3 my-3'>
      <div className='flex flex-row justify-center items-center space-x-3'>
        <img src={img} alt="" className='w-20 h-16 rounded-md'/>
        <div className='flex-1'>
          <h3 className='text-gray-700 font-bold'>{name}</h3>
          <p className='text-gray-500 text-sm'>{description}</p>
        </div>
        <div className='flex flex-col justify-end'>
          <div className='flex flex-row'>
            <FaStar color='#ffbf35'/>
            <FaStar color='#ffbf35'/>
            <FaStar color='#ffbf35'/>
            <FaStar color='#ffbf35'/>
            <FaStar color='#ffbf35'/>
          </div>
          <p className='flex justify-end text-md font-bold'>{formatCurrency(price)}</p>
        </div>
      </div>
      <div className='flex justify-end w-full'>
        <button className='text-xs bg-blue-500 text-white px-6 py-1 rounded-sm' 
          onClick={() => addItemToCart({id, name, price, discount, img})}>ADD TO CART
        </button>
      </div>
    </div>
  )
}