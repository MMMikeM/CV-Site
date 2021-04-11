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
            title="Carbon Carwash"
            subtitle="React & Bootstrap"
            classes="min-h-[240px] md:h-80 flex flex-grow flex-col justify-between min-w-[240px]"
            onClick={() => {
              setActiveView({ view: "aside", aside: "ccw" });
            }}
          >
            <p className="text-gray-200">
              Example paragraph text that I am going to use to describe each
              project briefly
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
              Example paragraph text that I am going to use to describe each
              project briefly
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
              Example paragraph text that I am going to use to describe each
              project briefly
            </p>
            <h4 className="mb-4 text-primary-200">June 2020</h4>
          </Card>
          <Card
            title="Tailwind Datepicker"
            subtitle="React & Tailwindcss"
            classes="min-h-[240px] md:h-80 flex flex-grow flex-col justify-between min-w-[240px]"
            onClick={() => {
              setActiveView({ view: "aside", aside: "calendar" });
            }}
          >
            <p className="text-gray-200">
              Example paragraph text that I am going to use to describe each
              project briefly
            </p>
            <h4 className="mb-4 text-primary-200">April 2021</h4>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
