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

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [activeView, setActiveView] = useState({ view: "main", aside: "" });
  const [navigateClass, setNavigateClass] = useState("");

  const itemsRef = Array.from([...Array(10).keys()], () =>
    useRef<HTMLDivElement>(null)
  );

  const themeChange = () => {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    import("./fonts/font");
    setNavigateClass(" csstimer-done");
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

  const onScreenItems = {
    0: useOnScreen(itemsRef[0]),
    1: useOnScreen(itemsRef[1]),
    2: useOnScreen(itemsRef[2]),
    3: useOnScreen(itemsRef[3]),
    4: useOnScreen(itemsRef[4]),
    5: useOnScreen(itemsRef[5]),
  };

  const downScroll = (input) => {
    console.log(input);
    if (input[0] && input[1] && !input[2]) {
      scroller(1);
    } else if (input[1] && input[2] && !input[3]) {
      scroller(2);
    } else if (input[2] && input[3] && !input[4]) {
      scroller(3);
    } else if (input[3] && input[4] && !input[5]) {
      scroller(4);
    } else if (input[4] && input[5]) {
      scroller(5);
    }
  };

  const upScroll = (input) => {
    console.log(input);
    if (input[0]) {
      scroller(0);
    } else if (
      (!input[0] && input[1] && input[2]) ||
      (!input[1] && input[2] && !input[3])
    ) {
      scroller(1);
    } else if (
      (!input[1] && input[2] && input[3]) ||
      (!input[2] && input[3] && !input[4])
    ) {
      scroller(2);
    } else if (!input[2] && input[3] && input[4]) {
      scroller(3);
    } else if ((!input[3] && input[4] && input[5]) || input[5]) {
      scroller(4);
    }
  };

  return (
    <div className={"overflow-x-hidden " + (darkTheme ? "dark" : "")}>
      {/* <Background /> */}
      <div className=" fixed inset-0 bg-black bg-opacity-30"></div>
      <Nav scroller={scroller} />
      <div className="flex justify-start items-end text-white font-bold z-20 fixed right-10 bottom-10 invisible lg:visible">
        <h2
          className={
            "mr-4 h4 font-normal text-secondary-500 csstimer" + navigateClass
          }
        >
          Navigate here
        </h2>
        <div>
          <div className="h-12 w-12 mb-2">
            <button
              className="bg-white bg-opacity-20 hover:bg-opacity-40 h-full w-full focus:outline-none transform active:scale-110 rotate-180 "
              onClick={() => upScroll(onScreenItems)}
            >
              V
            </button>
          </div>
          <div className="h-12 w-12">
            <button
              className="bg-white bg-opacity-20 hover:bg-opacity-40  h-full w-full focus:outline-none transform active:scale-110 "
              onClick={() => downScroll(onScreenItems)}
            >
              V
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          "main relative bg-gray-900 shadow-lg text-blue-50 flex flex-col px-6 sm:px-16 responsive-container min-h-full mb-16 sm:mb-4" +
          (activeView.view === "main" ? "" : " main-hidden")
        }
      >
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
