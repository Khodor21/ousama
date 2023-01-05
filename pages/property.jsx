import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/propertyImg.jpg";
const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh]  bg-black/80 z-10"></div>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2 text-white">Property Finder</h2>
          <h3 className="text-white">ReactJs / Laravel</h3>
        </div>
      </div>
    </div>
  );
};

export default property;
