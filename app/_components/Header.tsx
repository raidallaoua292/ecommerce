'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react'
import { CartContext } from '../_context/CartContext'
import { CartContextType, CartItem, Product } from '../_types'
import cartApis from '../_utils/cartApis'
import { Old_Standard_TT } from 'next/font/google'
import Cart from './Cart'



const Header = () => {
  const {cart,setCart}:CartContextType = React.useContext(CartContext)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes('sign-in') || window.location.href.toString().includes('sign-up'))
  }, [])

  const {user} = useUser()

  useEffect(() => {
    user && getCartItems()
  },[user] )


  const getCartItems = () => {
    cartApis.userCartItems(user?.primaryEmailAddress?.emailAddress).then((res) => {
      console.log(res.data.data)
      const cartItems:Product[] = res.data.data.map((item:CartItem) => {
        return {
          product: item.attributes.products.data[0],
          id: item.id
        }
      })
      setCart([...cart,  ...cartItems])
      // setCart(res.data.data)
      console.log(cart)
      console.log(cartItems)
    })
  }

  return !isLoggedIn && (
    <header className="bg-white dark:bg-primary-900">
      <div className="flex h-16 max-w-screen-2xl items-center gap-8 container_p shadow-md">
        <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
        />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex  gap-6 text-sm  ">
              <li>
                <Link
                  className="text-primary-900 transition hover:text-primary-900/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-primary-900 transition hover:text-primary-900/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Explore
                </Link>
              </li>

              <li>
                <Link
                  className="text-primary-900 transition hover:text-primary-900/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  className="text-primary-900 transition hover:text-primary-900/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  className="text-primary-900 transition hover:text-primary-900/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Cintact Us
                </Link>
              </li>

              
            </ul>
          </nav>
          {!user?
            <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-700 dark:hover:bg-primary-500"
                href="/sign-in"
              >
                Login
              </Link>

              <Link
                className="hidden rounded-md bg-primary-100 px-5 py-2.5 text-sm font-medium text-primary-600 transition hover:text-primary-600/75 sm:block dark:bg-primary-800 dark:text-white dark:hover:text-white/75"
                href="/sign-up"
              >
                Register
              </Link>
            </div>

            <button
              className="block rounded bg-primary-100 p-2.5 text-primary-600 transition hover:text-primary-600/75 md:hidden dark:bg-primary-800 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            </div>
            :
            <div className='flex gap-5 items-center'> 
              <h2 className='flex items-center gap-1 cursor-pointer'
              onClick={()=> setOpenCart(!openCart)}>
                <ShoppingCart/>
                ({cart?.length})
                </h2>
              {openCart && <Cart />}
              < UserButton afterSignOutUrl='/' />
              <button
              className="block rounded bg-primary-100 p-2.5 text-primary-600 transition hover:text-primary-600/75 md:hidden dark:bg-primary-800 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            </div>
          }
          
        </div>
      </div>
    </header>
  )
}

export default Header