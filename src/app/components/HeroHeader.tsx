import { Raleway } from "next/font/google";
import TextGenerateEffect from "./MyTextGenerateEffect";
import React from "react";
import Link from "next/link";
import MyFlipWords from "./MyFlipWords";
const raleway = Raleway({ subsets: ["cyrillic"] });

export default function HeroHeader() {
  return (
    <>
      <div className="lg:mb-28 ml-10 lg:ml-7 mb-5 sm:ml-14 flex flex-col w-[20rem] justify-center items-start md:w-[20rem] sm:w-[80vw] ">
        <h1
          className={`text-2xl mt-10 text-transparent bg-gradient-to-r from-[#4EA3FF] via-[#A679C2] to-[#007BFF] bg-clip-text  ${raleway.className} font-semibold`}>
          Collaboration Station
        </h1>
        <TextGenerateEffect
          text="Join Collaboration Station to connect with like-minded individuals
            across various fields, from music and coding to filmmaking and art.
            Work together on passion projects, gain valuable experience, and
            create something amazing—no monetary exchange, just pure
            collaboration and growth."
        />
        <div className="h-fit mt-10 ">
          <Link href="/hello" style={{ color: "#007BFF" }}>
            <MyFlipWords />
          </Link>
        </div>
      </div>
    </>
  );
}
