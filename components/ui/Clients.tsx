"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        References From
        <span className="text-purple"> Teachers and Managers</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

            {/* Space Between Testimonials and Logos */}
    <div className="my-8 md:my-12" />

    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 max-lg:mt-10">
  {companies.map((company) => (
    <div
      key={company.id}
      className="flex flex-col items-center text-center gap-2"
    >
      {/* Uniform Logo Container */}
      <div
        className="flex items-center justify-center h-16 md:h-20 w-24 md:w-32"
      >
        <img
          src={company.img}
          alt={`${company.name} Logo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Styled Company Name */}
      <span className="text-sm md:text-lg font-medium text-gray-800 dark:text-gray-300">
        {company.name}
      </span>
    </div>
  ))}
</div>






      </div>
    </section>
  );
};

export default Clients;
