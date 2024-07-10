import Link from 'next/link'
import React, { useState } from 'react'

export default function Footer({theme, onThemeChange}) {

  return (
    <div className={`w-full flex flex-col justify-center items-center gap-y-4 bottom-0 fixed py-5 ${theme ? 'bg-[whitesmoke] text-gray-400 font-semibold' : 'bg-[#171926]'}`}>
        <div className={`flex sm:hidden items-center justify-center px-7 py-4 gap-7 bg-[#393b49] w-[85%] rounded-md text-white ${theme ? 'bg-white text-[#9e9fa1] font-semibold shadow-sm' : ''}`}>

            <Link href='/'>All</Link>
            <Link href='/'>Active</Link>
            <Link href='/'>Completed</Link>
        </div>
        <p>Drag and drop to reorder list</p>
    </div>
  )
}
