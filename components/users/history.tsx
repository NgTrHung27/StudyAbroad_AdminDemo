import React from 'react'
import Image from 'next/image'

export const History = () => {
  return (
    <div className='w-full relative bg-yellow-500'>
        <div className='relative'>
             <Image alt='/' src='/Truong1/historyheader.png' width={1440} height={219} className='z-0' />           
            <div className='bg-blue-950 bg-opacity-90 z-10 absolute inset-0 w-full min-h-[225px] text-center items-center flex flex-col justify-center text-[48px] font-bold text-white '>
                <p style={{letterSpacing:"-2px"}}>Lịch sử của</p>
                <p style={{letterSpacing:"-2px"}}>Cornerstone International Community College</p>
            </div>
        </div>
        <div className='w-screen h-full grid-cols-3 grid relative' >
            <div className='col-span-1'>
                <img alt='/2' src='/Truong1/truong1.png' className='w-fit h-fit' />
            </div>
            <div className='col-span-2 relative z-0'>
                <div className='bg-white w-full top-[24px] bottom-[24px] z-10 absolute'>
                    <div className='flex flex-col py-[66px] '>
                        <div className='flex flex-row pl-[22px] pr-[58px]'>
                            <div className=' p-0 w-8 h-8 rounded-full border-yellow-500 border-[2px] border-dashed justify-center items-center font-bold flex absolute'>
                               <p>01</p> 
                            </div>
                            <div className='flex ml-[50px] text-neutral-950 font-semibold '>
                                Cornerstone international community college (CICC) là một cơ sở giáo dục nổi tiếng với lịch sử đa dạng và phong phú.
                            </div>      
                        </div>
                        <div className='bg-yellow-500 w-[4px] h-[140px] ml-[37px] mt-[1px] static '></div>
                        <div className='flex flex-row pl-[22px] pr-[58px] mt-[12px] static'>
                            <div className=' p-0 w-8 h-8 rounded-full border-yellow-500 border-[2px] border-dashed justify-center items-center font-bold flex absolute'>
                               <p>02</p> 
                            </div>
                            <div className='flex ml-[50px] text-neutral-950 font-semibold mr-[30px] '>
                                 <p>CICC được thành lập vào năm 1980 với tầm nhìn cung cấp một nền giáo dục chất lượng và dễ tiếp cận cho sinh viên từ nhiều nền văn hóa khác nhau. Kể từ khi thành lập, CICC cam kết cung cấp các chương trình học phù hợp với ngành nghề và trang bị cho sinh viên sự thành công trong sự nghiệp.</p>
                            </div>      
                        </div>
                    </div>
                    <div className='right-[142px] bottom-0 absolute z-10 w-[204px] h-[167px]'>
                         <Image src={"/Truong1/cornerstone_logo.png"} alt='logoBottom' width={240} height={167} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
