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
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
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

  const scrolltoHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    window.scrollTo({left: 0, top: element!.offsetTop - document.getElementsByClassName('navbar')[0].clientHeight, behavior: 'smooth'});
    dispatch(toggleSidebar());
  };

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
          } fixed p-20 text-2xl overflow-auto sidebar text-white z-[9999] h-full top-[80px] md:hidden w-full sm:w-[60%] right-0 bg-[#0d141c]`}
        >
          <div className="flex flex-col items-center gap-10 overflow-hidden h-full">
            <motion.p
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="cursor-pointer"
              onClick={() => scrolltoHash("project-section")}
            >
              Projects
            </motion.p>
            <motion.p
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="cursor-pointer"
              onClick={() => scrolltoHash("skills-section")}
            >
              Skills
            </motion.p>
            <motion.p
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="cursor-pointer"
              onClick={() => scrolltoHash("contact-section")}
            >
              Contact
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
