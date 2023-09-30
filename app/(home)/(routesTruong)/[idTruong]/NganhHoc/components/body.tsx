import React from 'react'
import Image from 'next/image';


export const Body = () => {
  return (
    <div className='w-full h-[500px] bg-white'>
        <div className='w-[514px] h-full ml-[274px] flex flex-col'>
            <div className='flex flex-col relative '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 font-semibold text-[20px] text-[#475F79]'>Quản lý khách sạn</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 font-semibold text-[20px] text-[#475F79]'> Quản lý kinh doanh quốc tế</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 font-semibold text-[20px] text-[#475F79]'> Chuyên gia Marketing ký thuật số</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 font-semibold text-[20px] text-[#475F79]'> Chuyên gia quan hệ khách hàng</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 font-semibold text-[20px] text-[#475F79]'> Giao diện người dùng UI/UX</p>
                </div>
            </div>
            <div className='flex flex-col relative mt-3 '>
                <div className='w-1 h-9 bg-red-700'></div>
                <div className='flex flex-row '>
                <Image src={"/NganhHoc/listNganhHocicon.png"} alt='/' width={29} height={29} className=' ml-[-13px] pt-2' />
                <p className='mt-2 ml-2 font-semibold text-[20px] text-[#475F79]'> Phát triển ứng dụng ( Web & App Mobile)</p>
                </div>
            </div>
        </div>
    </div>
  )
}
