import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";

import {
  SiAntdesign,
  SiJavascript,
  SiMaterialui,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
const Skills = () => {
  return (
    <section className="dark:bg-green-black bg-wheat-400 py-16 px-8 laptop:px-32" id='skills'>
      <Title title={'Skills'}/>

      <div className="grid grid-cols-3 laptop:grid-cols-4 gap-16 font-bold text-center">
        <div className="flex flex-col items-center gap-2 cursor-pointer text-[#EE6430] transition-all duration-300 ">
          <AiFillHtml5 size={"40px"}/>
          <h3>HTML</h3>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer text-[#488BC2] transition-all duration-300">
          <DiCss3 size={"40px"} />
          <h3>CSS</h3>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer text-[#F3DD40] transition-all duration-300">
          <SiJavascript size={"40px"} />
          <h3>Javascript</h3>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer text-[#02D3FE] transition-all duration-300">
          <FaReact size={"40px"} />
          <h3>React</h3>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer text-[#06B5D4] transition-all duration-300">
          <SiTailwindcss size={"40px"} />
          <h3>Tailwind</h3>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer text-[#3D7FF7] transition-all duration-300">
          <SiMaterialui size={"40px"} />
          <h3>Material UI</h3>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer text-[#1695FC] transition-all duration-300">
          <SiAntdesign size={"40px"} />
          <h3>Ant Design</h3>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer text-[#67297F] transition-all duration-300">
          <AiFillGithub size={"40px"} />
          <h3>Git</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
