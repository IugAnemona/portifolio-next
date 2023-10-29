import { BiDownload } from "react-icons/bi";
import { FlexContainer, FullContainer } from "./styles";
import { ApresentationContainer } from "./styles";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { ButtonLink } from "../Shared/Button";

export const Apresentation = () => {
  return (
    <ApresentationContainer>
      <span>Guilherme Alves</span>
      <h1>
        Fullstack <span>Developer</span>
      </h1>
      <FullContainer>
        <p>
          Como um desenvolvedor Fullstack, possuo habilidades abrangentes tanto
          na criação de interfaces dinâmicas usando React quanto na construção
          de servidores backend com Node.js.
        </p>
      </FullContainer>
      <FullContainer>
        <p>Desenvolvedor Web FullStack | React | Node | SQL | TypeScript</p>
      </FullContainer>
      <FlexContainer>
        <ButtonLink
          customClass="pink margin-top"
          href="https://drive.google.com/file/d/1_Qlrs2Mxarus4StE7lAwNtOvbJnQjLTS/view"
          target="_blank"
        >
          Curriculo
        </ButtonLink>
        <ButtonLink
          customClass="margin-top"
          href="https://www.linkedin.com/in/guilherme-alves-25109624a/"
          target="_blank"
        >
          See Linkedin
        </ButtonLink>
      </FlexContainer>
    </ApresentationContainer>
  );
};
