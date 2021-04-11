import Card from "../components/card";

const Experience = ({ elementRef, setActiveView }) => {
  return (
    <div className="wrapper" ref={elementRef}>
      <h2 className="h2">Places I've been</h2>
      <div
        className="
      w-full 
      grid grid-cols-1 gap-4 place-items-stretch px-4 
      sm:grid-cols-2 
      md:mb-12 md:px-0
      xl:grid-cols-3
      "
      >
        <Card
          title="Junior Frontend Developer"
          classes="h-80 flex flex-grow flex-col justify-between min-w-[260px] "
          onClick={() => {
            setActiveView({ view: "aside", aside: "development" });
          }}
        >
          <div>
            <h3 className="h5 mt-12">Saicom</h3>
            <h4 className="mb-10 text-primary-200">July 2020 - Present</h4>
          </div>
        </Card>
        <Card
          title="Training Manager"
          classes="h-80 flex flex-grow flex-col justify-between min-w-[260px] "
          onClick={() => {
            setActiveView({ view: "aside", aside: "training" });
          }}
        >
          <div>
            <h3 className="h5 mt-12">Saicom</h3>
            <h4 className="mb-10 text-primary-200">Aug 2019 - June 2020</h4>
          </div>
        </Card>
        <Card
          title="Network & VOIP Support Engineer"
          classes="h-80 flex flex-grow flex-col justify-between min-w-[260px] "
          onClick={() => {
            setActiveView({ view: "aside", aside: "support" });
          }}
        >
          <h3 className="h5 mt-12">Saicom</h3>
          <h4 className="mb-10 text-primary-200">July 2018 - July 2019</h4>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
