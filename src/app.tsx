import { useState, useEffect, useRef } from "preact/hooks";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Tech from "./pages/tech";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Landing from "./pages/landing";
import This from "./pages/this";
import Nav from "./components/nav";
import Background from "./svg/background";

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const itemsRef = Array.from([...Array(10).keys()], () =>
    useRef<HTMLDivElement>(null)
  );

  const themeChange = () => {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    import("./fonts/font");
  }, []);

  const scroller = (input: number) => {
    itemsRef[input].current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={"" + (darkTheme ? "dark" : "")}>
      <Background />
      <Nav scroller={scroller} />
      <div className="relative bg-gray-900 bg-opacity-75 text-blue-50 flex flex-col px-4 sm:px-16 sm:mx-8 md:mx-12 lg:mx-40 min-h-full">
        {/* <Router> */}
        {/* <Route exact path="/"> */}
        {/* <Landing /> */}
        <Home elementRef={itemsRef[0]} />
        <About elementRef={itemsRef[1]} />
        <Tech elementRef={itemsRef[2]} />
        <Experience elementRef={itemsRef[3]} />
        <Projects elementRef={itemsRef[4]} />
        <This elementRef={itemsRef[5]} />
        {/* </Route> */}
        {/* </Router> */}
      </div>
    </div>
  );
};
