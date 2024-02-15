"use client";

import { toggleSidebar } from "@/reducers/sidebar-slice";
import { RootState } from "@/store/app-store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const isSidebarOpened = useSelector(
    (state: RootState) => state.sidebar.isOpen
  );
  const [windowWidth, setWindowWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 0));  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 768 && isSidebarOpen) {
      dispatch(toggleSidebar());
    }
  }, [windowWidth, isSidebarOpen]);

  const scrolltoHash =  (element_id: string) => {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    dispatch(toggleSidebar());
    if (!isSidebarOpened) {
      document.querySelector("body")!.style.overflow = "hidden";
    } else if (isSidebarOpened) {
      document.querySelector("body")!.style.overflow = "auto";
    }
  }

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ duration: 0.5 }}
          className={`${
            isSidebarOpen ? "flex flex-col" : "hidden"
          } fixed flex flex-col items-center p-20 gap-10 text-2xl overflow-auto sidebar text-white z-[9999] h-full top-[80px] md:hidden w-full sm:w-[60%] right-0 bg-[#0d141c]`}
        >
          <p className="cursor-pointer" onClick={()=>scrolltoHash('project-session')}>Projects</p>
          <p className="cursor-pointer" onClick={()=>scrolltoHash('skills-session')}>Skills</p>
          <p className="cursor-pointer" onClick={()=>scrolltoHash('contact-session')}>Contact</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
