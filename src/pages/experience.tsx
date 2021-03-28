import Card from "../components/card";

const Experience = () => {
  return (
    <>
      <h2>Places I've been</h2>
      <div className="flex mb-12">
        <Card
          title="Junior Frontend Developer"
          classes="w-1/3"
          linkPath="/experience/development"
        >
          <h5>Saicom</h5>
          <h6 className="mb-10">July 2020 - Present</h6>
        </Card>
        <Card
          title="Training Manager"
          classes="w-1/3"
          linkPath="/experience/training"
        >
          <h5>Saicom</h5>
          <h6 className="mb-10">Aug 2019 - June 2020</h6>
        </Card>
        <Card
          title="Network & VOIP Support Engineer"
          classes="w-1/3"
          linkPath="/experience/support"
        >
          <h5>Saicom</h5>
          <h6 className="mb-10">July 2018 - July 2019</h6>
        </Card>
      </div>
    </>
  );
};

export default Experience;
