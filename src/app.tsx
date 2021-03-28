import { useState } from "preact/hooks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./pages/about";
import Tech from "./pages/tech";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Landing from "./pages/landing";

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const themeChange = () => {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gradient-to-tr from-em-900 to-gray-900 fixed inset-0">
        <div className="fixed inset-0 overflow-y-scroll">
          <div className="dark:bg-tg-900 bg-tg-50 dark:text-blue-50 flex flex-col px-8 mx-40 min-h-full">
            <Router>
              <Route path="/experience/development">
                <h1>wassup</h1>
              </Route>
              <Route exact path="/">
                {/* <Landing /> */}
                <About />
                <Tech />
                <Experience />
                <Projects />
              </Route>
              {/* <button
                className="bg-red-500 w-20 h-20"
                onClick={() => themeChange()}
              >
                Theme
              </button> */}
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};
