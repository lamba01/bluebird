import React from "react";
import intersect from "../assets/Intersect.png";

function Contact() {
  return (
    <section className="relative text-center px-5">
      <div className="bg-gradient-to-bl from-[#3171DE] to-[#4AC0F2] h-[250px] sm:h-[400px] flex flex-col items-center rounded-xl px-4 py-4 text-white text-center">
        <h1 className="capitalize text-2xl md:text-4xl max-w-3xl mt-4 font-bold">
          ready to transform your vision into reality? let's get started!
        </h1>
        <button className="mt-4 bg-white text-black rounded-xl px-10 py-2 capitalize">
          <a href="tel:+447903332713" className="underline">
            schedule a call
          </a>
        </button>
      </div>

      {/* Fix image centering */}
      <div className="absolute top-[170px] sm:top-[250px] left-1/2 transform -translate-x-1/2">
        <img
          className="h-[150px] sm:h-[300px] "
          src={intersect}
          alt="the team"
        />
      </div>
    </section>
  );
}
export default Contact;
