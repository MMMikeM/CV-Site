import { ComponentChildren } from "preact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

type ChildrenProps = {
  children: ComponentChildren;
  title?: string;
  classes?: string;
  image?: { url: string };
  linkPath?: string;
};

const Card = ({ children, classes, title, image, linkPath }: ChildrenProps) => {
  return (
    <div
      className={
        "dark:bg-tg-800  bg-tg-300 shadow-sm rounded-sm my-3 lg:mx-3 pt-4 pb-8 px-8 " +
        classes
      }
    >
      {image ? <img src={image.url} /> : ""}
      {title ? (
        <h3 className="h4 mb-4 h-auto lg:h-24 xl:h-auto">{title}</h3>
      ) : (
        ""
      )}
      {children}
      {linkPath ? (
        <div className="flex justify-start">
          <Link
            className="px-8 py-2 border-2 border-solid border-secondary-800 rounded-sm"
            to={linkPath}
          >
            More info
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
