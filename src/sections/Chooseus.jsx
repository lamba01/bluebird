import React from "react";
import { RiComputerLine } from "react-icons/ri";

function Chooseus() {
  return (
    <section className="text-center mt-12 px-5 sm:px-10 sm:py-10">
      <span className="text-lg text-blue-600 font-semibold capitalize">
        why choose us
      </span>
      <h2 className="text-2xl sm:text-4xl font-bold capitalize">
        we are here to grow your business exponentially
      </h2>
      <div className="grid sm:grid-cols-2 gap-x-0 text-gray-800 space-y-5 space-x-5 text-start py-5">
        <div>
          <div className="flex items-center space-x-4 w-fit bg-blue-600 text-white p-4 rounded-lg mb-3">
            <RiComputerLine />
          </div>
          <h4 className="text-xl font-semibold">
            Over 10 Years of IT Experience
          </h4>
          <p>
            With more than a decade in the industry, we bring deep technical
            expertise and proven strategies that help businesses grow faster,
            smarter, and more securely.
          </p>
        </div>
        <div>
          <div className="flex items-center space-x-4 w-fit bg-blue-600 text-white p-4 rounded-lg mb-3">
            <RiComputerLine />
          </div>
          <h4 className="text-xl font-semibold">
            24/7 Support & Fast Response
          </h4>
          <p>
            Our team is always on standby. Whether it's day or night, we ensure
            you get quick resolutions to keep your business running smoothly
            without costly downtime.
          </p>
        </div>
        <div>
          <div className="flex items-center space-x-4 w-fit bg-blue-600 text-white p-4 rounded-lg mb-3">
            <RiComputerLine />
          </div>
          <h4 className="text-xl font-semibold">
            Affordable Plans for All Business Sizes
          </h4>
          <p>
            From startups to large enterprises, we offer flexible pricing
            without compromising quality, making top-tier IT services accessible
            to everyone.
          </p>
        </div>
        <div>
          <div className="flex items-center space-x-4 w-fit bg-blue-600 text-white p-4 rounded-lg mb-3">
            <RiComputerLine />
          </div>
          <h4 className="text-xl font-semibold">Tailored Solutions</h4>
          <p>
            We don’t believe in generic fixes. Every business is unique, and our
            solutions are carefully crafted to align with your specific goals,
            workflows, and budget.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Chooseus;
