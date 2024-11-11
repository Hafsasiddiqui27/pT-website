import React from 'react'
import {FC} from 'react'

const Button:FC<{text:string}> = ({text}) => {
   
  return (
    
      <button 
      className="mt-10 font-semibold bg-[#00616C] text-white rounded-full  px-8 py-4
      hover:scale-105 duration-150 shadow-2xl">
        {text}
        </button>

  )
}

export default Button
