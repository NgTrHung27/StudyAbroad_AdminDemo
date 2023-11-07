import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='h-full w-full'>
        <div className='pl-5 pt-5 w-full bg-white h-[15%] mb-36 '>
            <h1 className='text-red-900 font-bold md:text-2xl text-xl'>Thông tin cá nhân</h1>
        </div>
        <div className='bg-red-900 w-full md:h-[85%] relative flex justify-center text-center md:text-start md:pl-[5%] pb-8'>
            <div className='grid md:grid-cols-4 grid-cols-1'>
                <div className='col-span-1 flex flex-col items-center'>
                    <div className='md:w-[370px] md:h-[370px] w-[300px] h-[300px] relative -mt-[50%] rounded-full md:mb-0 mb-6 '>
                       <Image alt='/' src={"/userinfo/ei_user.png"} fill className='h-full w-full absolute'/>     
                    </div>
                    <button className='bg-black/50 w-24 h-12 rounded-md -mt-6 flex text-center justify-center items-center '>
                        <p className='text-white'>Thêm ảnh</p>
                    </button>
                </div>
                <div className='col-span-2 gap-4 flex flex-col text-center items-center md:ml-[10%] md:text-start md:items-start'>
                    <p className='md:-mt-8 md:text-red-900 text-lime-400 font-bold text-2xl'>
                        Username
                    </p>
                    <div className='flex text-white text-2xl font-semibold '>
                        <p className=''>
                            Dân tộc: &nbsp;
                        </p>
                        <p className=''>
                            Kinh
                        </p>
                    </div>
                    <div className='flex text-white text-2xl font-semibold '>
                        <p className=''>
                            Tôn giáo: &nbsp;
                        </p>
                        <p className=''>
                            Phật Giáo
                        </p>
                    </div>
                    <div className='flex text-white text-2xl font-semibold'>
                        <p className=''>
                            Quốc gia: &nbsp;
                        </p>
                        <p className=''>
                            Việt Nam
                        </p>
                    </div>
                    <div className='flex text-white text-2xl font-semibold'>
                        <p className=''>
                            Tỉnh thành: &nbsp;
                        </p>
                        <p className=''>
                            TP.HCM
                        </p>
                    </div>
                    <div className='flex text-white text-2xl font-semibold'>
                        <p className=''>
                             Quận/Huyện: &nbsp;
                        </p>
                        <p className=''>
                            Quận 11
                        </p>
                    </div>
                    <div className='flex text-white text-2xl font-semibold'>
                        <p className=''>
                            Điện thoại: &nbsp;
                        </p>
                        <p className=''>
                            0912345678
                        </p>
                    </div>
                    <div className='flex text-white text-2xl font-semibold'>
                        <p className=''>
                            Trạng thái: &nbsp;
                        </p>
                        <p className=''>
                            Duyệt
                        </p>
                    </div>
                </div>
                <div className='absolute top-0 right-[5%]'>
                    <button className='bg-black/50 w-fit h-12 rounded-md flex text-center justify-center items-center p-3 mt-12 '>
                        <p className='text-white'>Chỉnh sửa hồ sơ</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page