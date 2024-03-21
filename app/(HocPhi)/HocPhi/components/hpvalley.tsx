import React from 'react'
import Image from 'next/image'

export const Hpvalley = () => {
  return (
    <div className='w-full h-fit p-5 grid grid-cols-3 bg-gray-300'>
        <div className='col-span-1 relative items-center justify-center bg-[#99CA3B] rounded-2xl px-0 md:px-5 flex'>
            <div className='w-full md:h-[50%] h-[20%] relative '>
                <Image alt='/' fill src={"/HocPhi/Valley.jpg"} 
                className=' absolute'  
                sizes='w-full h-full'/>
            </div>
        </div>
        <div className='col-span-1 px-2 md:px-5 flex flex-col gap-y-3 md:ml-3 ml-1 font-bold md:text-xs text-[8.5px]'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4 '>
                <p>Nhân chủng học (Cử nhân)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Hệ thống thông tin máy tính (Cử nhân)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Sản xuất Kỹ thuật số (chứng chỉ)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Giáo dục Mầm non (chứng chỉ)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Khoa học Chính trị (Cử nhân)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Công tác xã hội (Thạc sĩ)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Tư pháp hình sự (Thạc sĩ)</p>
            </div>
        </div>
        <div className='col-span-1 md:px-5 px-3 flex flex-col gap-y-3 font-bold md:text-xs text-[9.5px] ml-2'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >15,120 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >15,120 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >7,560 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >7,560 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >15,120 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >12,500 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >12,500 CAD</p>
            </div>
        </div>
    </div>
  )
}
