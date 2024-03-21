import React from 'react'
import Image from 'next/image'

export const HPsprott = () => {
  return (
    <div className='w-full h-fit p-5 grid grid-cols-3 bg-gray-300'>
        <div className='col-span-1 relative items-center justify-center bg-[#29C4F4] rounded-2xl px-0 md:px-2 flex'>
            <div className='w-full md:h-[50%] h-[20%] relative '>
                <Image alt='/' fill 
                src={"/HocPhi/Sprott.jpg"}
                sizes='h-full w-full'
                className='w-full h-full absolute'  />
            </div>
        </div>
        <div className='col-span-1 px-2 md:px-5 flex flex-col gap-y-3 md:ml-3 ml-1 font-bold md:text-xs text-[8px]'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4 '>
                <p >Giao tiếp kinh doanh</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Chuẩn thi đo lường mức độ Tiếng Anh của Canada</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Hoạt động khách sạn</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Quản lý toàn cầu trong khách sạn</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Trợ lý pháp lý nâng cao</p>
            </div>
        </div>
        <div className='col-span-1 md:px-5 px-3 flex flex-col gap-y-3 font-bold md:text-xs text-[9.5px] ml-2'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >10,495 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >6,7475 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >7,995 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >5,2475 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >13,495 CAD</p>
            </div>
        </div>
    </div>
  )
}
