import { useState, useEffect, useRef } from "preact/hooks";

import Home from "./pages/home";
import About from "./pages/about";
import Tech from "./pages/tech";
import Experience from "./pages/experience";
import AsidePage from "./pages/asidePage";
import Projects from "./pages/projects";
import Landing from "./pages/landing";
import This from "./pages/this";
import Nav from "./components/nav";
import Scroller from "./components/scroller";
import Footer from "./components/footer";

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  // This would need a polyfill for older browsers, but supports 94% of browsers, so not worth the extra weight
  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    // Add the observer to the DOM to watch the element
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

export const App = () => {
  // setting the dark state lazily, so this function is called only once
  const [darkTheme, setDarkTheme] = useState(
    () =>
      localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [activeView, setActiveView] = useState({ view: "main", aside: "" });
  const [navigateClass, setNavigateClass] = useState("");
  const [iconList, setIconList] = useState<any>([]);
  const [footerIcons, setFooterIcons] = useState<any>([]);

  // creating refs to set up the scoll points
  const itemsRef = Array.from([...Array(10).keys()], () =>
    useRef<HTMLDivElement>(null)
  );

  const themeChange = () => {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  };

  // lazy loading icons and adding class to trigger animation, these are SVG paths that I use to generate full SVGs, to save some repeated code
  useEffect(() => {
    import("./svg/icons").then((icons) => setIconList(icons.default));
    import("./svg/footericons").then((icons) => setFooterIcons(icons.default));
    setNavigateClass(" csstimer-done");
  }, []);

  // setting up the scroller, in lieu of using a traditional router
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

  // an object to watch what items are on screen
  const onScreenItems = {
    0: useOnScreen(itemsRef[0]),
    1: useOnScreen(itemsRef[1]),
    2: useOnScreen(itemsRef[2]),
    3: useOnScreen(itemsRef[3]),
    4: useOnScreen(itemsRef[4]),
    5: useOnScreen(itemsRef[5]),
  };

  return (
    <div
      className={
        "flex flex-col-reverse sm:flex-col h-screen text-white bg-gray-950 md:bg-black " +
        (darkTheme ? "dark" : "")
      }
    >
      <Landing />
      <Nav scroller={scroller} />
      <Scroller
        activeView={activeView}
        navigateClass={navigateClass}
        onScreenItems={onScreenItems}
        scroller={scroller}
      />

      <div
        className={
          "main overflow-y-auto flex-grow  " +
          (activeView.view === "main" ? "" : " main-hidden")
        }
      >
        <div className="bg-gray-950 flex flex-col px-6 lg:px-16 responsive-container pb-16 sm:pb-4 overflow-hidden shadow-md ">
          <Home elementRef={itemsRef[0]} />
          <About elementRef={itemsRef[1]} />
          <Tech elementRef={itemsRef[2]} iconList={iconList} />
          <Experience elementRef={itemsRef[3]} setActiveView={setActiveView} />
          <Projects elementRef={itemsRef[4]} setActiveView={setActiveView} />
          <This elementRef={itemsRef[5]} />
        </div>
      </div>
      <div
        className={
          "aside absolute top-0 sm:top-16 bottom-16 md:bottom-12 inset-x-0 overflow-y-auto flex-grow bg-gray-950 " +
          (activeView.view !== "main" ? " aside-active" : "")
        }
      >
        <div className="bg-gray-950 flex flex-col px-6 lg:px-16 responsive-container min-h-full pb-4 shadow-md">
          <AsidePage activeView={activeView} setActiveView={setActiveView} />
        </div>
      </div>
      <Footer footerIcons={footerIcons} />
    </div>
  );
};
