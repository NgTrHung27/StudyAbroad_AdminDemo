import React from 'react'
import Image from 'next/image'

export const Hpcornerstone = () => {
  return (
    <div className='w-full h-fit p-5 grid grid-cols-3 bg-gray-300'>
        <div className='col-span-1 relative items-center justify-center bg-[#253C8A] rounded-2xl px-0 md:px-5 flex'>
            <div className='w-full md:h-[40%] h-[20%] relative '>
                <Image alt='/' fill src={"/HocPhi/Cornerstone.jpg"} 
                sizes='w-full h-full '
                className='absolute'  />
            </div>
        </div>
        <div className='col-span-1 px-2 md:px-5 flex flex-col gap-y-3 md:ml-3 ml-1 font-bold md:text-xs text-[9.5px]'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4 '>
                <p >Quản lý khách sạn</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Kinh doanh quốc tế</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Hệ thống mạng & Mạng</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Hiển thị kĩ thuật số</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Quan hệ khách hàng</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Thiết kế UI/UX</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Phát triển ứng dụng di động</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Phát triển website</p>
            </div>
        </div>
        <div className='col-span-1 md:px-5 px-3 flex flex-col gap-y-3 font-bold md:text-xs text-[9.5px] ml-2'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >5,247 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >7,995 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >13,495 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >6,747 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >5,495 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >6,747 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >7,522 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p>7,522 CAD</p>
            </div>
        </div>
    </div>
  )
}
