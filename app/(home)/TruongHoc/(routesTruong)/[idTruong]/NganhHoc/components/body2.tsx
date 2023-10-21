import React from 'react'
import Image from 'next/image';

export const Body2 = () => {
  return (
    <div className='w-full h-[500px] bg-white'>
        <div className='w-full h-[151px] bg-blue-900 text-center justify-center font-bold text-[48px] py-9 text-white'><p>Theo dõi quá trình học ở canada</p></div>
        <div className='w-[auto] h-full ml-[274px] flex flex-col'>
            <div className='flex flex-col relative '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 font-semibold text-[20px] text-[#475F79]'>Cập nhật thông tin cho phụ huynh trong quá trình học ở Canada</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 font-semibold text-[20px] text-[#475F79]'>  Hỗ trợ du học sinh trong quá trình học ở Canada ( nơi ở , sinh hoạt, đi lại ..)</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 font-semibold text-[20px]    text-[#475F79]'>  Chia sẽ thông tin về cơ hội việc làm cho du học sinh</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 font-semibold text-[20px] text-[#475F79]'>  Chia sẽ thông tin lưu trú tại Canada</p>
                </div>
            </div>
        </div>
    </div>
  )
}
