import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = { experiences: Experience[] };

export default function WorkExperiences({ experiences }: Props) {
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
      className="min-h-screen max-h-fit flex relative flex-col  text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-300 text-2xl">
        experience
      </h3>
      <div className="absolute top-28 h-10/12 w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#20AAB1]/80">
        {experiences?.map((experience) => {
          return (
            <ExperienceCard key={experience._id} experience={experience} />
          );
        })}
      </div>
    </motion.div>
  );
}
