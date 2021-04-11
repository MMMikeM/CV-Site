import Card from "../components/card";

const Projects = ({ elementRef, setActiveView }) => {
  return (
    <div className="wrapper" ref={elementRef}>
      <div className="w-full md:h-12"></div>
      <h2 className="h2">Things I have done</h2>
      <div
        className="
      w-full grid grid-cols-1 gap-4 place-items-stretch px-4
      md:grid-cols-2 md:mb-12 md:px-24   
      2xl:grid-cols-3"
      >
        <Card
          title="Carbon Carwash"
          classes="h-80 flex flex-grow flex-col justify-between min-w-[260px]"
          onClick={() => {
            setActiveView({ view: "aside", aside: "ccw" });
          }}
        >
          <h3 className="h5 my-2">React & Bootstrap</h3>
          <h4 className="mb-10 text-primary-200">July 2020</h4>
        </Card>
        <Card
          title="Contention Ratio CLI tool"
          classes="h-80 flex flex-grow flex-col justify-between min-w-[260px]"
          onClick={() => {
            setActiveView({ view: "aside", aside: "cli" });
          }}
        >
          <h3 className="h5 my-2">NodeJS & Jest</h3>
          <h4 className="mb-10 text-primary-200">February 2021</h4>
        </Card>
        <Card
          title="Web scraper"
          classes="h-80 flex flex-grow flex-col justify-between min-w-[260px]"
          onClick={() => {
            setActiveView({ view: "aside", aside: "scraper" });
          }}
        >
          <h3 className="h5 my-2">NodeJS</h3>
          <h4 className="mb-10 text-primary-200">June 2020</h4>
        </Card>
        <Card
          title="Tailwind Datepicker"
          classes="h-80 flex flex-grow flex-col justify-between min-w-[260px]"
          onClick={() => {
            setActiveView({ view: "aside", aside: "calendar" });
          }}
        >
          <h3 className="h5 my-2">React & Tailwindcss</h3>
          <h4 className="mb-10 text-primary-200">April 2021</h4>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
