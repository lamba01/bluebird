import React from "react";
import { RiComputerLine } from "react-icons/ri";

function Chooseus() {
  return (
    <section className="text-center mt-12 px-5 sm:px-10 sm:py-10">
      <span className="text-lg text-blue-600 font-semibold capitalize ">
        why choose us
      </span>
      <h2 className="text-2xl sm:text-4xl font-bold capitalize text-center pb-5">
        trusted partner for scalable software and system solutions
      </h2>
      <div className="grid sm:grid-cols-2 gap-x-0 text-gray-800 space-y-5 space-x-5 text-start py-5">
        <div>
          <div className="flex items-center space-x-4 w-fit bg-blue-600 text-white p-4 rounded-lg mb-3">
            <RiComputerLine />
          </div>
          <h4 className="text-xl font-semibold">Proven Industry Expertise</h4>
          <p>
            Our team combines years of software engineering and system
            integration experience to deliver reliable, enterprise-grade
            solutions that align with your strategic goals.
          </p>
        </div>

        <div>
          <div className="flex items-center space-x-4 w-fit bg-blue-600 text-white p-4 rounded-lg mb-3">
            <RiComputerLine />
          </div>
          <h4 className="text-xl font-semibold">Dedicated Client Support</h4>
          <p>
            We provide continuous technical assistance and proactive monitoring
            to ensure your systems operate efficiently with minimal downtime.
          </p>
        </div>

        <div>
          <div className="flex items-center space-x-4 w-fit bg-blue-600 text-white p-4 rounded-lg mb-3">
            <RiComputerLine />
          </div>
          <h4 className="text-xl font-semibold">
            Flexible & Transparent Pricing
          </h4>
          <p>
            Our pricing models are designed to meet the needs of organizations
            of all sizes, ensuring clear value and predictable costs without
            hidden charges.
          </p>
        </div>

        <div>
          <div className="flex items-center space-x-4 w-fit bg-blue-600 text-white p-4 rounded-lg mb-3">
            <RiComputerLine />
          </div>
          <h4 className="text-xl font-semibold">
            Customized System Architecture
          </h4>
          <p>
            Every business has unique requirements. We design, build, and
            implement tailored SaaS and system architectures that scale with
            your operations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Chooseus;
