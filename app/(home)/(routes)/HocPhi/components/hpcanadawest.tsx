import React from 'react'
import Image from 'next/image'

export const Hpcanadawest = () => {
  return (
    <div className='w-full h-fit p-5 grid grid-cols-3 bg-gray-300'>
    <div className='col-span-1 relative items-center justify-center bg-[#D12030] rounded-2xl px-5 flex'>
        <div className='w-full h-[40%] relative '>
            <Image alt='/' fill src={"/HocPhi/Canada.jpg"} className='w-full h-full absolute'  />
        </div>
    </div>
    <div className='col-span-1 px-5 flex flex-col gap-y-3 ml-3'>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>Thương mại (Cử nhân)</p>
        </div>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>Truyền thông doanh nghiệp (Cử nhân)</p>
        </div>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>Nghệ thuật (Cao đẳng)</p>
        </div>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>UAP</p>
        </div>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>Quản trị Kinh doanh (Thạc sĩ)</p>
        </div>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>Dự bị Thạc sĩ Quản trị Kinh doanh</p>
        </div>
    </div>
    <div className='col-span-1 px-5 flex flex-col gap-y-3'>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>18,270 CAD</p>
        </div>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>18,270 CAD</p>
        </div>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>19,200 CAD</p>
        </div>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>5,455 CAD</p>
        </div>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>19,350 CAD</p>
        </div>
        <div className='bg-white rounded-xl h-12 w-full items-center flex pl-4'>
            <p className='font-bold text-xs'>7,750 CAD</p>
        </div>
    </div>
</div>
  )
}
