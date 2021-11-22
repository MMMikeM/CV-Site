const Scraper = () => {
  return (
    <div className="flex flex-col justify-between">
      <h2 className="h2 mb-4">Web Scraper</h2>
      <h4 className="h4 mb-4 font-normal mono">
        Period:
        <span className="text-secondary-300 ml-2">June 2020</span>
      </h4>
      <h3 className="h3 text-primary-200">Achievements</h3>
      <ul className="ml-8 list-disc">
        <li className="experience-item mt-4">
          Used code to solve a real world problem I faced - 100 in-stock units
          which sold out in ~90 seconds and accumulated 5000 pre-orders in 24h
        </li>
        <li className="experience-item">
          Scraped a website to check for stock using Cron Jobs in WSL
        </li>
        <li className="experience-item">
          Integrated with Pushbullet API to send notifications to all personal
          devices
        </li>
      </ul>
    </div>
  );
};

export default Scraper;
