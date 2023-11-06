import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex  justify-between px-5 shadow-sm">
      <div className="flex gap-3  items-center ">
        <Image src="/logo1.png" width={100} height={100} alt="logo"></Image>
        <h2 className="text-[25px] tracking-widest text-red-500 font-semibold">
          DISCOVER
        </h2>
      </div>
      <ul className="flex gap-8 items-center ">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
