"use client";

import { store } from "@/store/app-store";
import { Props } from "next/script";
import React from "react";
import { Provider } from "react-redux";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
