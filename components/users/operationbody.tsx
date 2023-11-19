import React from 'react'
import Image from 'next/image'
import { Operation, School } from '@prisma/client';
import { cn } from '../../lib/utils';
import { Preview } from '../preview';
interface Props {
    school: School;
    operations: Operation[];
}
export const OperationBody = ({ school, operations }: Props) => {
    return (
        <div className={cn("w-full h-[fit] relative flex items-center justify-center py-12", `bg-[${school.colorValue}]`)}>
            <Image alt='/' src='/Truong1/bg-operations.png' fill className='w-full h-full z-0 relative ' />
            <div className='z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-5 '>
                {
                    operations.map((operation) => (
                        <div key={operation.name}>
                            <div className='col-span-1 '>
                                <div className='relative w-fit flex items-center flex-col'>
                                    <div>
                                        <Image alt='/'
                                            src={operation.backgroundUrl} width={291} height={281} className='z-[2]' />
                                    </div>
                                    <div className='bg-white w-[100%] py-6 h-fit rounded-[16px] relative z-[1] px-9 -mt-12 '>
                                        <div className='flex flex-col justify-center items-center '>
                                            <div className='mt-9 flex flex-row'>
                                                <Image alt='/' src='/Truong1/award.png' width={24} height={24} />
                                                <p className='font-bold'>{operation.name}</p>
                                                <Image alt='/' src='/Truong1/award.png' width={24} height={24} />
                                            </div>
                                            <div className='flex text-center text-gray-500 text-[20px] '>
                                                <p>
                                                    <Preview value={operation.description} />
                                                </p>
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
                            </div>
                        </div>))

                }
            </div>
            <div className='w-full h-8  rounded-t-xl absolute bottom-0'></div>
        </div>
    )
}
