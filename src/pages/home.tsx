const About = ({ elementRef }) => {
  console.log(typeof elementRef);
  return (
    <div className="wrapper mt-0" ref={elementRef}>
      <div className="lg:w-1/2 my-36">
        <h2 className="text-lg text-gray-400">Hi there</h2>
        <div className="flex">
          <h1 className="text-4xl font-semibold">
            I'm{" "}
            <span className="text-secondary-400 font-bold mono glow">Mike</span>
          </h1>
          <h2 className="pl-2 text-3xl font-semibold">{" ("}</h2>
          <h2 className=" text-gray-400 font-light text-xl leading-9 mono tracking-tighter">
            caffeine
          </h2>
          <h2 className="text-3xl font-semibold">)</h2>
          <h2 className="font-semibold pl-2 leading-9">{" => {"}</h2>
        </div>
        <h2 className=" text-gray-400 font-light tracking-tighter mono">
          return <span className="font-semibold text-white">(</span>
        </h2>

        <h2 className="pb-2 text-5xl gradient-text bg-gradient-to-br from-blue-100 to-primary-300">
          <span className="">Frontend developer</span>
          <span className="text-gray-400 text-lg pl-2"> && </span>
          <span className="">Interface designer</span>
        </h2>
        <h2 className="-mt-1.5 text-white pl-4">)</h2>
        <h2 className=" text-white">{"}"}</h2>
      </div>
    </div>
  );
};

export default About;
