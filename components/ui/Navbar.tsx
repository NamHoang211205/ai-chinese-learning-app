import React from 'react'
import NavItem from '././././NavItem'
import Link from "next/link"
import Image from 'next/image'
import { SignInButton, SignedOut, UserButton, SignedIn } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <Image
            src="/images/logo.svg" 
            alt="logo" 
            width={44} height={44}
          />
        </div>
      </Link>
      <div className='flex items-center gap-8'>
        <NavItem />
        <SignedOut>
            <SignInButton>
            <button className="btn-signin">Sign In</button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar