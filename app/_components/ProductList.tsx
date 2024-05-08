import React from 'react'
import {ProductItem} from '.'
import { ProductListProps } from '../_types'


const ProductList = ({products}:ProductListProps) => {

  return (
    <div className='grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
      {products.map((item) => {
        return <ProductItem key={item.id} product={item}/>
      })}
    </div>
  )
}

export default ProductList