"use client"
import React from 'react'
import Image from 'next/image';
import { Program } from '@prisma/client';
interface Props {
    programs: Program[];
}
export const Body = ({ programs }: Props) => {
    return (
        <div className='w-full h-auto bg-white '>
            <div className='w-[514px] h-full md:ml-[274px] ml-[40px] flex flex-col  text-[#475F79] font-semibold text-[15px] md:text-[20px] '>
                <div className='flex flex-col relative  '>
                    <div className='w-1 h-9 bg-red-700'></div>
                    <div className='flex flex-row'>
                        <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                    </div>
                </div>
                {
                    programs.map((program) => (
                        <div key={program.name}
                            className='flex flex-col relative mt-3 '>
                            <div className='w-1 h-9 bg-red-700'></div>
                            <div className='flex flex-row '>
                                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                                <p className='mt-2 ml-2'>{program.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
