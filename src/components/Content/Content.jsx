import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const Content = ({ isMobile }) => {
  return (
    <section>
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio isMobile={isMobile} />
      <Contact />
      <Copyright />
    </section>
  );
};

export default Content;
