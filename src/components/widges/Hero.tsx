import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import HeroPoster from "@/app/assets/images/hero-poster.jpg";
import Button from "@/components/shared/Button";
import Link from "next/link";
const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* left side */}
          <div className="flex-1 max-w-xl">
          <h3 className="text-teal-600 font-semibold text-lg mt-6">Your Path to Recovery Starts Here</h3>
            <h1 className="text-teal-700 font-bold text-4xl sm:text-5xl text-center lg:text-black md:text-teal-500">Welcome to Physical Therapy & <br />Rehabilitation Center</h1>
           
            <p className="mt-6px text-m text-slate-900 py-3">
              At our Rehabilitation Center, we believe in empowering you on
              your journey to wellness. Our state-of-the-art physical therapy
              and rehabilitation center is dedicated to helping you regain your
              strength, improve mobility, and enhance your quality of life.
            </p>
            <h2 className="text-teal-500 font-bold text-2xl mt-4">Schedule Your Free Consultation</h2>
            <p className="mt-6px text-m text-slate-900">
              Ready to take the first step towards recovery?<br /> Contact us today to
              schedule your free consultation and discover how we can help you
              achieve your health and wellness goals.
            </p>
            <Link href='/contact'><Button text={"Book Your Appointment"} /> </Link>
            
          </div>

          {/* right side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="Hero poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
