import React from "react";
import { MdPhonelinkSetup } from "react-icons/md";
import { FaCloudDownloadAlt, FaDatabase, FaMicrochip } from "react-icons/fa";

function Services() {
  return (
    <section className="text-center mt-12 px-5 sm:px-10 sm:py-10" id="services">
      <span className="text-lg text-blue-600 font-semibold capitalize">
        our services
      </span>
      <h2 className="text-2xl sm:text-4xl font-bold capitalize">
        comprehensive software and system solutions
      </h2>
      <main className="py-10">
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
              System Architecture & Implementation
            </h4>
            <p>
              We design, deploy, and manage robust system infrastructures that
              support business continuity and long-term scalability.
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
              Cloud Migration & Infrastructure Support
            </h4>
            <p>
              Our experts handle seamless migration to secure cloud platforms
              while ensuring minimal disruption to your operations.
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
            <h4 className="text-lg font-semibold mb-2">
              Managed Software Services
            </h4>
            <p>
              We provide continuous monitoring, maintenance, and updates for
              your SaaS applications and enterprise systems.
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
              Technology Consulting
            </h4>
            <p>
              We help organizations evaluate, adopt, and integrate the right
              technologies to improve performance and operational efficiency.
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
            <h4 className="text-lg font-semibold mb-2">Data & Insights</h4>
            <p>
              We implement intelligent analytics and reporting tools to help you
              make data-driven decisions with confidence.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-blue-600 p-6 rounded-md flex items-center flex-col text-white">
            <h4 className="text-lg font-semibold mb-2">
              Talk to Our Solutions Team
            </h4>
            <p>
              Discuss your business objectives with our experts. We’ll assess
              your needs and recommend a tailored software or system strategy
              aligned with your goals.
            </p>
            <p className="text-2xl font-semibold pt-3">+44-7903-332-713</p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Services;
