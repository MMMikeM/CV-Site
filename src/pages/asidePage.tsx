import { useRef } from "preact/hooks";

import Development from "./experience/development";
import Training from "./experience/training";
import Support from "./experience/support";
import CCW from "./projects/ccw";
import CLI from "./projects/cli";
import Scraper from "./projects/scraper";
import Calendar from "./projects/calendar";

const AsidePage = ({ setActiveView, activeView }) => {
  const page = () => {
    switch (activeView.aside) {
      case "development":
        return <Development />;
      case "training":
        return <Training />;
      case "support":
        return <Support />;
      case "ccw":
        return <CCW />;
      case "cli":
        return <CLI />;
      case "scraper":
        return <Scraper />;
      case "calendar":
        return <Calendar />;
      default:
        return "";
    }
  };

  const links = {
    ccw: "https://github.com/MMMikeM/car-wash-frontend",
    cli: "",
    scraper: "https://github.com/MMMikeM/Scraper",
    calendar: "https://github.com/MMMikeM/useLilius-tailwindcss-calendar",
  };

  const scroll = () => {
    // window.scrollTo(0, 0);
    ref.current.scrollIntoView();
  };

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="px-2 pt-4 flex-grow flex flex-col justify-center" ref={ref}>
      {page()}
      <div className="flex justify-between -ml-2 -mr-2 md:mx-0">
        <button
          className="bg-secondary-600 hover:bg-secondary-500 active:bg-secondary-600 text-white h-12 w-36 md:w-48 mt-12 mb-4 rounded-sm"
          onClick={() => {
            ref.current.scrollIntoView({ behavior: "smooth" });
            setActiveView({ ...activeView, view: "main" });
          }}
        >
          Return
        </button>
        <a
          target="_blank"
          href={links[activeView.aside]}
          className="flex justify-center items-center cursor-pointer border-secondary-600 hover:bg-secondary-500 active:bg-secondary-600 border-2 text-white h-12 w-36 md:w-48 mt-12 mb-4 rounded-sm"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default AsidePage;
