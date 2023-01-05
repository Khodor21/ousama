import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#0bcece]">
            About Me
          </p>
          <h2 className="py-2 text-3xl">Who I Am</h2>
          <p className="py-4 text-gray-400">I'm Not A Normal Developer</p>
          <p className="">
            I'm A Fresh Graduate CS Student. I have a great passion for
            technology, which made me enter this field. I can work with Laravel
            and Vanilla PHP, also I can deal with ExpressJs, NodeJs and MongoDB.
            For DataBase I always Work With MySQL And I have a Friendly Relation
            With SQL.
          </p>
        </div>
        <div className="mt-2 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center py-4 hoverscale-105 ease-in duration-300 ">
          <Image
            className="rounded-xl"
            src="/../public/assets/Removal-414.png"
            alt="/"
            width={350}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
