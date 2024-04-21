"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import useCheckIsMobile from "@/hooks/useCheckIsMobile.ts";

interface ClientLayotProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ClientLayotProps) {
  const { isMobile } = useCheckIsMobile();

  return (
    <>
      <Header isMobile={isMobile} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
