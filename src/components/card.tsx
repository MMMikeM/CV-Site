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
        "dark:bg-gray-800 bg-gray-800 shadow-sm rounded-sm my-3 lg:mx-3 pt-4 pb-8 px-8 " +
        classes
      }
    >
      {image ? <img src={image.url} /> : ""}
      {title ? <h3 className="h4 mb-4 h-auto lg:h-16">{title}</h3> : ""}
      {children}
      {onClick ? (
        <div className="flex justify-start ">
          <button
            className="px-8 py-2 border-2 border-solid border-secondary-800 rounded-sm"
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
