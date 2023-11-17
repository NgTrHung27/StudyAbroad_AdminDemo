import React from 'react'
import Image from 'next/image';
import { School } from '@prisma/client';
interface Props {
  school: School;
}
export const Header = ({ school }: Props) => {
  return (
    <div className='w-full h-[389px] overflow-hidden relative '>
      <Image src={"/NganhHoc/headerNganhHoc.png"} alt='/' fill />
      <div className='absolute w-[80%] h-20 bg-blue-900 left-0 bottom-0 text-white text-center font-bold md:text-[55px] text-[30px] '>
        <p className=''>Các ngành học tại {school.name}</p>
      </div>
    </div>
  )
}
