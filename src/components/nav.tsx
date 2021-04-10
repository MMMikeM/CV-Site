const Nav = ({ scroller }) => {
  return (
    <div className="shadow-lg z-10 fixed bottom-0 md:top-0 left-0 right-0 bg-gray-800 h-16 text-xs font-light text-secondary-200 overflow-x-scroll sm:overflow-x-hidden">
      <div className="responsive-container h-full flex justify-around sm:justify-start items-center ">
        <button className="nav-item" onClick={() => scroller(0)}>
          Home
        </button>
        <button className="nav-item" onClick={() => scroller(1)}>
          About
        </button>
        <button className="nav-item" onClick={() => scroller(2)}>
          Tech
        </button>
        <button className="nav-item" onClick={() => scroller(3)}>
          Experience
        </button>
        <button className="nav-item" onClick={() => scroller(4)}>
          Projects
        </button>
      </div>
    </div>
  );
};

export default Nav;
