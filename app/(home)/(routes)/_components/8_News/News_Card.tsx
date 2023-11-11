import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function News_Card() {
  return (
    <>
    <Link href={"/News_Detail"} className='snap-start grid grid-row-6 md:w-[25%] w-[35%] h-full border-[0.8px] border-red-900/30 flex-shrink-0 text-red-900   bg-white shadow-md rounded-md transition hover:bg-red-900 hover:text-white hover:cursor-pointer'>
        <div className='row-span-5 relative w-full '>
            <Image alt='newsthumb' fill src={"/newsthumb.png"} className='absolute w-full h-full '/>
        </div>
        <div className='row-span-1 flex justify-start text-justify items-center md:text-[140%] text-[50%] font-semibold px-[5%] tracking-tighter '>
            <p>Canada siết quy định liên quan đến sinh viên quốc tế</p>
        </div>
    </Link>
    </>
  )
}

export default News_Card