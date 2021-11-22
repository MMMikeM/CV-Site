import Icon from "../components/icon";

const Tech = ({ elementRef, iconList }) => {
  return (
    <div ref={elementRef} className="wrapper">
      {/* It would have been way better to have mapped these, but I guess some technical debt is unavoidable! */}
      {!!iconList.length && (
        <>
          <h2 className="h2">Talking Tech</h2>
          <div className="flex w-full justify-around flex-col lg:flex-row ml-8 md:ml-12 mb-8">
            <div className="lg:w-1/3 w-full mb-12 flex flex-col gap-5 ml-4">
              <h3 className="mb-4 h3 text-secondary-300 -ml-4">Languages</h3>
              <Icon iconList={iconList} name={"SiJavascript"} />
              <Icon iconList={iconList} name={"SiPostgresql"} pretty={"SQL"} />
              <Icon iconList={iconList} name={"SiGnubash"} pretty={"Bash"} />
            </div>
            <div className="lg:w-1/3 w-full mb-12 flex flex-col gap-5 ml-4">
              <h4 className="mb-4 h3 text-secondary-300 -ml-4">Frameworks</h4>
              <Icon iconList={iconList} name={"SiTypescript"} />
              <Icon iconList={iconList} name={"SiReact"} />
              <Icon
                iconList={iconList}
                name={"SiNextdotjs"}
                pretty={"Next.js"}
              />
              <Icon iconList={iconList} name={"SiRedux"} />
              <Icon iconList={iconList} name={"SiVuedotjs"} pretty={"Vue.js"} />
              <Icon
                iconList={iconList}
                name={"SiNuxtdotjs"}
                pretty={"Nuxt.js"}
              />
              <Icon
                iconList={iconList}
                name={"SiNodeDotJs"}
                pretty={"Node.js (yea, it's a runtime environent)"}
              />
              <Icon iconList={iconList} name={"SiExpress"} />
            </div>
            <div className="lg:w-1/3 w-full mb-12 flex flex-col gap-5 ml-4">
              <h4 className="mb-4 h3 text-secondary-300 -ml-4">Styling</h4>

              <Icon iconList={iconList} name={"SiVuetify"} />

              <Icon
                iconList={iconList}
                name={"SiTailwindcss"}
                pretty={"Tailwind CSS"}
              />
              <Icon iconList={iconList} name={"SiMaterialUi"} />
              <Icon iconList={iconList} name={"SiBootstrap"} />
              <Icon iconList={iconList} name={"SiChakraUi"} />
              <Icon iconList={iconList} name={"SiSass"} />
            </div>
            <div className="lg:w-1/3 w-full mb-12 flex flex-col gap-5 ml-4">
              <h4 className="mb-4 h3 text-secondary-300 -ml-4">Tooling</h4>
              <Icon iconList={iconList} name={"SiDocker"} />
              <Icon iconList={iconList} name={"SiGit"} />
              <Icon iconList={iconList} name={"SiMongodb"} />
              <Icon iconList={iconList} name={"SiLinux"} />
              <Icon iconList={iconList} name={"SiFigma"} />
              <Icon iconList={iconList} name={"SiJira"} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Tech;
