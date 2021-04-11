import { ComponentChildren } from "preact";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

type ChildrenProps = {
  children: ComponentChildren;
  title?: string;
  classes?: string;
  image?: { url: string };
  onClick?: any;
};

const Card = ({ children, classes, title, image, onClick }: ChildrenProps) => {
  return (
    <div
      className={
        "dark:bg-gray-800 bg-gray-800 shadow-sm rounded-sm pt-4 pb-8 px-8 " +
        classes
      }
    >
      {image ? <img src={image.url} /> : ""}
      {title ? <h3 className="h3 mb-4 h-auto lg:h-16">{title}</h3> : ""}
      {children}
      {onClick ? (
        <div className="flex justify-start ">
          <button
            className="px-8 py-2 bg-secondary-600 hover:bg-secondary-500 active:bg-secondary-600 text-white rounded-sm"
            onClick={() => onClick()}
          >
            More info
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
