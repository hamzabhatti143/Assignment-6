import React from "react";
import Image from "next/image";
import Link from "next/link";
const header = () => {
  return (
    <>
    <div className="w-full p-8 pt-0 pb-0 hidden md:flex flex-row">
        <div className="w-[500px] flex flex-row justify-around p-2 ">
          <p>Phone Number: 956 742 455 678</p>
          <Image src={"/images/Line.png"} alt="Logo" width={3} height={1} className="h-[28px]"/>
          <p> Email:info@ddsgnr.com</p>
        </div>

        <div className="w-3/4 flex justify-end">
        <Image src={"/images/Facebook.png"} alt="Facebook" width={24} height={24} />

        <Image
          src={"/images/Instagram.png"}
          alt="Instagram"
          width={24}
          height={24}
        />

        <Image src={"/images/Twitter.png"} alt="Twitter" width={24} height={24} />

        <Image src={"/images/LinkedIn.png"} alt="LinkedIn" width={24} height={24} />
        </div>
      </div>


      <header className="w-full p-5 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={130}
            height={41}
            className="w-1/2 md:w-[130px]"
          />
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-3/4">
          <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-around items-center mb-6 md:mb-0">
            <Link href="/">Home</Link>
            <Link href="/">Courses</Link>
            <Link href="/">Services</Link>
            <Link href="/">Achievement</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Testimonial</Link>
          </div>
          <div className="w-full md:w-1/4 flex justify-evenly items-center">
            <Link
              href="/"
              className="w-[80px] text-center border-2 p-2 rounded-lg border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              <button>Login</button>
            </Link>
            <Link
              href="/"
              className="w-[80px] text-center border-2 p-2 bg-slate-900 text-white rounded-lg border-slate-900 hover:bg-white hover:text-black"
            >
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
