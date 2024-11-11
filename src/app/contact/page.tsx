"use client"
import ContactForm from "@/components/widges/Form"
const Contact = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-2 flex flex-col md:flex-row items-center space-x-10">
    <div className="flex-1 max-w-xl">
        <h2 className="text-teal-600 font-bold text-3xl sm:text-5xl text-center md:text-teal-500">Book Your Slot Now And Save Your Time</h2>
        <p className="mt-4 text-lg text-slate-900 font-bold">
              Ready to take the first step towards recovery?</p> 
              <p>Contact us today to
              schedule your free consultation and discover how we can help you
              achieve your health and wellness goals.
            </p>
    </div>
          
              
<div className="flex-1 space-x-3">
    <ContactForm />
    </div>
        </main>
  )
      }

export default Contact
