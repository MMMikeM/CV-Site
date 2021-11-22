const Movies = () => {
  // Please excuse how barren the info is here, I am in the process of updating this.
  return (
    <div className="flex flex-col justify-between">
      <h2 className="h2 mb-4">MMMovies</h2>
      <h4 className="h4 mb-4 font-normal mono">
        Period: <span className="text-secondary-300 ml-2">May 2021</span>
      </h4>
      <h3 className="h3 text-primary-200">Achievements</h3>
      <ul className="ml-8 list-disc">
        <li className="experience-item mt-4">
          An Express based MVC webapp to manange movies to be watched
        </li>
      </ul>
    </div>
  );
};

export default Movies;
