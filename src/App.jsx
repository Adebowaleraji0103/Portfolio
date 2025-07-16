import Landing from "./component/Landing";
// import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Landing/>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
