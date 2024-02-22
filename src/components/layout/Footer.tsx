import Image from "next/image";
import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-black w-full px-4 lg:px-4 xl:px-20 mt-9 py-20 lg:py-24 ">
     
      <div className="flex lg:flex-row flex-col gap-5 lg:gap-0 justify-center items-center lg:items-start lg:justify-between border-t pt-12 border-gray-500">
        <p className="flex  items-center gap-2 font-extrabold text-2xl cursor-pointer">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={100}
            height={100}
            className="w-7 h-7 object-contain object-center"
          />
          Ramoena
        </p>

        <p className="text-gray-100 text-center lg:text-left w-2/3 lg:w-auto">
          All Rights Reserved Ramoena | Design from BuildWithAngga | Made By O.
          Riastanjung 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
