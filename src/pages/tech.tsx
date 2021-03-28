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
} from "react-icons/si";
import Card from "../components/card";

const Tech = () => {
  return (
    <div className="mb-12 flex justify-center">
      <Card classes="w-3/4">
        <h2 className="mb-4">Talking Tech</h2>
        <div className="flex justify-between">
          <ul className="w-1/3">
            <h4 className="mb-6">Languages</h4>
            <div className="flex items-center justify-start mb-4">
              <SiJavascript className="mr-5 w-6 h-6" />
              <li>Javascript</li>
            </div>
            <div className="flex items-center justify-start mb-4">
              <SiPostgresql className="mr-5 w-6 h-6" />
              <li>SQL</li>
            </div>
            <div className="flex items-center justify-start mb-4">
              <SiGnubash className="mr-5 w-6 h-6" />
              <li>Bash</li>
            </div>
          </ul>

          <ul className="w-1/3 ">
            <h4 className="mb-6">Frameworks</h4>
            <div className="flex items-center justify-start mb-4">
              <SiReact className="mr-5 w-6 h-6" />
              <li>React</li>
            </div>
            <div className="flex items-center justify-start mb-4">
              <SiTypescript className="mr-5 w-6 h-6" />
              <li>Typescript</li>
            </div>
            <div className="flex items-center justify-start mb-4">
              <SiTailwindcss className="mr-5 w-6 h-6" />
              <li>Tailwind CSS</li>
            </div>
            <div className="flex items-center justify-start mb-4">
              <SiMaterialUi className="mr-5 w-6 h-6" />
              <li>Material-UI</li>
            </div>
            <div className="flex items-center justify-start mb-4">
              <SiNodeDotJs className="mr-5 w-6 h-6" />
              <li>Node.js</li>
            </div>
          </ul>
          <ul className="w-1/3 -mr-8">
            <h4 className="mb-6">Tooling</h4>
            <li>
              <div className="flex items-center justify-start mb-4">
                <SiDocker className="mr-5 h-6 w-6" />
                <li>Docker</li>
              </div>
              <div className="flex items-center justify-start mb-4">
                <SiGit className="mr-5 h-6 w-6" />
                <li>Git</li>
              </div>
              <div className="flex items-center justify-start mb-4">
                <SiLinux className="mr-5 h-6 w-6" />
                <li>Linux</li>
              </div>
              <div className="flex items-center justify-start mb-4">
                <SiFigma className="mr-5 h-6 w-6" />
                <li>Figma</li>
              </div>
              <div className="flex items-center justify-start mb-4">
                <SiJira className="mr-5 h-6 w-6" />
                <li>Jira</li>
              </div>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Tech;
