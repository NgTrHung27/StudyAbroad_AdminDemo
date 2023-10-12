import React from 'react'
import Image from 'next/image'

export const Hpcornerstone = () => {
  return (
    <div className='w-full h-fit p-5 grid grid-cols-3 bg-gray-300'>
        <div className='col-span-1 relative items-center justify-center bg-[#253C8A] rounded-2xl px-5 flex'>
            <div className='w-full h-[40%] relative '>
                <Image alt='/' fill src={"/HocPhi/Cornerstone.jpg"} className='w-full h-full absolute'  />
            </div>
        </div>
        <div className='col-span-1 px-5 flex flex-col gap-y-3 ml-3'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Quản lý khách sạn</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Kinh doanh quốc tế</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Hệ thống mạng & Mạng</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Hiển thị kĩ thuật số</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Quan hệ khách hàng</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Thiết kế UI/UX</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Phát triển ứng dụng di động</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Phát triển website</p>
            </div>
        </div>
        <div className='col-span-1 px-5 flex flex-col gap-y-3'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>5,247 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>7,995 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>13,495 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>6,747 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>5,495 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>6,747 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>7,522 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>7,522 CAD</p>
            </div>
        </div>
    </div>
  )
}
