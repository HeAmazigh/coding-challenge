import React from 'react'
import productsList from '../../data/products.json';
import { ProductItem } from '../productItem/productItem.component';


export const Products = () => {
  return (
    <div className='flex-1 p-10'>
      <h1 className='text-2xl font-bold text-gray-700'>Products</h1>
      {productsList.map(({id,name, description, img, price, descount}) => (
        <ProductItem 
          key={id} 
          id={id}
          name={name} 
          description={description}
          img={img}
          price={price}
          discount={descount}
        />
      ))}
    </div>
  )
}