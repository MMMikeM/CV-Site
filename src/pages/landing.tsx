import { useEffect, useState } from "preact/hooks";

const Landing = () => {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    import("../fonts/font");
    setClasses(" landing");
  }, []);
  return (
    <div
      className={
        "opacity-100 bg-black fixed h-screen w-screen top-0 left-0 flex flex-col justify-center items-center z-30" +
        classes
      }
    >
      <div className="w-2/5 md:w-1/4 md:h-1/4 flex justify-center items-center">
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
  );
};

export default Landing;
