import React from 'react'
import Image from 'next/image'
import { Operationcard_1 } from './operationcard_1'

export const OperationBody = () => {
  return (
    <div className='w-full h-[fit] bg-black relative flex items-center justify-center py-12'>
        <Image alt='/' src='/Truong1/bg-operations.png' fill className='w-full h-full z-0 relative ' />
        <div className='z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-5 '>
            <div className='col-span-1 '>
                <Operationcard_1/>
            </div>
            <div className='col-span-1'>
                <Operationcard_1/>
            </div>
            <div className='col-span-1'>
                <Operationcard_1/>
            </div>
            <div className='md:col-start-2 col-span-1'>
                <Operationcard_1/>
            </div>
        </div>
        <div className='w-full h-8 bg-yellow-500 rounded-t-xl absolute bottom-0'></div>
  </div>
  )
}
