import React from 'react'
import NavItem from '././././NavItem'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <link href="/">
        <div className='flex items-center gap-2.5 cursor-pointer'>
            <img 
                src="/images/logo.svg" 
                alt="logo" width={30} height={30} />
        </div>
        </link>
        <div className='flex items-center gap-8'>
            <NavItem>
            <p>Sign In</p>
        </div>
    </nav>
  )
}

export default Navbar