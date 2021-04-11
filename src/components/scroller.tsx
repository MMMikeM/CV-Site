const Scroller = ({ activeView, navigateClass, scroller, onScreenItems }) => {
  // const downScroll = (dir, input) => {
  //   console.log(input);

  //   if (input[0] && !input[2]) {
  //     scroller(1);
  //   } else if (input[1] && input[2] && !input[3]) {
  //     scroller(2);
  //   } else if (input[2] && input[3] && !input[4]) {
  //     scroller(3);
  //   } else if (input[2] && input[3] && input[4] && !input[5]) {
  //     scroller(4);
  //   } else if ((!input[2] || input[5]) && input[4]) {
  //     scroller(5);
  //   }
  // };

  const scroll = (input, dir) => {
    let index = dir === "up" ? 0 : 2;
    if (input[0] && !input[2]) {
      dir === "up" ? scroller(0) : scroller(1);
      // scroller(-1 + index);
    } else if (input[1] && (input[0] || (!input[0] && !input[2]))) {
      scroller(0 + index);
    } else if (
      input[2] &&
      ((!input[0] && input[1]) || (!input[1] && !input[3]))
    ) {
      scroller(1 + index);
    } else if (
      input[3] &&
      ((!input[1] && input[2]) || (!input[2] && !input[4]))
    ) {
      scroller(2 + index);
    } else if (
      input[4] &&
      ((!input[2] && input[3]) || (!input[3] && !input[5]))
    ) {
      scroller(3 + index);
    } else if (input[5]) {
      dir === "up" ? scroller(4) : scroller(5);
    }
  };

  return (
    <div
      className={
        "main flex justify-start items-end text-white font-bold z-20 fixed right-10 bottom-20 invisible lg:visible" +
        (activeView.view !== "main" ? " translate-x-96 " : "") +
        (activeView.view === "main" ? "" : " main-hidden")
      }
    >
      <h2
        className={
          "mr-4 h3 font-normal text-secondary-400 csstimer" + navigateClass
        }
      >
        Navigate here
      </h2>
      <div>
        <div className="h-12 w-12 mb-2">
          <button
            className="bg-white bg-opacity-20 hover:bg-opacity-40 h-full w-full focus:outline-none transform active:scale-110 rotate-180 "
            onClick={() => scroll(onScreenItems, "up")}
          >
            V
          </button>
        </div>
        <div className="h-12 w-12">
          <button
            className="bg-white bg-opacity-20 hover:bg-opacity-40  h-full w-full focus:outline-none transform active:scale-110 "
            onClick={() => scroll(onScreenItems, "down")}
          >
            V
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
