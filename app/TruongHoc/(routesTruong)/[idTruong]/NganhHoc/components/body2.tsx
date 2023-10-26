import React from 'react'
import Image from 'next/image';

export const Body2 = () => {
  return (
    <div className='w-full h-fit bg-white'>
        <div className='w-full md:h-[151px] h-fit bg-blue-900 text-center justify-center font-bold text-[30px] md:text-[48px] py-9 text-white'><p>Theo dõi quá trình học ở canada</p></div>
        <div className='w-full h-full md:ml-[274px] ml-[40px] flex flex-col text-[#475F79] font-semibold text-[14px] md:text-[20px]'>
            <div className='flex flex-col relative '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2'>Cập nhật thông tin cho phụ huynh trong quá trình học ở Canada</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 '>  Hỗ trợ du học sinh trong quá trình học ở Canada ( nơi ở , sinh hoạt, đi lại ..)</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2'>  Chia sẽ thông tin về cơ hội việc làm cho du học sinh</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2'>  Chia sẽ thông tin lưu trú tại Canada</p>
                </div>
            </div>
        </div>
    </div>
  )
}
