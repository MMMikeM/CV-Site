import { useRef } from "preact/hooks";

import Development from "./experience/development";
import Teamlead from "./experience/teamlead";
import Training from "./experience/training";
import Support from "./experience/support";
import CCW from "./projects/ccw";
import CLI from "./projects/cli";
import Scraper from "./projects/scraper";
import Calendar from "./projects/calendar";
import Movies from "./projects/movies";
import Resizer from "./projects/resizer";

const AsidePage = ({ setActiveView, activeView }) => {
  // This essentially acts as a portion of my router
  const page = () => {
    switch (activeView.aside) {
      case "teamlead":
        return <Teamlead />;
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
      case "movies":
        return <Movies />;
      case "resizer":
        return <Resizer />;
      default:
        return "";
    }
  };

  const links = {
    ccw: "https://github.com/MMMikeM/car-wash-frontend",
    cli: "https://github.com/MMMikeM/contention-cli-tool",
    scraper: "https://github.com/MMMikeM/Scraper",
    calendar: "https://github.com/MMMikeM/useLilius-tailwindcss-calendar",
    movies: "https://github.com/MMMikeM/MMMovies",
    resizer: "https://github.com/MMMikeM/Image-Resizer",
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
        {!!links[activeView.aside] && (
          <a
            target="_blank"
            href={links[activeView.aside]}
            className="flex justify-center items-center cursor-pointer border-secondary-600 hover:bg-secondary-500 active:bg-secondary-600 border-2 text-white h-12 w-36 md:w-48 mt-12 mb-4 rounded-sm"
          >
            Github Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default AsidePage;
