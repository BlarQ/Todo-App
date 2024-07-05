import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-8 bottom-0 fixed py-10'>
        <div className='flex items-center justify-center px-7 py-4 gap-7 bg-[#393b49] w-[85%] rounded-md'>
            <Link href='/'>All</Link>
            <Link href='/'>Active</Link>
            <Link href='/'>Completed</Link>
        </div>
        <p>Drah and drop to reorder list</p>
    </div>
  )
}
