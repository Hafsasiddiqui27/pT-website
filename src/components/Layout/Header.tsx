
import Link from 'next/link'
import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import {Sheet, SheetContent, SheetTrigger,} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <Wrapper>
    <header className='flex justify-between items-center bg-inherit py-6 sticky top-0' >
        {/* logo */}
        <div>
        <h2 className='text-teal-400 text-xl font-bold font-serif'>Physical Therapy Center</h2>
        </div>
        {/* navigation bar */}
      
        <ul className='hidden md:block'>
      <li className='flex space-x-6'>
            <Link className='hover:font-semibold' href='/'>Home</Link>
            <Link className='hover:font-semibold' href='/about'>About</Link>
            <Link className='hover:font-semibold' href='/contact'>Contact Us</Link>
           </li>
        </ul>
      
 
    <Sheet>
  <SheetTrigger className='md:hidden bg-white'><Menu /></SheetTrigger>
  <SheetContent className='bg-slate-200 w-fit'>
        <div>
        <h2 className='text-teal-400 text-2xl font-bold font-serif'>PhysicalTherapy Center</h2>
        </div>
       <ul className='flex-col'>
             
            <li> <Link className='hover:font-semibold m-2' href='/'>Home</Link></li>
            <li><Link className='hover:font-semibold  m-2' href='/about'>About</Link></li> 
            <li> <Link className='hover:font-semibold m-2' href='/contact'>Contact Us</Link>
            </li>
        </ul>
    
  </SheetContent>
</Sheet>

    
       

    </header>
    </Wrapper>
  )
}

export default Header