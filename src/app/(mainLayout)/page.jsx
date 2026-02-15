import AboutCarefy from "@/components/pages/home/AboutCarefy";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import React from "react";

const page = () => {
  return (
    <section className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <AboutCarefy />
      <Services />
    </section>
  );
};

export default page;
