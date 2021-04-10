const Icon = ({
  name,
  pretty,
  iconList,
}: {
  name: string;
  pretty?: string;
  iconList: any;
}) => {
  const icon = iconList?.filter((item) => item.title === name)[0];
  return (
    <div className="li text-primary-100 fill-current">
      <svg
        version="1.2"
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d={icon?.path || ""} />
      </svg>
      <div className="ml-4 text-gray-200">{pretty ?? icon.title.substr(2)}</div>
    </div>
  );
};

export default Icon;
