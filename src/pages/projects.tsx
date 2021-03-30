import Card from "../components/card";

const Projects = ({ elementRef }) => {
  return (
    <div ref={elementRef} className="wrapper">
      <h2 className="h2 mb-8">Things I have done</h2>
      <div className="flex mb-12">
        <Card title="Carbon Carwash">Yo</Card>
        <Card title="Contention Ratio CLI tool">Yo</Card>
      </div>
    </div>
  );
};

export default Projects;
