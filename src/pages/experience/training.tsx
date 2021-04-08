const Training = () => {
  return (
    <div className="flex flex-col justify-between">
      <h2 className="h2 mb-4">Training Manager</h2>
      <h4 className="h4 sm:mb-4 font-normal mono">
        Company: <span className="text-secondary-300">Saicom</span>
      </h4>
      <h4 className="h4 mb-4 font-normal mono">
        Period: <span className="text-secondary-300">Aug 2019 - June 2020</span>
      </h4>
      <h3 className="h3 text-primary-200">Key responsibilities</h3>
      <ul className="ml-8 list-disc">
        <li className="experience-item mt-4">
          Creating professional and consistent training content for products
        </li>
        <li className="experience-item">
          Interfacing between internal teams and product providers regarding
          queries and support
        </li>
        <li className="experience-item">
          Training customers on-site and via teleconference
        </li>
        <li className="experience-item">
          Assisting with change management during customer migrations
        </li>
        <li className="experience-item">Resolving customer escalations</li>
        <li className="experience-item">
          Interfacing with VIP customers to ensure requirements are met and
          standards are maintained
        </li>
        <li className="experience-item">
          Working with solutions architect to ensure customer requirements are
          met
        </li>
        <li className="experience-item">Internal training and testing</li>
      </ul>
    </div>
  );
};

export default Training;
