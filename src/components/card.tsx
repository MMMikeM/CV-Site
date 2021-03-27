import { ComponentChildren } from "preact";

type ChildrenProps = {
  children: ComponentChildren;
  title?: string;
  image?: { url: string };
  buttonList?: [{ clickFunction: void; text: string }];
};

const Card = ({ children, title, image, buttonList }: ChildrenProps) => {
  return (
    <div className="bg-gray-100 rounded-md m-1 p-4">
      {image ? <img src={image.url} /> : ""}
      {title ? <h2>{title}</h2> : ""}
      {children}
      {buttonList
        ? buttonList.map((button) => (
            <button onClick={() => button.clickFunction}>{button.text}</button>
          ))
        : ""}
    </div>
  );
};

export default Card;
