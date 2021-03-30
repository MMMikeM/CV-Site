const About = ({ elementRef }) => {
  console.log(typeof elementRef);
  return (
    <div className="wrapper" ref={elementRef}>
      <h2 className="h2 mb-4">About me</h2>
      <p>
        I have always had a passion for technology, particularly when it comes
        to improving human interactions.
      </p>

      <p>
        I am a driven individual, my friends would describe me as high energy
        and full of jokes. In my free time, I enjoy keeping fit and playing
        soccer and trying to learn something new every day; ocassionally I spend
        some time practicing typing or questioning keyboard ergonomics.
      </p>
      <p>I started my journey in development at the beginning of 2019</p>
      <p>
        Prior to the social-distancing era, I enjoyed attending developer
        meetups. 2020 did open many doors to attend online conferences and
        teleconferenced courses.
      </p>
    </div>
  );
};

export default About;
