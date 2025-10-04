import React from "react";
import aboutImg from "../assets/about.png";
import { HiOutlineCheck } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-10 gap-10 sm:py-10"
    >
      <div className="text-left my-5 w-full sm:w-2/3 space-y-2">
        <span className="text-lg text-blue-600 font-semibold">About Us</span>
        <h2 className="text-2xl sm:text-4xl font-bold capitalize">
          delivering reliable software systems for modern enterprises
        </h2>
        <p className="text-gray-800">
          We are a technology-driven company specializing in the design,
          development, and management of scalable SaaS platforms and enterprise
          software systems. Our mission is to empower organizations with
          reliable digital solutions that enhance efficiency, streamline
          operations, and drive sustainable growth.
        </p>
        <ul className="grid grid-cols-2 gap-x-0 text-gray-800 space-y-0 space-x-0">
          <li>
            <HiOutlineCheck
              style={{
                color: "blue",
                fontSize: "24px",
                display: "inline",
                marginRight: "5px",
              }}
            />
            enterprise-grade solutions
          </li>
          <li>
            <HiOutlineCheck
              style={{
                color: "blue",
                fontSize: "24px",
                display: "inline",
                marginRight: "5px",
              }}
            />
            dedicated client support
          </li>
          <li>
            <HiOutlineCheck
              style={{
                color: "blue",
                fontSize: "24px",
                display: "inline",
                marginRight: "5px",
              }}
            />
            skilled and certified team
          </li>
          <li>
            <HiOutlineCheck
              style={{
                color: "blue",
                fontSize: "24px",
                display: "inline",
                marginRight: "5px",
              }}
            />
            transparent project delivery
          </li>
        </ul>
        <div className="flex items-start space-x-4 my-5">
          <div className="bg-blue-600 text-white w-fit px-5 py-4 rounded flex items-center justify-center">
            <FaPhoneAlt
              style={{
                color: "white",
                fontSize: "24px",
                display: "inline",
              }}
            />
          </div>
          <div>
            <p className="font-semibold">Call to speak with our team</p>
            <a className="text-blue-600 underline" href="tel:+447903332713">
              +44-7903-332-713
            </a>
          </div>
        </div>
        {/* <button className="bg-blue-600 text-white px-5 py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors">
          Schedule a Consultation
        </button> */}
      </div>
      <div className="w-full sm:w-1/3 flex justify-center h-full">
        <img src={aboutImg} alt="About Us" />
      </div>
    </section>
  );
}

export default About;
