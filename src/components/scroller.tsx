const Scroller = ({ activeView, navigateClass, scroller, onScreenItems }) => {
  const downScroll = (input) => {
    console.log(input);
    if (input[0] && !input[2]) {
      scroller(1);
    } else if (input[1] && input[2] && !input[3]) {
      console.log("wat");
      scroller(2);
    } else if (input[2] && input[3] && !input[4]) {
      scroller(3);
    } else if (input[3] && input[4] && !input[5]) {
      scroller(4);
    } else if (input[4] && input[5]) {
      scroller(5);
    }
  };

  const upScroll = (input) => {
    console.log(input);
    if (input[0]) {
      scroller(0);
    } else if (
      input[2] &&
      ((!input[0] && input[1]) || (!input[1] && !input[3]))
    ) {
      scroller(1);
    } else if (
      input[3] &&
      ((!input[1] && input[2]) || (!input[2] && !input[4]))
    ) {
      scroller(2);
    } else if (
      input[4] &&
      ((!input[2] && input[3]) || (!input[3] && !input[5]))
    ) {
      scroller(3);
    } else if (input[5]) {
      scroller(4);
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
            onClick={() => upScroll(onScreenItems)}
          >
            V
          </button>
        </div>
        <div className="h-12 w-12">
          <button
            className="bg-white bg-opacity-20 hover:bg-opacity-40  h-full w-full focus:outline-none transform active:scale-110 "
            onClick={() => downScroll(onScreenItems)}
          >
            V
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
