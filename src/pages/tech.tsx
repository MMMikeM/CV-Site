import {
  SiDocker,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMaterialUi,
  SiNodeDotJs,
  SiGnubash,
  SiPostgresql,
  SiJavascript,
  SiGit,
  SiJira,
  SiLinux,
  SiFigma,
  SiMongodb,
} from "react-icons/si";
import Card from "../components/card";

const Tech = ({ elementRef }) => {
  return (
    <div ref={elementRef} className="wrapper">
      <h2 className="h2 mb-8">Talking Tech</h2>
      <div className="flex w-full justify-around flex-col lg:flex-row ml-12 mb-8">
        <div className="lg:w-1/3 w-full">
          <h3 className="mb-6">Languages</h3>
          <div className="li">
            <SiJavascript className="mr-5 w-6 h-6" />
            <div>Javascript</div>
          </div>
          <div className="li">
            <SiPostgresql className="mr-5 w-6 h-6" />
            <div>SQL</div>
          </div>
          <div className="li">
            <SiGnubash className="mr-5 w-6 h-6" />
            <div>Bash</div>
          </div>
        </div>

        <div className="lg:w-1/3  w-full">
          <h4 className="mb-6">Frameworks</h4>
          <div className="li">
            <SiReact className="mr-5 w-6 h-6" />
            <div>React</div>
          </div>
          <div className="li">
            <SiTypescript className="mr-5 w-6 h-6" />
            <div>Typescript</div>
          </div>
          <div className="li">
            <SiTailwindcss className="mr-5 w-6 h-6" />
            <div>Tailwind CSS</div>
          </div>
          <div className="li">
            <SiMaterialUi className="mr-5 w-6 h-6" />
            <div>Material-UI</div>
          </div>
          <div className="li">
            <SiNodeDotJs className="mr-5 w-6 h-6" />
            <div>Node.js</div>
          </div>
        </div>
        <div className="lg:w-1/3  w-full ">
          <h4 className="mb-6">Tooling</h4>
          <div className="li">
            <SiDocker className="mr-5 h-6 w-6" />
            <div>Docker</div>
          </div>
          <div className="li">
            <SiGit className="mr-5 h-6 w-6" />
            <div>Git</div>
          </div>
          <div className="li">
            <SiMongodb className="mr-5 h-6 w-6" />
            <div>MongoDB</div>
          </div>
          <div className="li">
            <SiLinux className="mr-5 h-6 w-6" />
            <div>Linux</div>
          </div>
          <div className="li">
            <SiFigma className="mr-5 h-6 w-6" />
            <div>Figma</div>
          </div>
          <div className="li">
            <SiJira className="mr-5 h-6 w-6" />
            <div>Jira</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
