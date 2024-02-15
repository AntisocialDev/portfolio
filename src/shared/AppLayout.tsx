"use client";

import { AppProvider } from "@/app/provider";
import Footer from "./Footer";
import NavBar from "./Navbar";
import SideBar from "./Sidebar";
import React from "react";
import { RootState } from "@/store/app-store";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/reducers/sidebar-slice";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarOpened = useSelector(
    (state: RootState) => state.sidebar.isOpen
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div className="main-div flex flex-col h-full w-full overflow-x-hidden">
        <NavBar />
        <div
          onClick={async () => {
            if (isSidebarOpened) {
              await dispatch(toggleSidebar());
              if (!isSidebarOpened) {
                document.querySelector("body")!.style.overflow = "hidden";
              } else if (isSidebarOpened) {
                document.querySelector("body")!.style.overflow = "auto";
              }
            }
          }}
          className="mt-[60px]"
        >
          <div
            className={`${
              isSidebarOpened ? "blur-[1px] pointer-events-none" : ""
            } `}
          >
            {children}
            <Footer />
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
