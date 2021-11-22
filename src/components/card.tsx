import { ComponentChildren } from "preact";

type ChildrenProps = {
  children: ComponentChildren;
  title?: string;
  subtitle?: string;
  classes?: string;
  overrideClasses?: string;
  image?: { url: string };
  onClick?: any;
};

const Card = ({
  children,
  classes,
  overrideClasses,
  title,
  image,
  onClick,
  subtitle,
}: ChildrenProps) => {
  return (
    <div
      className={
        overrideClasses ||
        "bg-gray-850 shadow-md rounded-sm pt-4 pb-8 px-10 " + classes
      }
    >
      {/* I prefer the !!value && syntax for conditional rendering, this ensures
      the value is interpreted as a boolean */}
      {!!image && <img src={image.url} />}
      <div className="mb-4 h-auto lg:h-16">
        {!!title && <h3 className="h3 ">{title}</h3>}
        {!!subtitle && <h4 className="h6 text-gray-400 -mt-1 ">{subtitle}</h4>}
      </div>
      {children}
      {!!onClick && (
        <div className="flex justify-start ">
          <button
            className="px-8 py-2 bg-secondary-600 hover:bg-secondary-500 active:bg-secondary-600 text-white rounded-sm"
            onClick={() => onClick()}
          >
            More info
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
