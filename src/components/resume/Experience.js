import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Updated Google Job */}
          <ResumeCard
            title="MERN Stack Developer"
            subTitle="Freelancer - (Sep 2024 - Present)"
            result="Freelance"
            des="Developed and maintained web applications using the MERN stack. Built and optimized both front-end and back-end components for seamless performance, improving user experience and enhancing overall application efficiency."
          />
          {/* Updated Instructor Job */}
          <ResumeCard
            title="Next.js Instructor"
            subTitle="Governor House Sindh - (Jan 2024 - Sep 2024)"
            result="Pakistan"
            des="Led workshops and training sessions on Next.js, focusing on server-side rendering and SEO optimization. Created learning materials and collaborated with administrative teams to ensure effective delivery."
          />
          {/* Updated Nike Job */}
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle=" - (2023 - 2025)"
            result="Pakistan"
            des="Trained aspiring developers and built web applications, focusing on improving the team's technical skills and web-based solutions."
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Updated Gym Instructor */}
          <ResumeCard
            title="MERN Stack Instructor"
            subTitle="Aptech - (2016 - Present)"
            result="Pakistan"
            des="Imparting knowledge on MERN stack technologies, helping students understand full-stack development with MongoDB, Express.js, React, and Node.js. Currently teaching MERN stack courses."
          />
          {/* Updated Web Developer & Instructor */}
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College - (2010 - 2014)"
            result="Pakistan"
            des="Taught web development courses, guiding students through HTML, CSS, JavaScript, and introducing them to full-stack development frameworks."
          />
          {/* Updated Teacher */}
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School - (2001 - 2010)"
            result="Pakistan"
            des="Taught secondary-level subjects, focusing on fostering creativity, problem-solving, and a strong foundational understanding in various academic disciplines."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
