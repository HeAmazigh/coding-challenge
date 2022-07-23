import React from 'react'
import { useSelector } from 'react-redux';

import {HiOutlineShoppingCart} from 'react-icons/hi'
import { CardItem } from '../cardItem/cardItem.component'
import { formatCurrency } from '../../utils/formatCurrency';
import { RootState } from '../../app/store';

export const Card = () => {
  const cartItems = useSelector((state: RootState) => state.cart.itemsInCart)
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount)
  const discount = useSelector((state: RootState) => state.cart.discount)
  
  return (
    <div className='flex-1 p-10 bg-gray-100'>
      <div className='flex flex-row items-center space-x-2'>
        <h1 className='text-2xl font-bold text-gray-700'>CART</h1>
        <HiOutlineShoppingCart size={25} color='#bdbdbd'/>
      </div>
      {cartItems.map(({id,name, img, price, discount, quantity}) => (
        <CardItem key={id} name={name} price={price} discount={discount} img={img} qty={quantity} id={id}/>
      ))}
      <div className='space-y-3'>
        <div className='flex flex-col items-end -space-y-1'>
          <p className='font-bold text-gray-400'>Subtotal</p>
          <p className='font-bold text-gray-800'>{formatCurrency(totalAmount)}</p>
        </div>
        <div className='flex flex-col items-end -space-y-1'>
          <p className='font-bold text-gray-400'>Discount</p>
          <p className='font-bold text-gray-800'>{formatCurrency(discount)}</p>
        </div>
        <div className='flex flex-col items-end -space-y-1'>
          <p className='font-bold text-gray-400'>Total</p>
          <p className='font-bold text-gray-800'>{formatCurrency(totalAmount - discount)}</p>
        </div>
      </div>
    </div>
  )
}