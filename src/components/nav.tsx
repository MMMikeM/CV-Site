const Nav = ({ scroller }) => {
  return (
    <div className="shadow-lg z-10 fixed bottom-0 md:top-0 left-0 right-0 bg-gray-800 h-16 text-xs font-light text-secondary-200 overflow-x-scroll">
      <div className="responsive-container h-full flex justify-start items-center ">
        <button
          className="p-4 active:bg-secondary-500 active:text-white focus:outline-none"
          onClick={() => scroller(0)}
        >
          Home
        </button>
        <button
          className="p-4 active:bg-secondary-500 active:text-white focus:outline-none"
          onClick={() => scroller(1)}
        >
          About
        </button>
        <button
          className="p-4 active:bg-secondary-500 active:text-white focus:outline-none"
          onClick={() => scroller(2)}
        >
          Tech
        </button>
        <button
          className="p-4 active:bg-secondary-500 active:text-white focus:outline-none"
          onClick={() => scroller(3)}
        >
          Experience
        </button>
        <button
          className="p-4 active:bg-secondary-500 active:text-white focus:outline-none"
          onClick={() => scroller(4)}
        >
          Projects
        </button>
        <button
          className="p-4 active:bg-secondary-500 active:text-white focus:outline-none"
          onClick={() => scroller(5)}
        >
          This page
        </button>
      </div>
    </div>
  );
};

export default Nav;
