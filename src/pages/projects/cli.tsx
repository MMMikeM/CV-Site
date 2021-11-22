const CLI = () => {
  return (
    <div className="flex flex-col justify-between">
      <h2 className="h2 mb-4">Contention Ratio CLI tool</h2>
      <h4 className="h4 mb-4 font-normal mono">
        Period: <span className="text-secondary-300 ml-2">February 2021</span>
      </h4>
      <h3 className="h3 text-primary-200">Achievements</h3>
      <ul className="ml-8 list-disc">
        <li className="experience-item mt-4">
          Built a CLI tool to automate calculation of contention ratios based on
          different interconnects
        </li>
        <li className="experience-item">Jest for test driven development</li>
        <li className="experience-item">
          Prevented core infrastructure team from doing calculation manually on
          a monthly basis
        </li>
        <li className="experience-item">Integrating with REST apis</li>
        <li className="experience-item">
          Built as a CLI took using pkg to deploy onto application server
        </li>
        <li className="experience-item">Error handling and debugging</li>
      </ul>
    </div>
  );
};

export default CLI;
