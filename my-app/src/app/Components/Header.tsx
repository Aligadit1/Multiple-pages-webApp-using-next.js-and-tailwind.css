"use client";
import React, { useRef } from "react";
import Link from "next/link";

function Header() {
  const headerList = useRef<HTMLUListElement>(null);
  const toggleHeader = () =>{
    headerList.current?.classList.toggle("max-\[500px\]\:hidden")
  }
  return (
    <div className="bg-[#222831]">
      <ul
        className="flex justify-evenly bg-[#222831] text-[#eeeeee] h-[50px] items-center max-[500px]:flex-col max-[500px]:h-[126px] max-[500px]:gap-[20px] max-[500px]:hidden"
        ref={headerList}
      >
        <Link href="/">
          <li className="hover:text-[#0092ca] cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-[#0092ca] cursor-pointer">About</li>
        </Link>
        <Link href="/contact-us">
          <li className="hover:text-[#0092ca] cursor-pointer">Contact Us</li>
        </Link>
        <Link href="/services">
          <li className="hover:text-[#0092ca] cursor-pointer">Services</li>
        </Link>
      </ul>
      <div className="max-[500px]:h-[35px] bg-[#222831] hidden max-[500px]:block " onClick={toggleHeader}>
        <div className="h-1 w-[30px] bg-[#0092ca] mt-[5px] absolute top-[3.5px] right-[10px]  "></div>
        <div className="h-1 w-[30px] bg-[#0092ca] mt-[5px] absolute top-[11.5px] right-[10px]  "></div>
        <div className="h-1 w-[30px] bg-[#0092ca] mt-[5px] absolute top-[19.5px] right-[10px] "></div>
      </div>
    </div>
  );
}

export default Header;
