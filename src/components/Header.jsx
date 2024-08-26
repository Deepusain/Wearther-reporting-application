import React from 'react'
import headerbg from "./img/headerbg.jpg"


function Header() {
  return (
    <div className='w-full h-32 '>
          <img src={headerbg} alt="" className='w-full h-24 mt-2' />
          <p className='flex items-center justify-center mt-[-70px] font-semibold text-[25px] text-white'>Weather Forecast Reports</p>
    </div>
  )
}

export default Header