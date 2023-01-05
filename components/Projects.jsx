import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/propertyImg.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";

import Link from "next/link";
import ProjectItem from "../components/ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#0bcece]">
          Projects
        </p>
        <h2 className="text-3xl py-2">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Twitch App"
            backgroundImg={twitchImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Netflix Website"
            backgroundImg={netflixImg}
            projectUrl="/property"
          />
          {/* <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
