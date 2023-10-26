import React from 'react'
import Image from 'next/image'

export const Hpcanadawest = () => {
  return (
    <div className='w-full h-fit p-5 grid grid-cols-3 bg-gray-300'>
        <div className='col-span-1 relative items-center justify-center bg-[#D12030] rounded-2xl px-0 md:px-5 flex'>
            <div className='w-full md:h-[40%] h-[20%] relative '>
                <Image alt='/' fill src={"/HocPhi/Canada.jpg"} className='w-full h-full absolute'  />
            </div>
        </div>
        <div className='col-span-1 px-2 md:px-5 flex flex-col gap-y-3 md:ml-3 ml-1 font-bold md:text-xs text-[8.5px]'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4 '>
                <p >Thương mại (Cử nhân)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Truyền thông doanh nghiệp (Cử nhân)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Nghệ thuật (Cao đẳng)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>UAP</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Quản trị Kinh doanh (Thạc sĩ)</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex px-4'>
                <p>Dự bị Thạc sĩ Quản trị Kinh doanh</p>
            </div>
        </div>
        <div className='col-span-1 md:px-5 px-3 flex flex-col gap-y-3 font-bold md:text-xs text-[9.5px] ml-2'>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >18,270 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >18,270 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >19,200 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >5,455 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p >19,350 CAD</p>
            </div>
            <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
                <p>7,750 CAD</p>
            </div>
        </div>
    </div>
  )
}
