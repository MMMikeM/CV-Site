import Development from "./experience/development";
import Training from "./experience/training";
import Support from "./experience/support";
import CCW from "./projects/ccw";
import CLI from "./projects/cli";

const AsidePage = ({ setActiveView, activeView }) => {
  const page = () => {
    switch (activeView.aside) {
      case "development":
        return <Development />;
      case "training":
        return <Training />;
      case "support":
        return <Support />;
      case "ccw":
        return <CCW />;
      case "cli":
        return <CLI />;
      default:
        return "";
    }
  };

  return (
    <div className="wrapper mt-0">
      {page()}
      <button
        className="bg-secondary-600 hover:bg-secondary-500 active:bg-secondary-600 text-white h-12 w-48 mt-12  rounded-sm"
        onClick={() => {
          setActiveView({ ...activeView, view: "main" });
        }}
      >
        Return
      </button>
    </div>
  );
};

export default AsidePage;
