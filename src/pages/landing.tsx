const Landing = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-start items-center">
      <div className="h-1/3 w-full"></div>
      <div className="w-64 bg-black h-full">
        <div className="w-full flex justify-center items-center h-60 mt-8">
          <svg
            version="1.2"
            baseProfile="tiny"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              fill="#FFF"
              d="M119 156L313 45c7-4 15-4 22 0l194 111c7 4 11 12 11 20v223c0 8-4 16-11 20L335 531c-7 4-15 4-22 0L119 419c-7-4-11-12-11-20V176c0-8 4-16 11-20z"
            />
            <polygon points="145,390 205,425 205.00,220 145.00,185 " />
            <polygon points="145,185 145,255 325.25,355 325.5,285   " />
            <polygon points="500,185 500,255 324.75,355 324.5,285 " />
            <polygon points="500,390 442,425 442.00,220 500.00,185 " />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Landing;
