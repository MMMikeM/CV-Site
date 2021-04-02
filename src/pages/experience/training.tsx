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
        <li className="mb-0.5 sm:mb-1 pl-3 text-sm sm:text-base font-light mt-4">
          Creating professional and consistent training content for products
        </li>
        <li className="mb-0.5 sm:mb-1 pl-3 text-sm sm:text-base font-light">
          Interfacing between internal teams and product providers regarding
          queries and support
        </li>
        <li className="mb-0.5 sm:mb-1 pl-3 text-sm sm:text-base font-light">
          Training customers on-site and via teleconference
        </li>
        <li className="mb-0.5 sm:mb-1 pl-3 text-sm sm:text-base font-light">
          Assisting with change management during customer migrations
        </li>
        <li className="mb-0.5 sm:mb-1 pl-3 text-sm sm:text-base font-light">
          Resolving customer escalations
        </li>
        <li className="mb-0.5 sm:mb-1 pl-3 text-sm sm:text-base font-light">
          Interfacing with VIP customers to ensure requirements are met and
          standards are maintained
        </li>
        <li className="mb-0.5 sm:mb-1 pl-3 text-sm sm:text-base font-light">
          Working with solutions architect to ensure customer requirements are
          met
        </li>
        <li className="mb-0.5 sm:mb-1 pl-3 text-sm sm:text-base font-light">
          Internal training and testing
        </li>
      </ul>
    </div>
  );
};

export default Training;
