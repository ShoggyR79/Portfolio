import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {pageInfo: PageInfo};

export default function About({pageInfo}: Props) {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-[#20AAB1]/50">little</span>{" "}
          background
        </h4>
        <p className="text-med">
          Hello! I am Du, a junior studying computer science at{" "}
          <a
            className="text-[#CFAE70]"
            href="https://www.vanderbilt.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanderbilt University
          </a>
          . I am at my best when I am able to integrate my eagerness to master
          new skills with my abilities to work with others. I constantly
          challenge myself and find new languages and skills to learn such as{" "}
          <span className="text-[#20AAB1] uppercase">
            Front and Back end development
          </span>
          ,{" "}
          <span className="text-[#20AAB1] uppercase">Linux C development</span>,{" "}
          <span className="text-[#20AAB1] uppercase">Game Design</span>, and
          most recently,{" "}
          <span className="text-[#20AAB1] uppercase">
            competitive programming
          </span>{" "}
          and <span className="text-[#20AAB1] uppercase">machine learning</span>
          . I am always on the lookout for opportunities to further develop my
          skills, both professionally and technically. The projects,
          internships, and studies I have done up to now serve as a reflection
          of my commitment and passion for programming. The world of computer
          science is boundless, for that I am constantly looking for
          opportunities to further nurture my skills and become a better
          programmer.
        </p>
      </div>
    </motion.div>
  );
}
