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
  const [iconList, setIconList] = useState<any>([]);
  const [footerIcons, setFooterIcons] = useState<any>([]);

  const itemsRef = Array.from([...Array(10).keys()], () =>
    useRef<HTMLDivElement>(null)
  );

  const themeChange = () => {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    import("./svg/icons").then((icons) => setIconList(icons.default));
    import("./svg/footericons").then((icons) => setFooterIcons(icons.default));
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

  return (
    <div
      className={
        "flex flex-col-reverse sm:flex-col h-screen text-white bg-gray-900 md:bg-black " +
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
        <div className="bg-gray-900 flex flex-col px-6 lg:px-16 responsive-container pb-16 sm:pb-4 overflow-hidden shadow-lg ">
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
          "aside absolute top-0 sm:top-16 bottom-16 md:bottom-12 inset-x-0 overflow-y-auto flex-grow bg-gray-900 " +
          (activeView.view !== "main" ? " aside-active" : "")
        }
      >
        <div className="bg-gray-900 flex flex-col px-6 lg:px-16 responsive-container min-h-full pb-4 shadow-lg">
          <AsidePage activeView={activeView} setActiveView={setActiveView} />
        </div>
      </div>
      <Footer footerIcons={footerIcons} />
    </div>
  );
};
