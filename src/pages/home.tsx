const About = ({ elementRef }) => {
  return (
    <div className="wrapper mt-0 flex flex-row" ref={elementRef}>
      <div className="my-auto max-w-[880px] mr-auto xl:pl-12">
        <h2 className="text-lg xl:text-4xl text-gray-400">Hi there</h2>
        <div className="flex flex-wrap">
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-semibold">
            I'm{" "}
            <span className="text-secondary-400 font-bold mono glow">Mike</span>
          </h1>
          <h2 className="pl-2 text-3xl xl:text-6xl font-semibold pt-1.5">
            {" ("}
          </h2>
          <h2 className=" text-gray-400 text-xl xl:text-5xl font-light pt-2.5 xl:pt-3 mono tracking-tighter">
            caffeine
          </h2>
          <h2 className="text-3xl xl:text-6xl font-semibold  pt-1.5">)</h2>
          <h2 className="text-md xl:text-3xl pt-1.5 xl:pt-5 font-semibold pl-2 leading-9">
            {" => {"}
          </h2>
        </div>
        <h2 className=" xl:text-3xl text-gray-400 font-light tracking-tighter mono">
          return <span className=" text-white font-medium">(</span>
        </h2>

        <h2 className="pb-2 text-3xl md:text-5xl xl:text-6xl gradient-text bg-gradient-to-br from-blue-100 to-primary-300">
          <div>
            <span className="">Frontend developer</span>
            <span className="text-gray-400 text-lg xl:text-xl pl-2 mono">
              {" "}
              &&{" "}
            </span>
          </div>
          <span className="">Interface designer</span>
        </h2>
        <h2 className="-mt-1.5 text-white pl-4 xl:text-3xl mono font-medium">
          )
        </h2>
        <h2 className=" text-white xl:text-3xl">{"}"}</h2>
      </div>
    </div>
  );
};

export default About;
