import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFifth, projectSixth } from "../../assets/index";
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
          des="I created an AI content generator using React. It automatically generates high-quality, relevant content for various platforms, saving time for content creators."
          src={projectOne}
          websiteLink="https://text-ai-5.vercel.app/" // Example website link
        />
        <ProjectsCard
          title="E-commerce Website"
          des="I developed an e-commerce website for furniture using React. It allows users to browse and purchase a wide range of stylish and affordable furniture online with ease."
          src={projectTwo}
          websiteLink="https://furniture-ecommerce-virid.vercel.app/"
        />
        <ProjectsCard
          title="X-Fesion E-commerce"
          des="I built an e-commerce website for clothing using React. It offers a seamless shopping experience, allowing customers to browse and purchase trendy apparel online."
          src={projectThree}
          websiteLink="https://xfashion-shop.vercel.app/"
        />
        <ProjectsCard
          title="Fitness Tracker"
          des="I have created a fitness tracker website using the MERN stack. Users can track their fitness goals, create workout plans, and monitor their progress on the website."
          src={projectFour}
          websiteLink="https://fitness-tracker-frontend-blue.vercel.app/web"
        />
        <ProjectsCard
          title="KNF-Enterprise"
          des="I developed an e-commerce website for KNF enterprise using React. It allows users to browse and purchase a wide range of stylish and affordable furniture online with ease."
          src={projectFifth}
          websiteLink="https://knf-enterprise.vercel.app/"
        />
        <ProjectsCard
          title="Assignment-App"
          des="This app allows students to view and submit their assignments effortlessly. It helps students track assignment deadlines and submit them on time."
          src={projectSixth}
          websiteLink="https://giaic-assignment.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
