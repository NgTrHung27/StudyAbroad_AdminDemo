import React from 'react'
import Image from 'next/image';


export const Operationcard_1 = () => {
  return (
    <div className='relative w-fit flex items-center flex-col'>
      <div>
        <Image alt='/' src='/Truong1/truong2.png' width={291} height={281} className='z-[2]' />
      </div>
      <div className='bg-white w-[100%] py-6 h-fit rounded-[16px] relative z-[1] px-9 -mt-12 '>
        <div className='flex flex-col justify-center items-center '>
          <div className='mt-9 flex flex-row'>
            <Image alt='/' src='/Truong1/award.png' width={24} height={24} />
            <p className='font-bold'>Granville</p>
            <Image alt='/' src='/Truong1/award.png' width={24} height={24} />
          </div>
          <div className='flex text-center text-gray-500 text-[20px] '>
            <p>Cơ sở 2 nằm trong trung tâm của Vancouver</p>
          </div>
          <div className='flex flex-row'>
          <Image alt='/' src='/Truong1/star.png' width={24} height={24} />
          <Image alt='/' src='/Truong1/star.png' width={24} height={24} />
          <Image alt='/' src='/Truong1/star.png' width={24} height={24} />
          <Image alt='/' src='/Truong1/star.png' width={24} height={24} />
          </div>
          <div>
          <Image alt='/' src='/Truong1/check.png' width={28} height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
