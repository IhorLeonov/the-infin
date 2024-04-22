"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ClientLayotProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ClientLayotProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
