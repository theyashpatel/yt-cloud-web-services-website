import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Support from "./components/Support";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Support />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
