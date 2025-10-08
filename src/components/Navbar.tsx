import React from "react";
import Button from "./Button";
import Image from "next/image";
import Logo from "../../public/images/logo/Logo.png";

const Navbar = () => {
  return (
    <div>
          <div className="lg:px-12 px-8  py-8 w-full flex items-center justify-between border-dashed border-b-2 border-[#D6D6D6]  ">
        <div className="w-24">
          <div className="absolute lg:top-10 top-12">
            <Image src={Logo} alt="logo" height={90} width={90} />
          </div>
        </div>
        <ul className=" flex items-center justify-center gap-[58px]">
          <li>Home</li>
          <li>Softwares</li>
          <li>Tutorials</li>
          <li>Support</li>
        </ul>

        <Button
          name="Get Started"
          bgColor="#3B3B3B"
          textColor="#FFFFFF"
          border="#E2E2E2"
        />
      </div>

      {/* <div className="flex items-center">
        <div className="h-5 w-5 bg-amber-500 rounded-full"></div>
        <div className="w-full "></div>
        <div className="h-5 w-5 bg-amber-500 rounded-full"></div>
      </div> */}
    </div>
  );
};

export default Navbar;
