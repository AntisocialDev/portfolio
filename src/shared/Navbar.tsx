"use client";

import { toggleSidebar } from "@/reducers/sidebar-slice";
import { toggleTheme } from "@/reducers/theme.reducer";
import { RootState } from "@/store/app-store";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Root } from "postcss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const isSidebarOpened = useSelector(
    (state: RootState) => state.sidebar.isOpen
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const menuClick = async () => {
    await dispatch(toggleSidebar());
  };

  const setTheme = ()=> {
    let theme = localStorage.getItem('theme');
    dispatch(toggleTheme(theme=== 'light'? 'dark': 'light'));
  }

  const scrolltoHash =  (element_id: string) => {
    const element = document.getElementById(element_id)
    window.scrollTo({left: 0, top: element!.offsetTop - document.getElementsByClassName('navbar')[0].clientHeight, behavior: 'smooth'});
  }

  const reloadPage = ()=>{
    router.refresh();
  }


 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center gap-8 p-10 navbar"
    >
      <div onClick={reloadPage} className="flex items-center gap-5">
        <Image
          className="w-[30px] sm:w-[30px]"
          src="/icons/home.svg"
          alt="theme toogle"
          width={100}
          height={100}
          quality={100}
        ></Image>
        <p className="hidden sm:block font-bold text-2xl">Victor Banjo</p>
      </div>
      <div
        onClick={() => {
          menuClick();
        }}
        className="flex flex-col gap-3 cursor-pointer md:hidden menu-div"
      >
        <motion.div
          animate={{
            rotateZ: isSidebarOpened ? 50 : 0,
            y: isSidebarOpened ? 7.5 : 0,
          }}
        ></motion.div>
        {!isSidebarOpened && <div></div>}
        <motion.div
          animate={{
            rotateZ: isSidebarOpened ? -50 : 0,
            y: isSidebarOpened ? -7.5 : 0,
          }}
        ></motion.div>
      </div>
      <div className="hidden md:flex items-center font-medium gap-8">
        <p className="cursor-pointer" onClick={()=>scrolltoHash('project-section')}>Projects</p>
        <p className="cursor-pointer" onClick={()=>scrolltoHash('skills-section')}>Skills</p>
        <p className="cursor-pointer" onClick={()=>scrolltoHash('contact-section')}>Contact</p>
        <div onClick={setTheme} className="flex cursor-pointer items-center justify-center w-[45px] h-[45px] p-3 bg-[#E8EDF2] rounded-[12px]">
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
