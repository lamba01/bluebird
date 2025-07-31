import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import Banner from "./sections/Banner";
import About from "./sections/About";
import Chooseus from "./sections/Chooseus";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Banner />
      <About />
      <Chooseus />
    </>
  );
}

export default App;
