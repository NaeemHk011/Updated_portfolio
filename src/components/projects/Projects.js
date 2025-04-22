import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AI Content Generator"
          des=" I created an AI content generator using React. It automatically generates high-quality, relevant content for various platforms, saving time for content creators."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="I developed an e-commerce website for furniture using React. It allows users to browse and purchase a wide range of stylish and affordable furniture online with ease."
          src={projectTwo}
        />
        <ProjectsCard
          title="X-Fesion E-commerce"
          des="I built an e-commerce website for clothing using React. It offers a seamless shopping experience, allowing customers to browse and purchase trendy apparel online."
          src={projectThree}
        />
        <ProjectsCard
          title="Fitness Tracker"
          des="I have created a fitness tracker website using the MERN stack. Users can track their fitness goals, create workout plans, and monitor their progress on the website."
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects