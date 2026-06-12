"use client";
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from 'next/link'

function Navbar() {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex items-center justify-between py-5 md:pt-10">
            <div className="rounded-full flex items-center justify-center ml-4 md:ml-12">
                <img src="/logo.svg" className='w-10 h-10 md:w-13 md:h-13' alt="logo" />
            </div>
            <div className="hidden md:block flex-1 h-px relative left-6 lg:left-10 z-10 bg-[#8F8F8F]"></div>
            <button
                className='md:hidden text-white text-4xl mr-6'
                onClick={() => setIsOpen(true)}
            >
                <HiMenu />
            </button>
            <nav className="flex hidden md:flex space-x-4 md:space-x-8 lg:space-x-12 p-4 md:p-6 backdrop-blur-2xl px-6 md:px-12 lg:px-20 md:pl-16 lg:pl-35 py-6 md:py-11 overflow-x-auto">
                <Link
                    href="/"
                    className={`text-[#f8f8f8] uppercase text-xs md:text-sm lg:text-md tracking-wider pb-2 border-b-2 transition-all ${pathname === "/" ? "border-white" : "border-transparent hover:border-gray-400"}`}
                >
                    <span className="text-white font-bold text-md pr-3">00</span>Home
                </Link>

                <Link
                    href="/destination"
                    className={`text-[#f8f8f8] uppercase text-xs md:text-sm lg:text-md tracking-wider pb-2 border-b-2 transition-all ${pathname === "/destination" ? "border-white" : "border-transparent hover:border-gray-400"}`}
                >
                    <span className="text-white font-bold text-md pr-3">01</span>Destination
                </Link>

                <Link
                    href="/crew"
                    className={`text-[#f8f8f8] uppercase text-xs md:text-sm lg:text-md tracking-wider pb-2 border-b-2 transition-all ${pathname === "/crew" ? "border-white" : "border-transparent hover:border-gray-400"}`}
                >
                    <span className="text-white font-bold text-md pr-3">02</span>Crew
                </Link>

                <Link
                    href="/technology"
                    className={`text-[#f8f8f8] uppercase text-xs md:text-sm lg:text-md tracking-wider pb-2 border-b-2 transition-all ${pathname === "/technology" ? "border-white" : "border-transparent hover:border-gray-400"}`}
                >
                    <span className="text-white font-bold text-xs md:text-sm lg:text-md pr-2 md:pr-3">03</span>Technology
                </Link>
            </nav>
            {isOpen && (
                <div className="fixed top-0 right-0 w-64 h-screen backdrop-blur-2xl z-50">

                    <button
                        className="text-white text-4xl ml-auto block m-6"
                        onClick={() => setIsOpen(false)}
                    >
                        <IoClose />
                    </button>

                    <div className="flex flex-col gap-8 pl-8 pt-10">

                        <Link href="/">HOME</Link>

                        <Link href="/destination">
                            DESTINATION
                        </Link>

                        <Link href="/crew">
                            CREW
                        </Link>

                        <Link href="/technology">
                            TECHNOLOGY
                        </Link>

                    </div>

                </div>
            )}
        </header>
    )
}
export default Navbar;