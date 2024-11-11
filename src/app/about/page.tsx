import React from 'react'
import Image from 'next/image'
import Aboutt from '@/app/assets/aboutt.jpg'
import Button from '@/components/shared/Button'
import Link from 'next/link'

const About = () => {
  return (

       
    <main className="max-w-screen-xl mx-auto px-2 flex flex-col md:flex-row items-center space-x-10">
    <div className='flex-1 max-w-xl'>
    <h2 className='font-bold text-3xl sm:text-5xl text-teal-500'>About Us</h2>
<p className='mt-2'>At our clinic, we are dedicated to helping you achieve your highest level of physical function, reduce pain, and restore mobility. Our team of experienced, licensed physical therapists is committed to providing personalized care tailored to meet your unique needs and goals. Whether you are recovering from an injury, managing chronic pain, or seeking to improve overall mobility, we are here to guide you every step of the way.</p>

<h2 className='mt-7 font-bold text-3xl sm:text-5xl text-teal-500'>Our Mission</h2>
<p className='mt-2'>Our mission is to help people of all ages and abilities live a pain-free, active life by providing high-quality, patient-centered physical therapy. We aim to restore function, alleviate pain, and promote long-term wellness through evidence-based treatments, personalized rehabilitation programs, and compassionate care.</p>

<div>
     <Link href='/contact'><Button text={"Book Your Appointment"} /> </Link>
 </div>

</div>



<div>
    <Image className=' flex-1 border rounded-3xl mt-8' src={Aboutt} alt='pic' width={600} height={400} />
</div>


    </main>
  
  )
}

export default About
