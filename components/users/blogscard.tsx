import React from 'react'
import Image from 'next/image';


export const Blogscard = () => {
  return (
    <div className='w-[370px] h-[410px] bg-white rounded-[24px] flex flex-col text-justify items-center px-9 relative '> 
        <Image src={"/Truong1/blogscardavt.png"} alt='blogscardavt' width={220} height={100} />
        <p className='font-black text-[20px]'>Olivia</p>         
        <p className='font-light text-[16px] text-gray-500'>Tôi nhận được kiên thức sâu rộng về khách sạn, điều này cho phép tôi đảm nhận một cách chuyên nghiệp về công việc chuyên nghành quản lý khách sạn</p>       
    </div>
  )
}
