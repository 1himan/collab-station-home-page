"use client";
import React from "react";
// import ImageGroup from "./components/ImageGroup";
import HeroHeader from "./components/HeroHeader";
import Image_Collage from "./components/Image_Collage";

export default function Page() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#B8DAFF,transparent)]"></div>
      </div>
      <div className="main-container lg:h-screen flex-col flex lg:flex-row">
        <HeroHeader />
        <Image_Collage />
      </div>
    </>
  );
}
