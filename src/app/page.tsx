import Header from "@/components/header";
import Course from "@/components/courses";
import Blog from "@/components/blog";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />

      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center items-center">
          <h1
            className="w-full text-4xl md:text-[56px] md:p-5 
        font-bold md:leading-[67.2px]"
          >
            Learn new skills online with ease
          </h1>

          <p
            className="w-full md:w-[580px] text-[13px] md:text-lg mt-6 md:mt-0 md:pt-0 md:p-5 flex 
        justify-center items-center leading-[27px]"
          >
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>

          <div className="w-full flex md:p-5 mt-10 md:mt-0">
            <Link
              href="/"
              className="w-[300px] md:w-[180px] text-sm md:text-lg mr-6 text-center 
            border-2 p-2 bg-slate-900 text-white rounded-lg border-slate-900 flex items-center justify-center
            hover:bg-white hover:text-black"
            >
              Start Learning Now
            </Link>
            <Link
              href="/"
              className="w-[300px] md:w-[180px] text-sm md:text-lg text-center 
            border-2 p-2 rounded-lg border-slate-900 hover:bg-slate-900 flex items-center justify-center
            hover:text-white"
            >
              Explore Course
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={"/images/hero.png"}
            alt="Hero"
            width={640}
            height={900}
            className="w-full"
          />
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col h-[228px] bg-[#F7F7F7]">
        <div className="w-full md:w-1/3 mt-14 md:mt-0 flex justify-center items-center">
          <h2 className="font-bold text-black md:w-[320px] text-2xl text-center md:text-left">
            Trusted by 2000+ companies worldwide.
          </h2>
        </div>
        <div className="flex w-full md:w-3/4 mt-8 md:mt-0 justify-between items-center">
          <Image
            src={"/images/AirbnbLogo1.png"}
            alt="AirbnbLogo1"
            width={640}
            height={900}
            className="w-[300px] md:w-[700px]"
          />
          <Image
            src={"/images/AirbnbLogo2.png"}
            alt="AirbnbLogo2"
            width={640}
            height={900}
            className="w-[300px] md:w-[700px]"
          />
          <Image
            src={"/images/AirbnbLogo3.png"}
            alt="AirbnbLogo3"
            width={640}
            height={900}
            className="w-[300px] md:w-[700px]"
          />
          <Image
            src={"/images/AirbnbLogo4.png"}
            alt="AirbnbLogo4"
            width={640}
            height={900}
            className="w-[300px] md:w-[700px]"
          />
          <Image
            src={"/images/AirbnbLogo5.png"}
            alt="AirbnbLogo5"
            width={640}
            height={900}
            className="w-[300px] md:w-[700px]"
          />
          <Image
            src={"/images/AirbnbLogo6.png"}
            alt="AirbnbLogo6"
            width={640}
            height={900}
            className="w-[300px] md:w-[700px] hidden md:block"
          />
        </div>
      </div>

      <Course />
      <div className="w-full p-10">
        <h2 className="font-bold text-black text-2xl md:text-5xl leading-[57.6px] text-center pb-4 md:pb-0">
          Our Achivements
        </h2>
        <p className="p-0 text-black md:p-20 pt-0 text-base leading-[27px] text-justify md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="w-full flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 flex justify-around">
            <div>
              <h1 className="font-bold text-black text-4xl leading-[48px]">+200</h1>
              <span>Courses</span>
            </div>

            <div>
              <h1 className="font-bold text-black text-4xl leading-[48px]">50K</h1>
              <span>Mentors</span>
            </div>
          </div>

          <div className="w-full  md:w-1/2 flex justify-around">
            <div>
              <h1 className="font-bold text-black text-4xl leading-[48px]">370k</h1>
              <span className="text-black">Students</span>
            </div>

            <div>
              <h1 className="font-bold text-black text-4xl leading-[48px]">100+</h1>
              <span className="text-black">Recognition</span>
            </div>
          </div>
        </div>
      </div>

      <Blog />
    </>
  );
}
