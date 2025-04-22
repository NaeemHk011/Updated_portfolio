import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Engineering"
            subTitle="Sindh Agriculture University Tandojam (2016 - 2020)"
            result="Graduation"
            des="Graduated with a focus on Evironmental Engineering."
          />
          <ResumeCard
            title="MERN Stack Certification"
            subTitle="Aptech"
            result="Completed"
            des="MERN stack developer certification, focusing on full-stack JavaScript development."
          />
          <ResumeCard
            title="Generative AI, TypeScript, Next.js, Python, JavaScript"
            subTitle="PIAIC"
            result="Completed"
            des="Specialized courses in cutting-edge technologies including AI, TypeScript, and full-stack web development."
          />
        </div>
      </div>

      {/* part Two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="Front-end Developer"
            subTitle="Upwork-freelancer - (2024 - 2025)"
            result="upwork"
            des="The Freelancig Journey has grown strongly over recent years, having transformed itself from a freesher to developer."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
