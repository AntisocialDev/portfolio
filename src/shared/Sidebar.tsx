"use client";

import { RootState } from "@/store/app-store";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
        onClick={(e)=>e.stopPropagation()}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ duration: 0.5 }}
          className={`${
            isSidebarOpen ? "flex flex-col" : "hidden"
          } absolute overflow-auto sidebar z-[9999] h-full top-[80px] md:hidden w-full sm:w-[60%] right-0 bg-[#0d141c]`}
        >
         
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
