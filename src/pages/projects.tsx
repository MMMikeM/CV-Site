import Card from "../components/card";

const Projects = ({ elementRef, setActiveView }) => {
  return (
    <div ref={elementRef} className="wrapper">
      <h2 className="h2 ">Things I have done</h2>
      <div className="flex mb-12 flex-col items-center  lg:flex-row w-full">
        <Card
          title="Carbon Carwash"
          classes="w-80 lg:w-1/3 sm:mr-8 flex flex-col justify-between"
          onClick={() => {
            setActiveView({ view: "aside", aside: "ccw" });
          }}
        >
          <div>
            <h3 className="h5">React & Bootstrap</h3>
            <h4 className="mb-10">July 2020</h4>
          </div>
        </Card>
        <Card
          title="Contention Ratio CLI tool"
          classes="w-80 lg:w-1/3 sm:mr-8 flex flex-col justify-between"
          onClick={() => {
            setActiveView({ view: "aside", aside: "cli" });
          }}
        >
          <div>
            <h3 className="h5">NodeJS & Jest</h3>
            <h4 className="mb-10">February 2021</h4>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
