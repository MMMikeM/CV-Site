import Card from "../components/card";

const Experience = ({ elementRef }) => {
  return (
    <div ref={elementRef} className="wrapper">
      <h2 className="h2 mb-8">Places I've been</h2>
      <div className="flex mb-12 flex-col lg:flex-row w-full">
        <Card
          title="Junior Frontend Developer"
          classes="lg:w-1/3 w-full mr-8"
          linkPath="/experience/development"
        >
          <h3 className="h5">Saicom</h3>
          <h4 className="mb-10">July 2020 - Present</h4>
        </Card>
        <Card
          title="Training Manager"
          classes="lg:w-1/3 w-full mr-8"
          linkPath="/experience/training"
        >
          <h3 className="h5">Saicom</h3>
          <h4 className="mb-10">Aug 2019 - June 2020</h4>
        </Card>
        <Card
          title="Network & VOIP Support Engineer"
          classes="lg:w-1/3 w-full mr-8"
          linkPath="/experience/support"
        >
          <h3 className="h5">Saicom</h3>
          <h4 className="mb-10">July 2018 - July 2019</h4>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
