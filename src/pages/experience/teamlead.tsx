const Teamlead = () => {
  return (
    <div className="flex flex-col justify-between items-start">
      <h2 className="h2 mb-4 mt-4">Frontend Team Lead</h2>
      <h4 className="h4 sm:mb-1 font-normal">
        Company: <span className="text-secondary-300">Raging River</span>
      </h4>
      <h4 className="h4 mb-4 font-normal">
        Period: <span className="text-secondary-300">June 2021 to Present</span>
      </h4>
      <h3 className="h3 text-primary-200">Key responsibilities</h3>
      <ul className="ml-8 list-disc">
        <li className="experience-item mt-4">
          Worked in Nuxt, VueX and Vuetify
        </li>
        <li className="experience-item">
          Responsible for frontend project, approving PRs from my own team and
          any other teams working on the front end
        </li>
        <li className="experience-item">
          Responsible for interviewing and hiring Frontend Developers
        </li>
        <li className="experience-item">
          Mentored junior members and assisted in guiding effective technical
          growth
        </li>
        <li className="experience-item">
          Managed coding standards and conventions as well as styling standards
          and conventions
        </li>
        <li className="experience-item">
          Translated stakeholder requirements into tasks and delegated these to
          my team members and other teams
        </li>
        <li className="experience-item">
          Ensured responsive behaviour and browser backwards compatibility
        </li>
        <li className="experience-item">
          Managed team members and facilitated growth and improvements in code
          quality
        </li>
        <li className="experience-item">
          Reduced app bundle size by 50% (1800KB to 900KB) and improved
          lighthouse score from 40 to 81
        </li>
      </ul>
    </div>
  );
};

export default Teamlead;
