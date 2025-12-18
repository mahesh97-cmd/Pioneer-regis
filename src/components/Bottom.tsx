import React from "react";

type BottomProps={
  heading:string,
  subHeading:string
}

const Bottom = ({ heading, subHeading }: BottomProps) => {
  return (
    <div className="lg:px-12 px-6 lg:py-10  border-b-2 border-dashed border-gray-200 ">
      <div className="py-10">
        <div className="border-[#D9D9D9] border-2 rounded-3xl w-[200px] text-center mb-3 py-1">
          {heading}
        </div>
        <div className="lg:py-6 py-2">
          <p className="lg:text-[30px] text-xl ">{subHeading}</p>
          <p className="lg:text-[18px] text-base text-[#9C9C9C] pt-4">
            The must have essential software to run operations in a trusted
            clinic.<br/> From your local general clinic to super speciality clinics.
          </p>
        </div>
      </div>
      <div className="bg-amber-400 w-full lg:h-[500px] h-[200px]" >
        

      </div>
    </div>
  );
};

export default Bottom;
