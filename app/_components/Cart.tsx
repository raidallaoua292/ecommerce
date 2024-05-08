import React from 'react'
import Image from 'next/image'
import { CartContextType } from '../_types'
import { CartContext } from '../_context/CartContext'
import Link from 'next/link'
const Cart = () => {
  const { cart, setCart }: CartContextType = React.useContext(CartContext)
  console.log(cart[0])
  return (
    <div className='h-[300px] w-[250px] bg-gray-100 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto'>
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.map((item) => (<li key={item.id} className="flex items-center gap-4">
            <Image
              width={64}
              height={64}
              src={item.product.attributes.banner.data.attributes.url}
              alt={item.product.attributes.banner.data.attributes.alt}
              className="rounded object-cover"
            />

            <div>
              <h3 className="text-sm text-primary-900 line-clamp-1">{item.product.attributes.title}
              </h3>
              <p className="mt-0.5 text-xs text-primary-400"> {item.product.attributes.category}</p>
              <p className="mt-0.5 text-xs text-primary-500">${item.product.attributes.price}</p>
            </div>
          </li>))}
          
        </ul>
        <div className="space-y-4 text-center">
          <Link href="/cart"
            className="block rounded border border-primary-600 px-5 py-3 text-sm text-primary-600 transition hover:ring-1 hover:ring-primary-400">
            View my cart ({cart.length} items)
          </Link>

          <a
            href="#"
            className="inline-block text-sm text-primary-500 underline underline-offset-4 transition hover:text-primary-600 "
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cart