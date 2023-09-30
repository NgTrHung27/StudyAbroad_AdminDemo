import React from 'react'
import Image from 'next/image';

export const Header = () => {
  return (
    <div className='w-[full] h-[389px] overflow-hidden relative '>
        <Image src={"/NganhHoc/headerNganhHoc.png"} alt='/' width={1440} height={389} />    
        <div className='absolute w-[80%] h-20 bg-blue-900 left-0 bottom-0 text-white text-center font-bold text-[55px] inset-auto '>
          <p className=''>Các ngành học tại Cornerstone</p>
        </div>            
    </div>
  )
}
