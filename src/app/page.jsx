import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

function page() {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-50 pt-20 md:pt-30 lg:pt-40 justify-center px-6 md:px-12">
        <div className="space-y-5 text-center lg:text-left">
          <h2 className="text-lg md:text-xl lg:text-2xl tracking-wider text-[#C4D8F9] uppercase">
            So, you want to travel to
          </h2>
          <h1 className="text-7xl md:text-8xl lg:text-9xl text-white font-serif tracking-widest font-light">
            SPACE
          </h1>
          <p className="text-base md:text-lg pt-4 max-w-full lg:max-w-163 leading-8 lg:leading-9 tracking-wider text-gray-300">
            Let’s face it: if you want to go to space, you might as well genuinely go
            to outer space and not hover kind of on the edge of it. Well sit back,
            and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className="relative group w-80 h-80 md:w-100 md:h-100 lg:w-120 lg:h-120 rounded-full flex items-center justify-center overflow-hidden">

          <div className="absolute inset-0 rounded-full bg-white/10 scale-0 transition-transform duration-700 ease-in-out group-hover:scale-100"></div>

          <div className="relative z-10 bg-white cursor-pointer rounded-full w-55 h-55 md:w-65 md:h-65 lg:w-75 lg:h-75 flex items-center justify-center">

            <Link
              href="/destination"
              className="relative z-10 bg-white rounded-full w-55 h-55 md:w-65 md:h-65 lg:w-75 lg:h-75 flex items-center justify-center text-black text-xl md:text-2xl lg:text-3xl uppercase tracking-wider font-serif font-extralight"
            >
              Explore
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page