"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left mb-10">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Mukesh",
                1000,
                "Web Developer",
                1000,
                "Mern Stack Developer",
                1000,
                "Front-End Developer",
                1000,
              ]}
              wrapper="span"
              speed={0}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos
            repellat neque voluptate iste veritatis numquam, ut fuga, ipsum
            minima modi, optio laudantium doloremque a.
          </p>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-800 to-pink-500 hover:bg-slate-200 text-white ">
            Hire Me
          </button>
          <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-800 to-pink-500 text-white hover:bg-slate-800 mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
              Download CV
            </span>
          </button>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#181818]  w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative ">
            <Image
              src="/images/poster.png"
              alt="logo"
              width={300}
              className="absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
