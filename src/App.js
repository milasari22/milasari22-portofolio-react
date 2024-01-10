import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

import "../src/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Services />
    </div>
  );
}

export default App;
