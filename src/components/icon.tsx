const Icon = ({
  name,
  pretty,
  iconList,
  svgClass,
  width,
  height,
}: {
  name: string;
  pretty?: string;
  iconList: any;
  svgClass?: string;
  width?: string;
  height?: string;
}) => {
  const icon = iconList?.find((item) => item.title === name);
  return (
    <div className={"li text-primary-100 fill-current " + svgClass || ""}>
      <svg
        version="1.2"
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width || "24px"}
        height={height || "24px"}
      >
        <path d={icon?.path || ""} />
      </svg>
      <div className="ml-4 text-gray-200">{pretty ?? icon.title.substr(2)}</div>
    </div>
  );
};

export default Icon;
