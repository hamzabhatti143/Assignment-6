import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function team() {
  return (
    <>
      <div className="w-full  mt-6 md:mt-0 p-3 md:p-6">
        <h2 className="font-bold leading-[35px] md:leading-[57.6px] text-xl md:text-5xl text-center">
          Our team
        </h2>
        <p className="text-lg leading-[27px] text-justify md:text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
      </div>

      <div className="w-full p-2 md:p-0 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[410.67px] h-[132px] flex items-center bg-[#F7F7F7]">
          <Image
            src={"/images/Frame1.png"}
            alt="Frame1"
            width={100}
            height={100}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[20px] font-semibold leading-[30px]">
              Design & Development
            </h5>
            <p className="text-lg leading-[27px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="w-full md:w-[410.67px] h-[132px] flex items-center bg-[#F7F7F7]">
          <Image
            src={"/images/Frame2.png"}
            alt="Frame2"
            width={100}
            height={100}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[20px] font-semibold leading-[30px]">
              Marketing
            </h5>
            <p className="text-lg leading-[27px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="w-full md:w-[410.67px] h-[132px] flex items-center bg-[#F7F7F7]">
          <Image
            src={"/images/Frame3.png"}
            alt="Frame3"
            width={100}
            height={100}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[20px] font-semibold leading-[30px]">
              Development
            </h5>
            <p className="text-lg leading-[27px]">50+ Courses Available</p>
          </div>
        </div>
      </div>

      <div className="w-full p-2 md:p-0 hidden mt-4 md:flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[410.67px] h-[132px] flex items-center bg-[#F7F7F7]">
          <Image
            src={"/images/Frame4.png"}
            alt="Frame4"
            width={100}
            height={100}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-base md:text-[20px] font-semibold leading-[30px]">
              Communication
            </h5>
            <p className="text-sm md:text-lg leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="w-full md:w-[410.67px] h-[132px] flex items-center bg-[#F7F7F7]">
          <Image
            src={"/images/Frame5.png"}
            alt="Frame5"
            width={100}
            height={100}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-base md:text-[20px] font-semibold leading-[30px]">
              Digital Marketing
            </h5>
            <p className="text-sm md:text-lg leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="w-full md:w-[410.67px] h-[132px] flex items-center bg-[#F7F7F7]">
          <Image
            src={"/images/Frame6.png"}
            alt="Frame6"
            width={100}
            height={100}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-base md:text-[20px] font-semibold leading-[30px]">
              Self Development
            </h5>
            <p className="text-sm md:text-lg leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>
      </div>

      <div className="w-full p-2 md:p-0 mt-4 hidden md:flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[410.67px] h-[132px] flex items-center bg-[#F7F7F7]">
          <Image
            src={"/images/Frame7.png"}
            alt="Frame7"
            width={100}
            height={100}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-base md:text-[20px] font-semibold leading-[30px]">
              Business
            </h5>
            <p className="text-sm md:text-lg leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="w-full md:w-[410.67px] h-[132px] flex items-center bg-[#F7F7F7]">
          <Image
            src={"/images/Frame8.png"}
            alt="Frame8"
            width={100}
            height={100}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-base md:text-[20px] font-semibold leading-[30px]">
              Finance
            </h5>
            <p className="text-sm md:text-lg leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="w-full md:w-[410.67px] h-[132px] flex items-center bg-[#F7F7F7]">
          <Image
            src={"/images/Frame9.png"}
            alt="Frame9"
            width={100}
            height={100}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-base md:text-[20px] font-semibold leading-[30px]">
              Consulting
            </h5>
            <p className="text-sm md:text-lg leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 fade-up flex items-center justify-center">
        <Link
          href="/"
          className="flex items-center justify-center border-2 hover:bg-slate-900 hover:text-white w-[155px] h-[48px]"
        >
          View All Courses
        </Link>
      </div>
    </>
  )
}

export default team
