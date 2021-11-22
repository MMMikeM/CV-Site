const Development = () => {
  return (
    <div className="flex flex-col justify-between items-start">
      <h2 className="h2 mb-4 mt-4">Frontend Developer</h2>
      <h4 className="h4 sm:mb-1 font-normal">
        Company: <span className="text-secondary-300">Saicom</span>
      </h4>
      <h4 className="h4 mb-4 font-normal">
        Period:{" "}
        <span className="text-secondary-300">January 2020 to June 2021</span>
      </h4>
      <h3 className="h3 text-primary-200">Key responsibilities</h3>
      <ul className="ml-8 list-disc">
        <li className="experience-item mt-4">
          Building and maintaining Frontend component library
        </li>
        {/* <li className="experience-item">Setting up forms and validation</li> */}
        <li className="experience-item">
          Managing styling methodology and conventions
        </li>
        <li className="experience-item">
          Design & building of mockups and the presenting thereof to
          stakeholders
        </li>
        <li className="experience-item">
          Data visualisation, animations, SVG creation and optimisation
        </li>
        <li className="experience-item">Ensuring responsive behaviour</li>
        <li className="experience-item">
          Managing and configuring route and data fetching strategies
        </li>
        {/* 
        <li className="experience-item">Handling asynchronous calls</li>
        <li className="experience-item">Managing state in Redux</li>
        <li className="experience-item">Configuring connectors in Kafka</li>
        <li className="experience-item">
          Setting up tables in Postgres & KSQL
        </li> */}
        <li className="experience-item">
          Data visualisation, animations, SVG creation and optimisation
        </li>
        <li className="experience-item">Bug fixing and troubleshooting</li>
      </ul>
    </div>
  );
};

export default Development;
