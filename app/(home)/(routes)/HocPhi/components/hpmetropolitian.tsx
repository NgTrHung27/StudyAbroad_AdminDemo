import React from 'react'
import Image from 'next/image'

export const Metropolitian = () => {
  return (
    <div className='w-full h-fit p-5 grid grid-cols-3 bg-gray-300'>
        <div className='col-span-1 relative items-center justify-center bg-[#013334] rounded-2xl px-5 flex'>
            <div className='w-full h-[40%] relative '>
                <Image alt='/' fill src={"/HocPhi/Metropolitan.jpg"} className='w-full h-full absolute'  />
            </div>
        </div>
        <div className='col-span-1 px-5 flex flex-col gap-y-3 ml-3'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Kỹ thuật Cơ khí - Khoa học Quản lý (Co-op)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Khoa học Máy tính (Thạc sĩ)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Mạng máy tính (Thạc sĩ)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Kỹ thuật Máy tính - Khoa học Quản lý (Co-op)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Quản lý kinh doanh (Cử nhân)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Kế toán và Tài chính (Danh dự) (Cử nhân)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>Kỹ thuật Y sinh - Khoa học Quản lý (Cử nhân)</p>
            </div>
        </div>
        <div className='col-span-1 px-5 flex flex-col gap-y-3'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>38,340 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>24,260 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>33,309 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>38,340 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>38,340 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>38,432 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p className='font-bold text-xs'>38,340 CAD</p>
            </div>
        </div>
    </div>
  )
}
