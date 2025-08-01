import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import Banner from "./sections/Banner";
import About from "./sections/About";
import Chooseus from "./sections/Chooseus";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
function App() {
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

export default App;
