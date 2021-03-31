import Card from "../components/card";

const Projects = ({ elementRef, setActiveView }) => {
  return (
    <div ref={elementRef} className="wrapper">
      <h2 className="h2 ">Things I have done</h2>
      <div className="flex mb-12 flex-col items-center lg:flex-row w-full">
        <Card
          title="Carbon Carwash"
          classes="w-80 lg:w-1/3 sm:mr-8 flex flex-col justify-between"
        >
          Yo
        </Card>
        <Card
          title="Contention Ratio CLI tool"
          classes="w-80 lg:w-1/3 sm:mr-8 flex flex-col justify-between"
        >
          Yo
        </Card>
      </div>
    </div>
  );
};

export default Projects;
