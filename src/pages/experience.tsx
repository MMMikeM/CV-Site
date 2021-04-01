import Card from "../components/card";

const Experience = ({ elementRef, setActiveView }) => {
  return (
    <div className="wrapper" ref={elementRef}>
      <h2 className="h2">Places I've been</h2>
      <div className="flex mb-12 flex-col items-center lg:flex-row lg:flex-wrap xl:flex-nowrap w-full  mx-auto">
        <Card
          title="Junior Frontend Developer"
          classes="w-80 lg:w-1/3 sm:mr-8 flex flex-col justify-between min-w-[260px] "
          onClick={() => {
            setActiveView({ view: "aside", aside: "development" });
          }}
        >
          <div>
            <h3 className="h5">Saicom</h3>
            <h4 className="mb-10">July 2020 - Present</h4>
          </div>
        </Card>
        <Card
          title="Training Manager"
          classes="w-80 lg:w-1/3 sm:mr-8 flex flex-col justify-between min-w-[260px] "
          onClick={() => {
            setActiveView({ view: "aside", aside: "training" });
          }}
        >
          <div>
            <h3 className="h5">Saicom</h3>
            <h4 className="mb-10">Aug 2019 - June 2020</h4>
          </div>
        </Card>
        <Card
          title="Network & VOIP Support Engineer"
          classes="w-80 lg:w-1/3 sm:mr-8 flex flex-col justify-between min-w-[260px] "
          onClick={() => {
            setActiveView({ view: "aside", aside: "support" });
          }}
        >
          <h3 className="h5">Saicom</h3>
          <h4 className="mb-10">July 2018 - July 2019</h4>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
