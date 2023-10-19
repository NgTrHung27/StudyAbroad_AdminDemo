import React from 'react'
import Image from 'next/image'

export const Hpmetropolitan = () => {
  return (
    <div className='w-full h-fit p-5 grid grid-cols-3 bg-gray-300'>
        <div className='col-span-1 relative items-center justify-center bg-[#013334] rounded-2xl px-0 md:px-5 flex'>
            <div className='w-full md:h-[40%] h-[20%] relative '>
                <Image alt='/' fill src={"/HocPhi/Metropolitan.jpg"} className='w-full h-full absolute'  />
            </div>
        </div>
        <div className='col-span-1 px-2 md:px-5 flex flex-col gap-y-3 md:ml-3 ml-1 font-bold md:text-[10.8px] text-[7.5px]'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4 '>
                <p >Kỹ thuật Cơ khí - Khoa học Quản lý (Co-op)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Khoa học Máy tính (Thạc sĩ)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Mạng máy tính (Thạc sĩ)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Kỹ thuật Máy tính - Khoa học Quản lý (Co-op)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Quản lý kinh doanh (Cử nhân)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Kế toán và Tài chính (Danh dự) (Cử nhân)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Kỹ thuật Y sinh - Khoa học Quản lý (Cử nhân)</p>
            </div>
        </div>
        <div className='col-span-1 md:px-5 px-3 flex flex-col gap-y-3 font-bold md:text-xs text-[9.5px] ml-2'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >38,340 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >24,260 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >33,309 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >38,340 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >38,340 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >38,432 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >38,340 CAD</p>
            </div>
        </div>
    </div>
  )
}
