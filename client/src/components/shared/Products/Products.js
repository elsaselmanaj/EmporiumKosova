import React, {useEffect, useState}from 'react'
import { ProductsData } from './data'
import Product from './Product'
import './products.scss'
import {useDispatch, useSelector} from 'react-redux'
import { listProduct } from '../../../store/actions/productAction'

const Products = () => {

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const {loading, error, products} = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  
  return (
    <div className='products-container'>
        {products.map((product) => <Product product={product} key={product.id}/>)}
    </div>
  )
}

export default Products