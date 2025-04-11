import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import todoo from "@/public/todoo.png";
import twitter from "@/public/twitter.png";
import info from "@/public/info.png";
import grip from "@/public/grip.jpeg";
import aws from "@/public/aws.png";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },

  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name:"Certifys",
    hash:"#certifys",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const educationData = [
 
  
  {
    title: "Masters in Computer Science",
    location: "California State University, Long Beach, CA",
    description:
      "Relevant Coursework: Web Technologies, Data structures, Design Patterns, Cloud Computing, Operating System." ,
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },
] as const;

export const experiencesData = [
    {
    title: "Full Stack Developer at DataFlake",
    location: "Remote",
    description:"Optimized system performance by reducing code vulnerabilities and migrating to a Spring Boot microservices architecture, improving platform responsiveness by 20%. Developed automated UI tests with Selenium and optimized database queries using Hibernate, enhancing user satisfaction and system efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  
  {
    title: "Graduate Assistant at California State University Long Beach",
    location: "Long Beach, CA",
    description:
      "Implemented OAuth2 JWT-based Single Sign-On (SSO) for secure session management across applications. Transitioned RESTful APIs to GraphQL, enhanced microservices architecture with Express.js and ES6, and optimized performance with MongoDB, Spring Boot, Kafka, and Kubernetes for cloud orchestration." ,
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
   {
    title: "Full Stack Developer at Grip Spark Foundation",
    location: "Remote",
    description:"Developed REST APIs using JavaScript and Node modules, and built interactive React applications with Tailwind CSS. Gained expertise in AWS services, including RDS and EC2, and automated infrastructure provisioning with custom Jenkins pipelines.",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2021",
  }
] as const;

export const projectsData = [
  
  {
    title: "Twitter Clone",
    description:
      "Enables users of the website to create profile page, post content, like posts, retweet posts, pin posts, comment on posts, create group chats, follow people.",
    tags: ["Node JS"," Socket IO", "JavaScript"," MongoDB"],
    imageUrl: twitter,
  },
   {
    title: "Todo App",
    description:
      "Web App allows users to create and manage Todo list",
    tags: ["Spring Boot"," RESTful Architecture", "Spring Framework"],
    imageUrl: todoo,
  },
 
] as const;
export const certifyData = [
  {
    title: "AWS Certified Developer - Associate",
    description:
      " ",
    imageUrl: aws,
  },
  {
    title: "Infosys Certified Software Programmer",
    description:
      " ",
    imageUrl: info,
  },
   {
    title: "The Grip Spark Foundation ",
    description:
      " ",
    tags: [" "],
    imageUrl: grip,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "MongoDB",
  "AWS","Spring Framework","Rest API", "Spring Boot",
  "Express",
  "PostgreSQL","Java",
  "Python",
  "Framer Motion",
] as const;
