
import { Breadcrumb, ProductList } from '@/app/_components'
import { Product } from '@/app/_types'
import productsApi from '@/app/_utils/productsApi'
import React from 'react'


import ProductBanner from './_components/ProductBanner'
import ProductInfo from './_components/ProductInfo'

type ProductDetailsProps = {
  params: {
    productId: string
  }
}

const ProductDetails = async ({params}: ProductDetailsProps) => {
  const pathname = `/product-details/${params.productId}`
  console.log(pathname)


  /*### Get Prduct By Id  */
  const response = await productsApi.productById(params.productId)
  
  const product: Product = response?.data.data
  /* Get Prduct By Id  ###*/

  const getProductListByCategory = async (category: string) => {
    const response = await productsApi.productByCategory(category)
    console.log(response?.data.data)
    return response?.data.data
    
  }

  const productList = await getProductListByCategory(product.attributes.category)
  console.log(productList)

  
  return (
    <div className='px-10 py-8 md:px-28'>
      <Breadcrumb path ={pathname}/>
      <div className='grid justify-evenly grid-cols-1 gap-5 mt-10 sm:grid-cols-2'>
        <ProductBanner product={product}/>
        <ProductInfo product={product} />
      </div>
      <div>
        <h2 className='text-2xl mt-10 mb-5 font-semibold text-primary-950'>Related Products</h2>
          <ProductList products={productList}/>
      </div>
    </div>
  )
}

export default ProductDetails