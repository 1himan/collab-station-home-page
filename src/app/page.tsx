"use client";
import React from "react";
// import ImageGroup from "./components/ImageGroup";
import HeroHeader from "./components/HeroHeader";
import Image_Collage from "./components/Image_Collage";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }} className=""></motion.div>
      <div className="main-container bg-gray-950 flex-col flex lg:flex-row">
        <HeroHeader />
        <Image_Collage />
      </div>
    </AuroraBackground>
  );
}

export default function Page() {
  return (
    <>
      <AuroraBackgroundDemo />
    </>
  );
}
