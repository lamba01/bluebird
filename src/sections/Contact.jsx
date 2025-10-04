import React from "react";
import intersect from "../assets/Intersect.png";

function Contact() {
  return (
    <section className="relative text-center px-5">
      <div className="bg-gradient-to-bl from-[#3171DE] to-[#4AC0F2] h-[250px] sm:h-[400px] flex flex-col items-center rounded-xl px-4 py-4 text-white text-center">
        <h1 className="capitalize text-2xl md:text-4xl max-w-3xl mt-4 font-bold">
          Let’s elevate your business with smart software solutions.
        </h1>
        <p className="mt-2 max-w-xl text-sm sm:text-base">
          Talk to our team today and discover how we can streamline your
          operations, boost productivity, and deliver measurable results.
        </p>
        <button className="mt-4 bg-white text-black rounded-xl px-10 py-2 capitalize font-semibold">
          <a href="tel:+447903332713" className="hover:underline">
            schedule a consultation
          </a>
        </button>
      </div>

      <div className="absolute top-[170px] sm:top-[250px] left-1/2 transform -translate-x-1/2">
        <img
          className="h-[150px] sm:h-[300px]"
          src={intersect}
          alt="contact illustration"
        />
      </div>
    </section>
  );
}

export default Contact;
