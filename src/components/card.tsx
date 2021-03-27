import { ComponentChildren } from "preact";

type ChildrenProps = {
  children: ComponentChildren;
  title?: string;
  image?: { url: string };
  buttons?: [{ onClick: void; text: string }];
};

const Card = ({ children, title, image, buttons }: ChildrenProps) => {
  return (
    <div className="bg-gray-100 rounded-md m-1 p-4">
      {image ? <img src={image.url} /> : ""}
      {title ? <h2>{title}</h2> : ""}
      {children}
      {buttons
        ? buttons.map((button: { onClick: void; text: string }) => (
            <button onClick={button.onClick}>{button.text}</button>
          ))
        : ""}
    </div>
  );
};

export default Card;
