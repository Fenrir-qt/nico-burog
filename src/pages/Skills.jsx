import Header from "../components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { useDarkMode } from "../context/DarkModeContext";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiGitBranch, FiCpu } from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiArduino,
  SiPython
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

function Skills() {
  const { isDarkMode } = useDarkMode();

  const skillCategories = [
    {
      name: "Frontend",
      icon: <FiCode className="mr-2" />,
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-[#e34c26] mr-3" /> },
        { name: "CSS", icon: <SiCss3 className="text-[#264de4] mr-3" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E] mr-3" />,
        },
        { name: "React", icon: <SiReact className="text-[#61DAFB] mr-3" /> },
        {
          name: "Tailwindcss",
          icon: <SiTailwindcss className="text-[#61DAFB] mr-3" />,
        },
      ],
    },
    {
      name: "Backend",
      icon: <FiServer className="mr-2" />,
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-[#68A063] mr-3" />,
        },
        {
          name: "ExpressJS",
          icon: <SiExpress className="text-[#68A063] mr-3" />,
        },
        {
          name: "Laravel",
          icon: <SiLaravel className="text-[#f05340] mr-3" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-[#F29111] mr-3" /> },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-[#4db33d] mr-3" />,
        },
      ],
    },
    {
      name: "Tools",
      icon: <FiGitBranch className="mr-2" />,
      skills: [
        { name: "Git", icon: <SiGit className="text-[#f34f29] mr-3" /> },
        { name: "Github", icon: <SiGithub className=" mr-3" /> },
        {
          name: "VS Code",
          icon: <VscVscodeInsiders className="text-[#2da2e0] mr-3" />,
        },
        { name: "Figma", icon: <SiFigma className=" mr-3" /> },
      ],
    },
    {
      name: "Others",
      icon: <FiCpu className=" mr-2" />,
      skills: [
        { name: "Python", icon: <SiPython className="text-[#4584b6] mr-3" /> },
        { name: "Arduino", icon: <SiArduino className="text-[#3186a0] mr-3" /> },
      ],
    },
  ];
  return (
    <>
      <title>Skills</title>

      <div
        className={`bg-neutral-50 min-h-screen transition duration-500 transform ease-in-out ${
          isDarkMode ? "dark-mode-header" : ""
        }`}
      >
        {/*Particles Component*/}
        <ParticlesBackground />

        {/*Header Component*/}
        <Header />

        {/*Main Content*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: "0.2" }}
          className="max-w-7xl mx-auto px-8 py-5 relative z-10"
        >
          <h1 className=" text-3xl sm:text-5xl font-bold text-center mb-5">
            My Skills
          </h1>
          <p className="text-center mb-10 text-lg">
            Here are the tech stacks I have experience with and am currently
            prioritizing for further development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ y: -3 }}
                className="p-6 rounded-lg border border-opacity-10 hover:bg-opacity-5 transition-colors cursor-pointer backdrop-blur-xs"
              >
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  {category.icon} {category.name}
                </h2>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={`${category.name}-${skill.name}`}
                      whileHover={{ x: 5 }}
                      className="flex items-center"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
