const Nav = ({ scroller }) => {
  return (
    <div className="shadow-lg z-10 flex px-12 sm:px-20 md:px-24 lg:px-52  fixed bottom-0 md:top-0 left-0 right-0 bg-gray-800 h-10 text-xs font-light text-secondary-200">
      <button className="px-4 focus:outline-none" onClick={() => scroller(0)}>
        Home
      </button>
      <button className="px-4 focus:outline-none" onClick={() => scroller(1)}>
        About
      </button>
      <button className="px-4 focus:outline-none" onClick={() => scroller(2)}>
        Tech
      </button>
      <button className="px-4 focus:outline-none" onClick={() => scroller(3)}>
        Experience
      </button>
      <button className="px-4 focus:outline-none" onClick={() => scroller(4)}>
        Projects
      </button>
      <button className="px-4 focus:outline-none" onClick={() => scroller(5)}>
        This page
      </button>
    </div>
  );
};

export default Nav;
