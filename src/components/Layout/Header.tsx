
import Link from 'next/link'
import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <Wrapper>
    <header className='flex justify-between bg-white py-6 sticky top-0 items-center' >
        {/* logo */}
        <div>
        <h2 className='text-teal-400 text-2xl font-bold font-serif'>PhysicalTherapy Center</h2>
        </div>
        {/* navigation bar */}
      
        <ul className='hidden md:block'>
            <li className='flex space-x-6'>
            <Link className='hover:font-semibold' href='/'>Home</Link>
            <Link className='hover:font-semibold' href='/about'>About</Link>
            <Link className='hover:font-semibold' href='/contact'>Contact Us</Link>
            </li>
        </ul>
<div  className='block md:hidden bg-white'>
    <Sheet>
  <SheetTrigger><Menu /></SheetTrigger>
  <SheetContent>
  <ul>
            <li className='flex-col'>
            <Link className='hover:font-semibold' href='/'>Home</Link>
            <Link className='hover:font-semibold' href='/about'>About</Link>
            <Link className='hover:font-semibold' href='/contact'>Contact Us</Link>
            </li>
        </ul>
    
  </SheetContent>
</Sheet>
</div>

    
       

    </header>
    </Wrapper>
  )
}

export default Header