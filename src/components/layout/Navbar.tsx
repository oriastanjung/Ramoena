"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import Button from "../atom/Button";
import { TbMenu2 } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const setMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="fixed top-3 md:top-7 w-full lg:px-4 xl:px-20 z-[100]">
      <nav className="bg-black bg-opacity-50 backdrop-blur-md px-2 py-1 md:px-8 md:py-7 rounded-3xl flex items-center justify-between">
        <h1 className="flex  items-center gap-2 font-extrabold text-2xl cursor-pointer">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={100}
            height={100}
            className="w-7 h-7 object-contain object-center"
          />
          Ramoena
        </h1>
        <ul className="hidden lg:flex justify-start items-center gap-8">
          <li className="font-semibold hover:text-green-500 duration-300 ease-in-out">
            <Link href={"#"}>Featured </Link>
          </li>
          <li className="font-semibold hover:text-green-500 duration-300 ease-in-out">
            <Link href={"#"}>Categories </Link>
          </li>
          <li className="font-semibold hover:text-green-500 duration-300 ease-in-out">
            <Link href={"#"}>Testimonials </Link>
          </li>
          <li className="font-semibold hover:text-green-500 duration-300 ease-in-out">
            <Link href={"#"}>About </Link>
          </li>
        </ul>
        <div className="hidden lg:flex items-center gap-3">
          <Button isSecondary>Sign In</Button>
          <Button isPrimary>Sign Up</Button>
        </div>

        <Button onClick={setMenu} className="lg:hidden text-4xl">
          <TbMenu2 />
        </Button>

        <div
          className={`${
            showMenu ? "fixed translate-x-0 " : "fixed translate-x-full"
          } lg:hidden w-full transition-transform duration-300 ease-in h-screen bg-black -top-3 md:-top-7 left-0 backdrop-blur-md z-[999]`}
        >
          <div className="flex justify-end px-1 md:px-6 pt-5 md:pt-14 pb-6">
            <Button onClick={() => setShowMenu(!showMenu)}>
              <IoCloseOutline className="text-4xl " />
            </Button>
          </div>
          <ul className="flex flex-col gap-10 items-center justify-center px-20 md:mt-20">
            <li>
              <h1 className="flex  items-center gap-2 font-extrabold text-2xl cursor-pointer">
                <Image
                  src={"/logo.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-7 h-7 object-contain object-center"
                />
                Ramoena
              </h1>
            </li>
            <li className="font-semibold hover:text-green-500 duration-300 ease-in-out">
              <Link href={"#"}>Featured </Link>
            </li>
            <li className="font-semibold hover:text-green-500 duration-300 ease-in-out">
              <Link href={"#"}>Categories </Link>
            </li>
            <li className="font-semibold hover:text-green-500 duration-300 ease-in-out">
              <Link href={"#"}>Testimonials </Link>
            </li>
            <li className="font-semibold hover:text-green-500 duration-300 ease-in-out">
              <Link href={"#"}>About </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
