const Calendar = () => {
  return (
    <div className="flex flex-col justify-between">
      <h2 className="h2 mb-4">Tailwind Datepicker</h2>
      <h4 className="h4 mb-4 font-normal mono">
        Period:
        <span className="text-secondary-300">April 2021</span>
      </h4>
      <h3 className="h3 text-primary-200">Achievements</h3>
      <ul className="ml-8 list-disc">
        <li className="experience-item mt-4">
          Assisted a junior developer with building a date picker component that
          can be used with Tailwind Css
        </li>
        <li className="experience-item">
          Made use of a headless calendar hook, useLilius to expedite the
          process
        </li>
        <li className="experience-item">
          Component is being used in an opensource project
        </li>
      </ul>
      <img
        className="w-full md:w-1/3 mt-8"
        src="https://raw.githubusercontent.com/MMMikeM/useLilius-tailwindcss-calendar/main/src.gif"
        alt="Cool date picker gif"
      />
    </div>
  );
};

export default Calendar;
