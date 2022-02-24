import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Skill from "./components/Skill";
import Teams from "./components/Teams";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Route exact path="/">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skill />
        <Teams />
        <Contact />
        <Footer />
      </Route>
      <Route exact path="/about">
        <Navbar />
        <About />
      </Route>
      <Route exact path="/services">
        <Navbar />
        <Services />
      </Route>
      <Route exact path="/skill">
        <Navbar />
        <Skill />
      </Route>
      <Route exact path="/teams">
        <Navbar />
        <Teams />
      </Route>
      <Route exact path="/contact">
        <Navbar />
        <Contact />
        <Footer />
      </Route>
    </>
  );
}

export default App;
