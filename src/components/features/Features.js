import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="I specialize in building responsive and user-friendly websites using modern frontend technologies such as React.js, HTML, CSS, and JavaScript. I focus on delivering seamless user experiences and intuitive designs."
        />
        <Card
          title="Backend Development (Node.js)"
          des="With Node.js, I build scalable and efficient server-side applications. My expertise includes setting up RESTful APIs, integrating databases (MongoDB, MySQL), and implementing authentication systems for secure and high-performing applications."
          icon={<AiFillAppstore />}
        />
        <Card
          title="API Development"
          des="I create and manage robust APIs for web and mobile applications, ensuring data consistency, security, and performance. My experience includes REST API development and integration with third-party services and databases."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="I build cross-platform mobile applications using React Native, providing smooth and optimized experiences for both iOS and Android users. I ensure that the apps are performant, intuitive, and responsive."
          icon={<FaMobile />}
        />
        <Card
          title="UX/UI Design"
          des="I focus on designing user interfaces that are not only visually appealing but also highly functional. My process includes creating wireframes, prototypes, and conducting user testing to refine the design for the best user experience."
          icon={<SiAntdesign />}
        />
        <Card
          title="Web Hosting and Deployment"
          des="I offer end-to-end solutions for hosting websites and applications, ensuring they are accessible and fast. I manage deployments using cloud services like AWS, Netlify, or DigitalOcean for a seamless hosting experience."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features;
