import React from 'react';
import Image from 'next/image';

export const OperationTop = () => {
  return (
    <div>
      <div className='flex flex-col'>
        <div className='relative'>
          <Image alt='/' src='/Truong1/historyheader.png' fill className='z-0 absolute' />
          <div className='bg-blue-950 bg-opacity-90 z-10 relative inset-0 w-full min-h-[219px] text-center items-center flex flex-col'>
            <div className='text-2xl md:text-5xl font-bold text-white pb-4 mt-3 '>
              <p style={{ letterSpacing: "-1px" }}>Các cơ sở của Cornerstone</p>
            </div>
            <div className='bg-white w-[92%] min-h-fit z-20 top-[70px] mb-5 flex flex-col'>
              <div className='flex flex-row justify-center '>
                <div><Image className='mx-1' alt='/' src={"/Truong1/book.png"} width={24} height={24} /></div>
                <div className='flex flex-col items-center text-center text-black font-[20%] text-sm md:text-base'>
                  <p >Cornerstone International Community College là trường  <br/>
                    cao đẳng tư thục lớn nhất ở Vancouver.</p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col mt-2 justify-center items-center">
                  <div>
                    <Image
                      className="mx-1"
                      alt="/"
                      src={"/Truong1/brifecase.png"}
                      width={34}
                      height={36}
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <p style={{ letterSpacing: "-0.5px" }}>
                      Trường có 3 cơ sở :
                    </p>
                    <p
                      style={{ letterSpacing: "-0.5px" }}
                      className="mt-[-5px]"
                    >
                      {" "}
                      West Hastings, Granville và Seymore.
                    </p>
                  </div>
                </div>
                <div className="mx-[85px]">
                  <Image
                    className="mx-1"
                    alt="/"
                    src={"/Truong1/canadaflag.png"}
                    width={137}
                    height={69}
                  />
                </div>
                <div className="flex flex-col mt-2 justify-center items-center">
                  <div>
                    <Image
                      className="mx-1"
                      alt="/"
                      src={"/Truong1/brifecase.png"}
                      width={34}
                      height={36}
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <p style={{ letterSpacing: "-0.5px" }}>
                      {" "}
                      Thêm 1 cơ sở đang được xây dựng tại Gastown
                    </p>
                    <p
                      style={{ letterSpacing: "-0.5px" }}
                      className="mt-[-5px]"
                    >
                      {" "}
                      cho các chương trình công nghệ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
