import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navbg, setNavbg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#ecf0f3");
  const router = useRouter();
  useEffect(() => {
    if (
      router.asPath == "/property" ||
      router.asPath == "/crypto" ||
      router.asPath == "/netflix" ||
      router.asPath == "/twitch"
    ) {
      setNavbg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavbg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  });

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${navbg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          {" "}
          <Image
            src="/../public/assets/logo.png"
            alt="/"
            width="125"
            height="50"
          />
        </Link>
        <div className="">
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex mr-5">
            <Link href="/">
              {" "}
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#0bcece]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              {" "}
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#0bcece]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              {" "}
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#0bcece]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              {" "}
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#0bcece]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              {" "}
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#0bcece]">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden ">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                {" "}
                <Image
                  src="/../public/assets/logo.png"
                  alt="/"
                  width={87}
                  height={35}
                />{" "}
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's Build Something Lengandary Together{" "}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                {" "}
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                {" "}
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                {" "}
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                {" "}
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                {" "}
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-1">
              <p className="my-3 uppercase tracking-wide text-[#5651e5] ">
                Let's Connect{" "}
              </p>
              <div className="flex items-center justify-between my-8 w-full ">
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
      </div>
    </div>
  );
};

export default Navbar;
