import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="min-h-screen relative flex overflow-visible flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300  text-2xl">
        Projects
      </h3>

      <div className="relative top-32 w-full  flex overflow-x-scroll  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#20AAB1]/80 snap-x snap-mandatory z-20">
        {projects?.map((project, i) => {
          return (
            <div
              key={i}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-40 md:w-60 h-auto"
                src={urlFor(project?.image).url()}
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <div>
                  <h4 className="text-4xl font-semibold text-center aling-middle">
                    {i + 1}. {project.title}
                    <SocialIcon
                      url={project?.linkToBuild}
                      fgColor="#F7AB0A"
                      bgColor="transparent"
                      className="align-middle"
                    />
                  </h4>
                </div>
                <div className="flex items-center space-x-2 justify-center">
                  {project?.technologies.map((tech) => {
                    return (
                      <img
                        key={tech._id}
                        src={urlFor(tech.image).url()}
                        alt={tech.tilte}
                        className="h-10 w-10"
                      />
                    );
                  })}
                </div>
                <div className="">
                  <p className="text-md text-center md:text-lg md:text-left ">
                    {project?.sumary}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[25%] bg-[#20AAB1]/10 left-0 h-[500px] skew-y-6 align-middle"></div>
    </motion.div>
  );
}
