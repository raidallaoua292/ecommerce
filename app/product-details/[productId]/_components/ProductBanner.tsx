import { Product } from '@/app/_types'
import Image from 'next/image'
import React from 'react'

const ProductBanner = ({product}: {product: Product }) => {
  return(
    <div>
      {product?.attributes?.banner?.data?.attributes?.url ?
        <Image
        src={product.attributes.banner.data.attributes.url}
        alt={product.attributes.title}
        width={400}
        height={400}
        className='object-cover rounded-lg shadow-xl'
      />
      : <div className='w-3/4 h-1/2 animate-pulse bg-primary-100 rounded-lg shadow-xl'></div>
      }
      
    </div>
  )
}

export default ProductBanner