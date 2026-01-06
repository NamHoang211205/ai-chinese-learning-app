'use client';
import { cn } from '@/lib/utils';
import Link from 'next/dist/client/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const navItem = [
    {label: 'Home', href: '/' },
    {label: 'Companions', href: '/companions' },
    {label: 'My Journey', href: 'my-journey'},
]
const NavItem = () => {
  const pathname = usePathname();
  return (
    <div className='flex items-center gap-4'>
        {navItem.map(({label, href}) => (
            <Link 
              href={href} 
              key={label} 
              className={cn(pathname === href && 'text-primary font-semibold')}>
                {label}
            </Link>
        ))}
    </div>
  )
}

export default NavItem