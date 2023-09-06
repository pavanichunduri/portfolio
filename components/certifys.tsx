"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certifyData } from "@/lib/data";
import Certify from "./certify";
import { useSectionInView } from "@/lib/hooks";

export default function Certifys() {
  const { ref } = useSectionInView("Certifys", 0.5);

  return (
    <section ref={ref} id="certifys" className="scroll-mt-28 mb-28">
      <SectionHeading>My Certifications</SectionHeading>
      <div>
        {certifyData.map((certify, index) => (
          <React.Fragment key={index}>
            <Certify {...certify} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
