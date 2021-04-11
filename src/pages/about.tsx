const About = ({ elementRef }) => {
  return (
    <div className="wrapper" ref={elementRef}>
      <div className="flex -mr-12">
        <h2 className="h2 mb-8 mr-4">About me = </h2>
        <h3 className="font-light text-primary-300 -mt-1 ml-3">
          {"{"}
          education: "BSc Construction & Project Management",
          <h3 className="font-light text-primary-300"></h3>
          location:"Johannesburg"
          {"}"}
        </h3>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4">
          <p className="pb-2 text-sm md:text-base">
            I have always had a passion for technology, particularly when it
            comes to improving human interactions. Not much makes me as happy as
            optimising performance, whether between server and host or keyboard
            and chair. I'm highly fascinated by the entire front-end spectrum,
            from saving clicks for the user to shaving milliseconds off of
            requests.
          </p>
          <p className="pb-2 text-sm md:text-base">
            I am a driven individual, my friends would describe me as high
            energy and full of jokes. In my free time, I enjoy keeping fit,
            playing soccer and trying to learn something new every day;
            occasionally, I spend some time practising typing or questioning
            keyboard ergonomics.
          </p>
          <p className="pb-2 text-sm md:text-base">
            I started my journey in development at the beginning of 2019. Prior
            to the era of social-distancing, I enjoyed attending developer
            meetups. 2020 opened many doors where I had opportunities to attend
            online conferences and join live teleconferenced courses.
          </p>
        </div>
        <div className="h-80 md:h-auto w-full sm:w-1/2 lg:w-2/5 2xl:w-1/4 md:ml-10 mt-8 md:mt-0 mb-8 md:mb-0 flex-grow flex justify-center items-center">
          <img src="https://github.com/MMMikeM/cv-site/raw/main/photo.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
