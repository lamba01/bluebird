// import HeroSection from "./sections/HeroSection";
// import Navbar from "./components/Navbar";
// import Banner from "./sections/Banner";
// import About from "./sections/About";
// import Chooseus from "./sections/Chooseus";
// import Services from "./sections/Services";
// import Contact from "./sections/Contact";
// import Footer from "./components/Footer";
// import RedirectWebmail from "./RedirectWeb";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <Banner />
//       <About />
//       <Chooseus />
//       <Services />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import Banner from "./sections/Banner";
import About from "./sections/About";
import Chooseus from "./sections/Chooseus";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import RedirectWebmail from "./RedirectWeb";

function MainSite() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Banner />
      <About />
      <Chooseus />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/webmail" element={<RedirectWebmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
