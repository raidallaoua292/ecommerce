"use client"
import { CartContextType, CartItem, Product } from '@/app/_types'
import { BadgeAlert, BadgeCheck, ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import SkeletonProductInfo from './SkeletonProductInfo'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import cartApis from '@/app/_utils/cartApis'
import { CartContext } from '@/app/_context/CartContext'


const ProductInfo = ({product}: {product: Product}) => {
  const {cart, setCart}:CartContextType = React.useContext(CartContext)
  const {user} = useUser()
  const router = useRouter()
  // Add to cart handler
  const handelAddToCart = () => {
    console.log('Added to cart n/', product?.id)
    if (!user) {
      router.push('/sign-in')
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          products: [product?.id]
        }
      }
      cartApis.addToCart(data).then((res) => {
        console.log(res.data.data)
        
        setCart([...cart,  {id: res.data.data.id, product: product}])
      })
    }
  }

  return (
    <div>
      {product?
        <div>
          <h2 className='text-xl text-primary-950'>{product?.attributes?.title}</h2>
          <h2 className='text-base text-primary-400'>{product?.attributes?.category}</h2>
          <p className='text-xs mt-5'>{
            product?.attributes?.description[0]?.children[0]?.text}
          </p>
          <h2 className="text-xs y text-gray-400 flex gap-2 items-center mt-2">
            {product?.attributes?.instantDelivery ? <BadgeCheck className='h-5 w-5 text-green-600'/> : <BadgeAlert className='h-5 w-5 text-orange-600' />} 
            Eligible For Instant Delivery </h2>
          <h2 className='text-3xl mt-5 text-primary-600'>$ {product?.attributes?.price}</h2>
          <button onClick={() => handelAddToCart()}
           className='flex gap-2 items-center bg-primary-500 text-white px-5 py-2 mt-5 rounded-md hover:bg-primary-600'><ShoppingCartIcon/> Add to cart</button>
        </div>
        : <SkeletonProductInfo/>
      }
    </div>
  )
}

export default ProductInfo