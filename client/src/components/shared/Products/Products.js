import React from 'react'
import { ProductsData } from './data'
import Product from './Product'
import './products.scss'

const Products = () => {
  return (
    <div className='products-container'>
        {ProductsData.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products