import {
  ContentContainer,
  ImageContainer,
  LinksContainer,
  Project,
} from "./styles";
import Image from "next/image";
import { ButtonLink } from "@/components/Shared/Button";

interface ObjetoProps {
  title: string;
  description: string;
  img: string;
  deploy: string;
  git: string;
}

interface ProjectsProps {
  projects: ObjetoProps[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Project key={index}>
          <ImageContainer>
            <Image
              alt="Imagem do projeto"
              src={project.img}
              height={800}
              width={1000}
            />
          </ImageContainer>
          <ContentContainer>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ContentContainer>
          <LinksContainer>
            <ButtonLink
              href={project.deploy}
              customClass="pink projects"
              target="_blank"
            >
              Deploy
            </ButtonLink>
            <ButtonLink
              href={project.git}
              customClass="projects"
              target="_blank"
            >
              GitHub
            </ButtonLink>
          </LinksContainer>
        </Project>
      ))}
    </>
  );
};
