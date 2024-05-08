'use client'
import React from 'react'
import Image  from 'next/image'
import { useUser } from '@clerk/nextjs'


const Footer = () => {
  const {user} = useUser()
  return user && (
    <footer className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center items-center text-teal-600 gap-2  sm:justify-start">
        <Image src="/logo.svg" alt="logo" width={40} height={40} /> ecomme digtal
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer