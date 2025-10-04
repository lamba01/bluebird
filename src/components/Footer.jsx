import React from "react";
// import footerlogo from "../assets/IMG_1359.jpg";

function Footer() {
  return (
    <footer
      className="bg-blue-600 text-white pt-8 pb-2 px-6 mt-40 sm:mt-52"
      id="footer"
    >
      <main className="flex flex-col sm:flex-row gap-5 justify-between">
        <div className="max-w-6xl flex items-center gap-5 space-y-2">
          {/* <img src={footerlogo} alt="Rwatos logo" className="w-20" /> */}
          <div>
            <h4 className="text-xl font-semibold">Bluebird Consult LTD</h4>
            <p className="italic">
              Consulting that Delivers. Solutions that Scale.
            </p>
          </div>
        </div>
        <div>
          <p className="text-white/70 capitalize">
            <strong className="text-white">Address :</strong> 26 feenan highway,
            tilbury, essex, england. RM18 8JJ
          </p>
          <p className="text-white/70">
            <strong className="text-white">Email :</strong>
            <a href="mailto:info@bluebirdconsultltd.com">
              {" "}
              info@bluebirdconsultltd.com
            </a>
          </p>
          <p className="text-white/70">
            <strong className="text-white">Phone :</strong>
            <a href="tel:+447903332713" className="underline">
              {" "}
              +44-7903-332-713
            </a>
          </p>
        </div>
      </main>
      <div className="border-t border-gray-300 w-full mt-4"></div>
      <div className="w-full text-center pt-2 text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Bluebird Consult LTD. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
