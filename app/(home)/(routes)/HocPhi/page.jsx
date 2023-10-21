import React from 'react'
import { Hpcornerstone } from './components/hpcornerstone'
import { Hpmetropolitan } from './components/hpmetropolitan'
import { Hpcanadawest } from './components/hpcanadawest'
import { Hpvalley } from './components/hpvalley'
import { HPsprott } from './components/hpsprott'


function page() {
  return (
    <div className='pt-28 px-[8%] h-fit w-full items-center flex flex-col'>
        <div className='text-center text-3xl font-bold text-red-900 '>
            HỌC PHÍ NĂM HỌC 2023-2024
        </div>
        <div className='grid grid-cols-3 w-full h-[3.5em] mt-[5%]'>
            <div className='col-span-1 bg-red-900 text-white font-bold text-center justify-center flex items-center'>
                    TRƯỜNG
            </div>
            <div className='col-span-1 bg-red-900 text-white font-bold text-center justify-center flex items-center'>
                    NGÀNH
            </div>
            <div className='col-span-1 bg-red-900 text-white font-bold text-center justify-center flex items-center'>
                    HỌC PHÍ / 1 NĂM*
            </div>
        </div>
        <Hpcornerstone/>
        <Hpmetropolitan/>
        <Hpcanadawest/>
        <Hpvalley/>
        <HPsprott/>
    </div>
  ) 
}

export default page