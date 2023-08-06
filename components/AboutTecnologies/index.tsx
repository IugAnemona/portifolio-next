import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaLaravel } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";
import {
  AboutMainContent,
  TechContainer,
  TechContent,
  TechnologiesContainer,
} from "./styles";

export const AboutTechnologies = () => {
  return (
    <TechnologiesContainer>
      <AboutMainContent>
        <h2>Tecnologias</h2>
        <TechContainer>
          <TechContent>
            <AiFillHtml5 />
            <span>HTML</span>
          </TechContent>
          <TechContent>
            <FaCss3Alt />
            <span>CSS</span>
          </TechContent>
          <TechContent>
            <SiTailwindcss />
            <span>Tailwind</span>
          </TechContent>
          <TechContent>
            <SiStyledcomponents />
            <span>Styled Components</span>
          </TechContent>
          <TechContent>
            <SiJavascript />
            <span>JavaScript</span>
          </TechContent>
          <TechContent>
            <FaReact />
            <span>ReactJs</span>
          </TechContent>
          <TechContent>
            <FaNodeJs />
            <span>NodeJs</span>
          </TechContent>
          <TechContent>
            <FaPhp />
            <span>PHP</span>
          </TechContent>
          <TechContent>
            <FaLaravel />
            <span>Laravel</span>
          </TechContent>
        </TechContainer>
      </AboutMainContent>
    </TechnologiesContainer>
  );
};
