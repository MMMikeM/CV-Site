const Development = () => {
  return (
    <div className="flex flex-col justify-between items-start">
      <h2 className="h2 mb-4 mt-4">Junior Frontend Developer</h2>
      <h4 className="h4 sm:mb-1 font-normal">
        Company: <span className="text-secondary-300">Saicom</span>
      </h4>
      <h4 className="h4 mb-4 font-normal">
        Period: <span className="text-secondary-300">July 2020 to present</span>
      </h4>
      <h3 className="h3 text-primary-200">Key responsibilities</h3>
      <ul className="ml-8 list-disc">
        <li className="experience-item">
          Building, maintaining frontend components and selecting and
          implementing relevant libraries
        </li>
        <li className="experience-item">Setting up forms and validation</li>
        <li className="experience-item">
          Managing styling methodology and conventions
        </li>
        <li className="experience-item">
          Design & building of mockups, and the presenting thereof to
          stakeholders
        </li>
        <li className="experience-item">Ensuring responsive behavior</li>
        <li className="experience-item">
          Managing and configuring routes, navigation and location state
        </li>
        <li className="experience-item">Handling asynchronous calls</li>
        <li className="experience-item">Managing state in Redux</li>
        <li className="experience-item">Configuring connectors in Kafka</li>
        <li className="experience-item">
          Setting up tables in Postgres & KSQL
        </li>
        <li className="experience-item">
          Data visualisation, animations, SVG creation and optimisation
        </li>
        <li className="mb-0.5 xxl:mb-1 pl-3 text-sm xxl:text-base font-light">
          Bug fixing and troubleshooting
        </li>
      </ul>
    </div>
  );
};

export default Development;
