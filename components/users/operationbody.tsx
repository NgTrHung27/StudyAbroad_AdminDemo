import React from 'react'
import Image from 'next/image'
import { Operationcard_1 } from './operationcard_1'

export const OperationBody = () => {
  return (
    <div className='w-full h-[fit] bg-black relative py-12'>
        <Image alt='/' src='/Truong1/bg-operations.png' fill className='w-full h-full z-0 relative ' />
        <div className='z-10 flex flex-col md:grid md:grid-cols-3 gap-4 px-5 mt-48 '>
            <div className='md:col-span-1 '>
                <Operationcard_1/>
            </div>
            <div className='md:col-span-1'>
                <Operationcard_1/>
            </div>
            <div className='md:col-span-1'>
                <Operationcard_1/>
            </div>
            <div className='md:col-start-2 md:col-span-1 mt-[250px] '>
                <Operationcard_1/>
            </div>
        </div>
        <div className='w-full h-8 bg-yellow-500 rounded-t-xl absolute bottom-0'></div>
  </div>
  )
}
