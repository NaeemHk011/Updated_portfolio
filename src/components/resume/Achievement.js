import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Sep 2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN Stack Developer"
            subTitle="Freelancer"
            result="Success"
            des="Developed and maintained web applications using the MERN stack. Built and optimized both front-end and back-end components for seamless performance. Debugged issues, improved application efficiency, and enhanced user experience."
          />
          <ResumeCard
            title="Next.js Instructor"
            subTitle="Governor House Sindh"
            result="Success"
            des="Led workshops and training sessions on Next.js, focusing on server-side rendering and SEO optimization. Prepared teaching materials and assignments, collaborating with teams to execute learning programs."
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Sep 2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Next.js Developer"
            subTitle="Freelancer"
            result="Success"
            des="Created and maintained web applications using the Next.js stack. Built and optimized both front-end and back-end components for seamless performance. Debugged issues, improved application efficiency, and enhanced user experience."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
