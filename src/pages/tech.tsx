import iconList from "../svg/icons";

const Tech = ({ elementRef }) => {
  const Icon = ({ name, pretty }: { name: string; pretty?: string }) => {
    const icon = iconList?.filter((item) => item.title === name)[0];
    return (
      <div className="li text-white fill-current">
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
        <div className="pl-2">{pretty || icon.title.substr(2)}</div>
      </div>
    );
  };

  return (
    <div ref={elementRef} className="wrapper">
      <h2 className="h2">Talking Tech</h2>
      <div className="flex w-full justify-around flex-col lg:flex-row ml-12 mb-8">
        <div className="lg:w-1/3 w-full mb-12">
          <h3 className="mb-6">Languages</h3>
          <Icon name={"SiJavascript"} />
          <Icon name={"SiPostgresql"} pretty={"SQL"} />
          <Icon name={"SiGnubash"} pretty={"Bash"} />
        </div>
        <div className="lg:w-1/3 w-full  mb-12">
          <h4 className="mb-6">Frameworks</h4>
          <Icon name={"SiReact"} />
          <Icon name={"SiTypescript"} />
          <Icon name={"SiTailwindcss"} />
          <Icon name={"SiMaterialUi"} />
          <Icon name={"SiNodeDotJs"} pretty={"Node.JS"} />
        </div>
        <div className="lg:w-1/3 w-full mb-12">
          <h4 className="mb-6">Tooling</h4>
          <Icon name={"SiDocker"} />
          <Icon name={"SiGit"} />
          <Icon name={"SiMongodb"} />
          <Icon name={"SiLinux"} />
          <Icon name={"SiFigma"} />
          <Icon name={"SiJira"} />
        </div>
      </div>
    </div>
  );
};

export default Tech;
