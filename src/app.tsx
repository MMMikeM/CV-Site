import { useState, useEffect, useRef } from "preact/hooks";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Tech from "./pages/tech";
import Experience from "./pages/experience";
import AsidePage from "./pages/asidePage";
import Projects from "./pages/projects";
import Landing from "./pages/landing";
import This from "./pages/this";
import Nav from "./components/nav";

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [activeView, setActiveView] = useState({ view: "main", aside: "" });

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
    if (activeView.aside === "aside") {
      itemsRef[input].current.scrollIntoView({});
    } else {
      itemsRef[input].current.scrollIntoView({
        behavior: "smooth",
      });
    }
    setActiveView({ ...activeView, view: "main" });
  };

  return (
    <div className={"overflow-x-hidden " + (darkTheme ? "dark" : "")}>
      {/* <Background /> */}
      <div className=" fixed inset-0 bg-black bg-opacity-30"></div>
      <Nav scroller={scroller} />
      <div
        className={
          "main relative bg-gray-900 shadow-lg bg- text-blue-50 flex flex-col px-6 sm:px-16 responsive-container min-h-full" +
          (activeView.view === "main" ? "" : " main-hidden")
        }
      >
        {/* <Landing /> */}
        <Home elementRef={itemsRef[0]} />
        <About elementRef={itemsRef[1]} />
        <Tech elementRef={itemsRef[2]} />
        <Experience elementRef={itemsRef[3]} setActiveView={setActiveView} />
        <Projects elementRef={itemsRef[4]} setActiveView={setActiveView} />
        <This elementRef={itemsRef[5]} />
      </div>
      <div
        className={
          "aside left-0 right-0 fixed top-0 bg-gray-900 shadow-lg h-screen text-blue-50 flex flex-col px-4 sm:px-16 responsive-container min-h-full overflow-y-scroll sm:overflow-y-hidden" +
          (activeView.view !== "main" ? " aside-active" : "")
        }
      >
        <AsidePage activeView={activeView} setActiveView={setActiveView} />
      </div>
    </div>
  );
};
