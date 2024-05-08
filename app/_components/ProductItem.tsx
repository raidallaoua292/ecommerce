import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../_types'

const ProductItem = ({product}: {product: Product}) => {
  return (
    <Link href={`/product-details/${product.id}`}
    className='max-w-[300px] relative overflow-hidden rounded-lg border shadow transition hover:shadow-lg hover:border-primary-400 hover:cursor-pointer'>
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt={product?.attributes?.title}
        width={300}
        height={200}
        className=" h-48 object-cover shadow-xl "
      />
      <div className='mt-2 p-1 flex items-center justify-between'>
        <div className="">
          <h3 className="text-sm font-semibold line-clamp-1 text-primary-950 ">{product?.attributes?.title}</h3>
          <span className="text-xs font-semibold text-primary-500"> {product?.attributes?.category}</span>
        </div>
        <h2 className="text-base font-semibold text-primary-600"> ${product?.attributes?.price}</h2>
      </div>

    </Link>
  )
}

export default ProductItem