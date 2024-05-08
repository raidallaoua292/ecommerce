'use client'
import React, {useEffect, useState} from 'react'
import { ProductList } from '.'
import productsApi from '../_utils/productsApi'

const ProductSection = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getLatestProducts()
    console.log('ProductSection')
  }, [])
  

  const getLatestProducts = () => {
    productsApi.latestProducts().then((response) => {
      setProducts(response.data.data)
      console.log(response.data.data)
    })
    .catch((error) => {
      console.log("this erore")
    
    })
  }
  return (
    <div className='container_p'>
      <h1 className="text-3xl font-semibold text-primary-950 my-2 mx-auto">Latest Products</h1>
      <ProductList products={products}/> 
    </div>
  )
}

export default ProductSection