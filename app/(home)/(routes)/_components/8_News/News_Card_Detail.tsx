import React from 'react'
import Image from 'next/image'

function News_Card_Detail() {
  return (
<div className='grid grid-cols-10 w-[100%] md:w-[70%] h-40 border-[0.8px] border-red-900/30 bg-white shadow-md rounded-md'>
    <div className='md:col-span-3 col-span-4 relative w-full h-full '>
        <Image alt='newsthumb' fill src={"/newsthumb.png"} className='absolute w-full h-full '/>
    </div>
    <div className='md:col-span-7 col-span-6 flex justify-start text-justify items-center text-[90%] md:text-[140%] px-[3%]  text-red-900 font-semibold tracking-tighter '>
        <p>Canada siết quy định liên quan đến sinh viên quốc tế</p>
    </div>
</div>
  )
}

export default News_Card_Detail