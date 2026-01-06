import React from 'react'
const navItem = [
    { label: 'Home', href: '/' },
    {label: 'Companions', href: '/companions' },
    {label: 'My Journey', href: 'my-journey'},
]
const NavItem = () => {

  return (
    <div className='flex items-center gap-4 cursor-pointer'>
        {navItem.map(({label, href}) => (
            <link href={href} key={label}>
                {label}
            </link>
        ))}
    </div>
  )
}

export default NavItem