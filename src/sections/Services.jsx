import React from "react";
import { MdPhonelinkSetup } from "react-icons/md";
import { FaCloudDownloadAlt, FaDatabase } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";

function Services() {
  return (
    <section className="text-center mt-12 px-5 sm:px-10 sm:py-10" id="services">
      <span className="text-lg text-blue-600 font-semibold capitalize">
        our services
      </span>
      <h2 className="text-2xl sm:text-4xl font-bold capitalize">
        custom IT solutions for your business
      </h2>
      <main className=" py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#EAF9FF] p-6 rounded-md flex items-center flex-col">
            <div
              className="w-20 h-20 bg-blue-600 flex items-center justify-center mb-4"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                transform: "rotate(15deg)",
              }}
            >
              <div style={{ transform: "rotate(-15deg)" }}>
                <MdPhonelinkSetup
                  style={{ color: "white", fontSize: "1.5rem" }}
                />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              IT Infrastructure Setup
            </h4>
            <p>
              We plan and implement networks, servers, and hardware that scale
              with your business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EAF9FF] p-6 rounded-md flex items-center flex-col">
            <div
              className="w-20 h-20 bg-blue-600 flex items-center justify-center mb-4"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                transform: "rotate(15deg)",
              }}
            >
              <div style={{ transform: "rotate(-15deg)" }}>
                <FaCloudDownloadAlt
                  style={{ color: "white", fontSize: "1.5rem" }}
                />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              Cloud Migration & Support
            </h4>
            <p>
              We plan and implement networks, servers, and hardware that scale
              with your business.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EAF9FF] p-6 rounded-md flex items-center flex-col">
            <div
              className="w-20 h-20 bg-blue-600 flex items-center justify-center mb-4"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                transform: "rotate(15deg)",
              }}
            >
              <div style={{ transform: "rotate(-15deg)" }}>
                <FaCloudDownloadAlt
                  style={{ color: "white", fontSize: "1.5rem" }}
                />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">Managed IT Services</h4>
            <p>
              We handle your IT operations, so you can focus on growing your
              business.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#EAF9FF] p-6 rounded-md flex items-center flex-col">
            <div
              className="w-20 h-20 bg-blue-600 flex items-center justify-center mb-4"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                transform: "rotate(15deg)",
              }}
            >
              <div style={{ transform: "rotate(-15deg)" }}>
                <FaMicrochip style={{ color: "white", fontSize: "1.5rem" }} />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              Software & Tools Advisory
            </h4>
            <p>
              We help you choose the right software and tools to optimize your
              business processes.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#EAF9FF] p-6 rounded-md flex items-center flex-col">
            <div
              className="w-20 h-20 bg-blue-600 flex items-center justify-center mb-4"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                transform: "rotate(15deg)",
              }}
            >
              <div style={{ transform: "rotate(-15deg)" }}>
                <FaDatabase style={{ color: "white", fontSize: "1.5rem" }} />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">Data Analytics</h4>
            <p>
              We help you choose the right software and tools to optimize your
              business processes.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-blue-600 p-6 rounded-md flex items-center flex-col text-white">
            <h4 className="text-lg font-semibold mb-2">Call us for a quote</h4>
            <p>
              Whether you're a startup or an established enterprise, we’ll guide
              you in selecting the most effective software and IT solutions
              tailored to your business needs.Reach out today for a personalized
              consultation and transparent pricing.
            </p>
            <p className="text-2xl font-semibold pt-3">+44-7903-332-713</p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Services;
