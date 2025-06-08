import Navigation from "./layout/Navigation";
import Hero from "./components/Hero";
import Facts from "./components/Facts";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <Facts />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
