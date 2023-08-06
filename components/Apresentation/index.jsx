import { BiDownload } from "react-icons/bi";
import { Button, ButtonLink, FlexContainer, FullContainer } from "./styles";
import { ApresentationContainer } from "./styles";
import { BsBoxArrowUpRight } from "react-icons/bs";

export const Apresentation = () => {
  return (
    <ApresentationContainer>
      <span>Guilherme Alves</span>
      <h1>
        Fullstack <span>Developer</span>
      </h1>
      <FullContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          doloribus maxime saepe cum error autem et quos est quidem! Adipisci
          voluptas necessitatibus asperiores similique, voluptates architecto
          possimus hic veniam ipsum?
        </p>
      </FullContainer>
      <FullContainer>
        <p>Desenvolvedor Web FullStack | React | Node | PHP | Laravel</p>
      </FullContainer>
      <FlexContainer>
        <Button
          href="https://drive.google.com/file/d/1_Qlrs2Mxarus4StE7lAwNtOvbJnQjLTS/view"
          target="_blank"
        >
          Curriculo <BsBoxArrowUpRight />
        </Button>
        <ButtonLink
          href="https://www.linkedin.com/in/guilherme-alves-25109624a/"
          target="_blank"
        >
          See Linkedin <BsBoxArrowUpRight />
        </ButtonLink>
      </FlexContainer>
    </ApresentationContainer>
  );
};
