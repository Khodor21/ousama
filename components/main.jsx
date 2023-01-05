import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Typed from "react-typed";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-xl tracking-wide text-gray-600">
            Let's Build Something Together!{" "}
          </p>

          <h1 className="py-4 text-gray-700">
            Hi, I'm{" "}
            <span className="text-[#0bcece]">
              {" "}
              <Typed
                strings={["Ousama Noeman", "King Of Data"]}
                typeSpeed={30}
                backSpeed={30}
                loop
              />
            </span>
          </h1>
          <h1 className="py-2 text-gray-700">A Back-End Web Developer.</h1>
          <p className="py-3 text-gray-600 max-w-[70%] m-auto">
            I'm A Passionate Back-End Developer specializing in building bases
            for your data with new technologies. Currently, I'm Working hard on
            my self to make all projects that I worked on in a high level of
            secure.{" "}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
