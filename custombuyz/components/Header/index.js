import React, { useState } from 'react'
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'
import HeaderOptions from './options';
import Link from 'next/link';
import Logo from './../../public/image/Logo_CBZ.png';
import Image from 'next/image'

const Header = () => {

    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <nav className='shadow-lg fixed top-0 z-10 w-full bg-header'>
            <div className='container'>
                <div className='grid grid-cols-2 px-3 lg:grid-cols-5 xl:grid-cols-3 lg:px-0 lg:gap-x-4'>
                    <div className='hidden lg:block lg:col-span-2 xl:col-span-1 items-menu'>
                        <ul>
                            {
                                HeaderOptions.map((option, i) => {
                                    if (option.leftItem) {
                                        return (
                                            <li key={i} className='lg:ml-8 text-xl lg:my-0 my-7 inline'>
                                                <a href={option.link} className='hover:text-gray-400 duration-500'>{option.name}</a>
                                            </li>
                                        );
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <div className='lg:text-center text-2xl ml-5 lg:ml-0 relative'>
                      <Image
                        src={Logo}
                        alt='image logo'
                        className='test-image'
                      />
                      {/* <img src={Logo} alt='' /> */}
                    </div>
                    <div className='hidden items-menu lg:flex lg:justify-end lg:col-span-2 xl:col-span-1 lg:mr-5 xl:mr-6 2xl:mr-0'>
                        <ul>
                            {
                                HeaderOptions.map((option, i) => {
                                    if (option.rightItem) {
                                        return (
                                            <li key={i} className={`lg:ml-8 text-xl lg:my-0 my-7 inline ${option.divider ? 'border-l-2 border-gray-300 pl-5' : ''}`}>
                                                <Link href={option.link}>
                                                    <a className='hover:text-gray-400 duration-500'>{option.name}</a>
                                                </Link>
                                            </li>
                                        );
                                    }
                                })
                            }
                            <li className='lg:ml-8 text-xl lg:my-0 my-7 inline'>
                                <a href={'/'} className='hover:text-gray-400 duration-500'>
                                    <FaShoppingCart className='inline' />
                                </a>
                                <span className='text-xl pl-3'>$26544</span>
                            </li>
                        </ul>
                    </div>
                    <div className='block lg:hidden relative'>
                        <div className='absolute top-2 right-3'>
                            {open ? <FaTimes onClick={handleMenu} /> : <FaBars onClick={handleMenu} />}
                        </div>
                    </div>
                </div>                
            </div>
            <div className={`lg:hidden pb-12 absolute bg-white z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ':'top-[-490px]'}`}>
                <ul>
                    {
                        HeaderOptions.map((link)=>(
                            <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
  )
}

export default Header;