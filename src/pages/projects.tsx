import Card from "../components/card";

const Projects = ({ elementRef, setActiveView }) => {
  return (
    <div className="wrapper" ref={elementRef}>
      <h2 className="h2 ">Things I have done</h2>
      <div className="flex mb-12 flex-col items-center lg:flex-row lg:flex-wrap xl:flex-nowrap w-full mx-auto">
        <Card
          title="Carbon Carwash"
          classes="w-80 lg:w-1/3 sm:mr-8 flex flex-col justify-between min-w-[260px]"
          onClick={() => {
            setActiveView({ view: "aside", aside: "ccw" });
          }}
        >
          <h3 className="h5 my-2">React & Bootstrap</h3>
          <h4 className="mb-10 text-primary-200">July 2020</h4>
        </Card>
        <Card
          title="Contention Ratio CLI tool"
          classes="w-80 lg:w-1/3 sm:mr-8 flex flex-col justify-between min-w-[260px]"
          onClick={() => {
            setActiveView({ view: "aside", aside: "cli" });
          }}
        >
          <h3 className="h5 my-2">NodeJS & Jest</h3>
          <h4 className="mb-10 text-primary-200">February 2021</h4>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
