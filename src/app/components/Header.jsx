'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoSunny } from 'react-icons/io5'
import Sun from './Sun'
import Moon from './Moon'


export default function Header() {
  const [theme, setTheme] = useState(false)

  function themeSelect() {
    setTheme(!theme)
  }

  return (
    <div className="flex items-start justify-between w-full sm:w-[40%] text-3xl px-7 py-8 fixed top-2">
        <div className="font-extrabold tracking-[0.2em]">TODO</div>
        {/* <IoSunny /> */}

        <div onClick={themeSelect} className='cursor-pointer transition-transform ease-out duration-700'>
            {theme ? 
              <Moon />
              : 
              <Sun /> 
            }
        </div>
    </div>

  )
}
