import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Bottom from "./Bottom";
import images from "../config/images";
import Image from "next/image";

const Hero = () => {
  return (
    <>
     
      <div className="w-full px-4 sm:px-8 md:px-10 pb-10 border-b-2 border-dashed border-gray-200">
        <div className="pt-16 sm:pt-24 md:pt-28">
          <p className=" sm:text-2xl md:text-3xl">
            Softwares to power mission critical tasks.
            <br /> Used by over 1,000 professionals across India.
          </p>

          <div className="py-8 sm:py-12 md:py-16 text-[#9C9C9C] text-sm ">
            <p>
              How our software scales from 5 operations per second to 1M
              operations per second in a blink on demand.
            </p>
            <p className="flex items-center gap-2 mt-2">
              Read Report <FaArrowRightLong />
            </p>
          </div>
        </div>

        <div className="w-full my-2 p-2 flex flex-col lg:flex-row gap-4">
          <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] w-full lg:w-[900px] bg-[#D9D9D9] rounded-lg">
            <Image
              src={images.main}
              alt="heroimage"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto">
            <div className="relative w-full sm:w-1/2 lg:w-[400px] h-[200px] sm:h-[240px] bg-[#D9D9D9] rounded-lg">
              <Image
                src={images.main}
                alt="heroimage"
                fill
                className="object-cover rounded-lg"
              />{" "}
            </div>
            <div className=" relative w-full sm:w-1/2 lg:w-[400px] h-[200px] sm:h-[240px] bg-[#D9D9D9] rounded-lg">
              <Image
                src={images.main}
                alt="heroimage"
                fill
                className="object-cover rounded-lg"
              />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row px-4 md:px-12 py-10 border-b-2 border-dashed border-gray-200">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:px-0 px-2">
          <div className="border-[#D9D9D9] border-2 rounded-3xl w-fit px-4 py-1 text-center text-sm sm:text-base">
            Our Story
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:px-6 px-4 space-y-4">
          <p className="text-2xl sm:text-3xl md:text-[40px] leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            turpis dui,{" "}
            <span className="text-blue-500">
              eleifend accumsan quam. Nunc non leo vestibulum, laoreet tortor
              sed, suscipit enim.
            </span>
          </p>
          <p className="text-sm sm:text-base md:text-[18px] text-[#9C9C9C]">
            Nulla facilisi. Fusce sit amet arcu nec enim fringilla lacinia. Ut
            elit sapien, porttitor eget diam et, dictum sagittis urna. Fusce sit
            amet mi pellentesque, volutpat eros a, consectetur neque.
          </p>
        </div>
      </div>

      <Bottom
        heading="Flagship Software"
        subHeading="Pioneer® Connected Clinic ™"
      />
      <Bottom
        heading="Flagship Software"
        subHeading="Pioneer® Connected Accounts ™"
      />
    </>
  );
};

export default Hero;
