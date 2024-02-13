"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [menuTapped, setMenuTapped] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center gap-8 p-10 navbar"
    >
      <div className="flex items-center gap-5">
        <Image className="w-[50px] sm:w-[30px]"
          src="/icons/home.svg"
          alt="theme toogle"
          width={100}
          height={100}
          quality={100}
        ></Image>
        <p className="hidden sm:block font-bold text-2xl">Victor Banjo</p>
      </div>
      <div
        onClick={() => setMenuTapped(!menuTapped)}
        className="flex flex-col gap-3 cursor-pointer md:hidden menu-div"
      >
        <motion.div animate={{ rotateZ: menuTapped ? 50 : 0 ,y: menuTapped? 7: 0}}></motion.div>
        {!menuTapped && <div></div>}
        <motion.div animate={{ rotateZ: menuTapped ? -50 : 0 , y: menuTapped? -7: 0}}></motion.div>
      </div>
      <div className="hidden md:flex items-center font-medium gap-8">
        <p>Projects</p>
        <p>Skills</p>
        <p>Contact</p>
        <div className="flex cursor-pointer items-center justify-center w-[45px] h-[45px] p-3 bg-[#E8EDF2] rounded-[12px]">
          <Image
            src="/icons/theme-icon.svg"
            alt="theme toogle"
            width={20}
            height={20}
            quality={100}
          ></Image>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
