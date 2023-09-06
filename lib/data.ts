import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import todoo from "@/public/todoo.png";
import twitter from "@/public/twitter.png";
import info from "@/public/info.png";
import grip from "@/public/grip.jpeg";


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
    title: "Bachelors in Computer Science",
    location: "PVP Siddhartha Institute of Technology, Vijayawada, India",
    description:" Relevant Coursework:Advanced Analysis of Algorithms, Object oriented Analysis & Design, Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
  
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
    title: "Full Stack Developer",
    location: "Remote",
    description:"Expertise in Full-Stack Web Development using React, Express with Node.js and MongoDB. Collaborated effectively with web developers on diverse projects, writing code, optimizing performance, and resolving issues",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2021",
  },
  
  {
    title: "Graduate Assistant",
    location: "Long Beach, CA",
    description:
      "Throughout the year I worked under 3 professors. Organized and conducted Zoom meetings to facilitate in-depth discussions on problem-solving algorithms. Implemented innovative teaching techniques that boosted student participation by 35%, creating an interactive and dynamic learning environment." ,
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
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
