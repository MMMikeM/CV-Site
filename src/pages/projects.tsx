import Card from "../components/card";

const Projects = ({ elementRef, setActiveView }) => {
  return (
    <div className="wrapper pt-10" ref={elementRef}>
      <div className="bg-gray-925 shadow-lg rounded-md py-8 md:py-12 md:px-12">
        <h2 className="h2 md:mb-10 ml-4">Things I have done</h2>
        <div
          className="
      w-full 
      grid grid-cols-1 gap-x-4 gap-y-8 place-items-stretch px-4
      md:grid-cols-2 md:mb-12 md:px-4 md:gap-y-4"
        >
          <Card
            title="Carbon Car Wash"
            subtitle="React & Bootstrap & SASS"
            classes="min-h-[240px] md:h-80 flex flex-grow flex-col justify-between min-w-[240px]"
            onClick={() => {
              setActiveView({ view: "aside", aside: "ccw" });
            }}
          >
            <p className="text-gray-200">
              Loyalty and salestracking webapp for a carwash based in Ferndale,
              serving users, staff and management
            </p>
            <h4 className="mb-4 text-primary-200">July 2020</h4>
          </Card>
          <Card
            title="Contention Ratio CLI tool"
            subtitle="NodeJS & Jest"
            classes="min-h-[240px] md:h-80 flex flex-grow flex-col justify-between min-w-[240px]"
            onClick={() => {
              setActiveView({ view: "aside", aside: "cli" });
            }}
          >
            <p className="text-gray-200">
              An internal tool to expedite a process whereby the core
              infrastucture team ensured contention ratios were within spec
            </p>
            <h4 className="mb-4 text-primary-200">February 2021</h4>
          </Card>
          <Card
            title="Web scraper"
            subtitle="NodeJS"
            classes="min-h-[240px] md:h-80 flex flex-grow flex-col justify-between min-w-[240px]"
            onClick={() => {
              setActiveView({ view: "aside", aside: "scraper" });
            }}
          >
            <p className="text-gray-200">
              A small tool I used to monitor when stock of a limited edition
              keyboard dropped
            </p>
            <h4 className="mb-4 text-primary-200">June 2020</h4>
          </Card>
          <Card
            title="Tailwind Datepicker"
            subtitle="React & Tailwind CSS"
            classes="min-h-[240px] md:h-80 flex flex-grow flex-col justify-between min-w-[240px]"
            onClick={() => {
              setActiveView({ view: "aside", aside: "calendar" });
            }}
          >
            <p className="text-gray-200">
              Datepicker built with Tailwind as there are currently no easy to
              solutions that allow for Tailwind integration without
            </p>
            <h4 className="mb-4 text-primary-200">April 2021</h4>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
