"use client"
import { ChevronsDown, CircleChevronDown } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        <div className="mx-auto max-w-xl text-center text-primary-950">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            All Your Digital Products in One Place
            <strong className="font-extrabold text-primary-700 sm:block">
              Is One Click Away
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start Exporing State of the Art Digital Products and Services
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {/* arrow buton */}
            <ChevronsDown onClick={
              () => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                })
              }
            }
             size={50} color="#17645f" className='transition animate-bounce cursor-pointer'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero