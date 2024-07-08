import React from "react";
import data from ".././data/data";
import MyImagesSlider from "./MyImagesSlider";

function Image_Collage() {
  return (
    <div className="container w-[100] px-3 mb-4 lg:mb-0 xs:p-0  flex-4 grid gap-2 sm:mt-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 auto-rows-[15rem] sm:grid-cols-1">
      {data.map((item, i) => (
        <MyImagesSlider
          key={i}
          className={`${i === 1 || i === 4 ? "xl:row-span-2" : ""}${
            i === 5 || i === 6 ? "xl:col-span-2" : ""
          } ${i === 7 ? "lg:col-span-2 xl:col-span-1" : ""} `}
          images={item.images}
          interval={item.interval}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default Image_Collage;
