import React, { useState, createContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar"
import About from "./components/About/About"
import TechStack from "./components/TechStack/TechStack"
import Education from "./components/Education/Education"
import Contact from "./components/Contact/Contact"
import ScrollToTop from "react-scroll-to-top";
import NavbarMobileView from "./components/Sidebar/NavbarMobileView"
import "./App.css"

export const ThemeContext = createContext(null);

const App = () => {

  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme,changeTheme}} >

      <div id={theme}> 

      <NavbarMobileView changeTheme={changeTheme} theme={theme}/>
      <Sidebar changeTheme={changeTheme} theme={theme}/>
      <About />
      <TechStack />
      <Education />
s      <Contact />

      </div>

      <ScrollToTop smooth={true}
        top="20"
        color="White"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#13004c" }}
      />

    </ThemeContext.Provider>
  );
}

export default App;