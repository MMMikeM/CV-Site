const Nav = ({ scroller }) => {
  return (
    <div className="shadow-lg bg-gray-800 text-xs font-light text-secondary-200 fixed sm:static bottom-0 inset-x-0 z-10">
      <div className="responsive-container h-16 flex justify-around sm:justify-start items-center ">
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
