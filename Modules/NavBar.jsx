import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const NavBar = () => {
  return (
    <nav className='w-full '>
        <div className='bg-white h-auto px-4 items-center flex content-center m-auto'>
          <h1 className='text-4xl text-green-500 font-bold'>Shri Salasar Tractors</h1>
          <div className='flex grow'></div>
          <Image src="/swaraj.png" width={100} height={20} alt='Logo'/>
        </div>
        <div className='w-full h-7 flex bg-blue-200'>
          <Link className='px-2 text-blue-500' href={"/Report"}  >Sales Report</Link>
          <Link className='px-2 text-blue-500' href={"/New_Sale"} >New Sale</Link>
        </div>
    </nav>
  )
}

export default NavBar