import './App.css';
import Navbar from "./Components/Navbar"
import About from "./Components/About";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact"
import TechnicalSkills from "./Components/TechnicalSkills"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <TechnicalSkills/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
