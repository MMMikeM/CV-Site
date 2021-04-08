const CCW = () => {
  return (
    <div className="flex flex-col justify-between">
      <h2 className="h2 mb-4">Carbon Car Wash</h2>
      <h4 className="h4 mb-4 font-normal mono">
        Period:{" "}
        <span className="text-secondary-300">
          June 2020 - Present (maintenance and feature adds)
        </span>
      </h4>
      <h3 className="h3 text-primary-200">Achievements</h3>
      <ul className="ml-8 list-disc">
        <li className="experience-item mt-4">
          Built interface based on documentation from UX/UI designer
        </li>
        <li className="experience-item">
          Loyalty program built in react, receiving 10 000 hits per month
        </li>
        <li className="experience-item">500+ active users per month</li>
        <li className="experience-item">Integrating with REST apis</li>
        <li className="experience-item">
          Use of bootstrap and SCSS for bundle size optimisation
        </li>
        <li className="experience-item">Error handling and debugging</li>
        <li className="experience-item">
          Reusable components and responsive design
        </li>
        <li className="experience-item">
          Github Actions build pipeline & docker images hosted on AWS
        </li>
      </ul>
    </div>
  );
};

export default CCW;
