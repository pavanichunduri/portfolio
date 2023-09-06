"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      A dedicated and creative Full Stack Developer with a passion for turning ideas into captivating digital experiences.
      With a masters degree in <span className="font-medium">Computer Science</span> from California State University Long Beach {" "}
        ,  I've honed my skills and expertise to create impactful digital solutions with 
        <span className="font-medium"> full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. My  stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB, Spring Boot, RESTful Architecture, Spring Framework, Java</span>{""}. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Full Stack Developer and Software Developer.
      </p>

   
    </motion.section>
  );
}
