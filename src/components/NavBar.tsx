import Image from 'next/image'
import React from 'react'
import md from './../../public/icons/logoBlack.svg'
import Link from 'next/link'



const NavBar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 right-0 h-[80px] z-50'>
      <div className='flex items-center flex-row-reverse lg:flex-row justify-between  lg:gap-[300px] px-8 py-4 lg:pl-12 lg:py-6 '>
        <Link href='/'><Image src={md} width={79} height={47} alt='logo' className='w-[50px] lg:w-[80px]' /></Link>

        <ul className='flex items-center gap-6 lg:gap-20 lg:pr-10'>
          <li><Link href='/' className='text-sm lg:text-lg'> Home</Link></li>
          <li><Link href='/blog' className='text-sm lg:text-lg'> Blog</Link></li>
          <li><Link href='/about' className='text-sm lg:text-lg'> Sobre</Link></li>
          <li><Link href='/contact' className='text-sm lg:text-lg'> Contato</Link></li>
        </ul>

        

      </div>
    </nav>
  )
}

export default NavBar
