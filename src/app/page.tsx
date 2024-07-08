"use client";
import React from "react";
// import ImageGroup from "./components/ImageGroup";
import HeroHeader from "./components/HeroHeader";
import Image_Collage from "./components/Image_Collage";

export default function Page() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="main-container lg:h-screen flex-col flex lg:flex-row">
        <HeroHeader />
        <Image_Collage />
      </div>
    </>
  );
}
