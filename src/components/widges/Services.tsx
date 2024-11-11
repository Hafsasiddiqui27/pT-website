import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'


const Services = () => {
  return (
    <section className='mt-16 lg:mt-28 relative'>
        <Wrapper>
            <div>
                {/* <div className='bg-teal-100 absolute -top-9'> */}

               
             
           
{/* <h5 className='text-teal-400 font-semibold text-lg'>We provide a wide range of physical therapy and rehabilitation services to support your recovery and wellness</h5> */}
<h2 className='font-bold text-4xl sm:text-5xl text-teal-500'> Our Services:</h2>
<div className='text-center'>
<h3 className='text-teal-500 font-bold text-xl mt-1'>Orthopedic Rehabilitation:</h3><p>Tailored recovery programs for injuries and post-surgery care.</p>
<h3 className='text-teal-500 font-bold text-xl mt-1'>Post-Surgical Rehabilitation:</h3><p> Focused care to support recovery after surgeries.</p>
<h3 className='text-teal-500 font-bold text-xl mt-1'>Neurological Rehabilitation:</h3><p> Programs for stroke, Parkinson’s, and other neurological conditions.</p>
<h3 className='text-teal-500 font-bold text-xl mt-1'>Pediatric Therapy:</h3><p> Engaging therapies for children with developmental or injury-related needs.</p>
<h3 className='text-teal-500 font-bold text-xl mt-1'>Chronic Pain Management:</h3> <p>Comprehensive strategies to alleviate and manage chronic pain.</p>
<h3 className='text-teal-500 font-bold text-xl mt-1'>Balance and Fall Prevention:</h3> <p>Assessments and training to enhance stability and safety.</p>
<h3 className='text-teal-500 font-bold text-xl mt-1'>Manual Therapy:</h3> <p>Hands-on techniques to relieve pain and restore function.</p>
<h3 className='text-teal-500 font-bold text-xl mt-1'>Wellness and Preventive Care:</h3> <p>Programs to promote overall health and prevent injuries.</p>
</div>
<div className='flex justify-center'><Button text='More'/></div>
{/* </div> */}
</div>

{/* *************boxes************** */}

<div className='flex flex-col md:flex-row flex-1 mt-20 gap-x-6 gap-y-6 bg-teal-600 text-white border-solid rounded-xl border-x-2 border-black max-w-screen-xl'>
    <div className='border-double rounded-md border-4 border-black px-8 py-6'>
        <h2 className='font-bold text-2xl sm:text-lg text-white'>Why Choose Us?</h2>
        <h3 className='text-black font-semibold text-md mt-1'>Personalized Treatment Plans:</h3><p className='text-sm'>We create personalized programs designed to meet your specific needs and goals.</p>

        <h3 className='text-black font-semibold text-md mt-1'>Expert Care:</h3> <p className='text-sm'>Our experienced therapists utilize the latest techniques to ensure you receive the highest quality of care.</p>

        <h3 className='text-black font-semibold text-md mt-1'>Advanced Facilities:</h3><p className='text-sm'> Our state-of-the-art center is equipped with modern technology and tools to enhance your rehabilitation experience.</p></div>
    
    <div className='border-4 border-black rounded-md border-double px-8 py-6'>
        <h2 className='font-bold text-2xl sm:text-lg text-white'>Patient-Centered Environment</h2>
        <p className='text-sm mt-5'>We pride ourselves on creating a welcoming and supportive environment. Your comfort and progress are our top priorities. We listen to your concerns, celebrate your milestones, and adjust your plan as you improve.</p>
        <h2 className='font-bold text-2xl sm:text-lg text-white mt-12 mb-4'>Our Philosophy</h2>
        <p className='text-sm'>We believe in a whole-person approach to recovery. Our focus is not just on healing injuries but on empowering you with knowledge and strategies for a lasting, active lifestyle. We’re here to motivate, support, and inspire you throughout your recovery journey.</p>
    </div>

     <div className='border-4 border-black rounded-md border-double px-8 py-6'>
    <h2 className='font-bold text-2xl sm:text-lg text-white'>Our Approach</h2>

    <h3 className='text-black font-semibold text-md mt-1'>Assessment & Evaluation:</h3> <p className='text-sm'>We start with a thorough evaluation to understand your condition and develop a targeted treatment plan.</p>

    <h3 className='text-black font-semibold text-md mt-1'>Hands-On Therapy:</h3> <p className='text-sm'>Our therapists use manual techniques, exercise therapy, and modalities to facilitate healing and restore function.</p>

    <h3 className='text-black font-semibold text-md mt-1'>Education & Empowerment:</h3><p className='text-sm'>We equip you with the knowledge and tools you need to manage your condition and prevent future injuries.</p>
    </div> 
    </div>
    <div> 
        <h2 className='font-bold text-3xl text-teal-800 mt-16'>Let’s Get Started!</h2>
<p className="mt-2 text-m text-slate-900 py-1">Are you ready to take control of your health and well-being? Reach out to us today to schedule your first consultation. Our friendly team is eager to assist you and answer any questions.</p>

<p className='mt-6 font-bold text-3xl text-teal-800'>Start Your Journey</p>

<p className="mt-2 text-m text-slate-900 py-1">
    —where your path to recovery is met with care, compassion, and commitment!</p>
    
</div>    



        </Wrapper>
      
        </section>
  )
}

export default Services

