"use client";

import { AppProvider } from "@/app/provider";
import Footer from "./Footer";
import NavBar from "./Navbar";
import SideBar from "./Sidebar";
import React, { useEffect, useState } from "react";
import { RootState } from "@/store/app-store";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/reducers/sidebar-slice";
import { toggleTheme } from "@/reducers/theme.reducer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarOpened = useSelector(
    (state: RootState) => state.sidebar.isOpen
  );

  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
    document
      .querySelector("body")
      ?.setAttribute("color-scheme", localStorage.getItem("theme") as string);
    console.log("changed");
  }, []);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="main-div flex flex-col h-full w-full overflow-x-hidden">
        <NavBar />
        <div
          onClick={async () => {
            if (isSidebarOpened) {
              await dispatch(toggleSidebar());
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
