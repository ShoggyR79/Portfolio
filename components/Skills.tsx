import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
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
      className=" flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen max-h-fit justify-center lg:space-y-5 xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-48 uppercase tracking-[20px] text-gray-300 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-60 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover for current profieciency
      </h3>
      <div className="absolute top-72 grid grid-cols-3 md:grid-cols-4 gap-5 ">
        {skills?.slice(0, skills.length / 2).map((skill) => {
          return <Skill key={skill._id} skill={skill} directionLeft />;
        })}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => {
          return <Skill key={skill._id} skill={skill} />;
        })}
      </div>
    </motion.div>
  );
}
