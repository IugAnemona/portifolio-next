import * as GS from "../../styles";
import { ProjectsHeader } from "./ProjectsHeader";
import { Projects } from "./Projects";
import { projectsList } from "@/contents/projects/projectsList";
import { ProductsMain, ProjectsContainer } from "./styles";

export const ProjectsContant = () => {
  return (
    <GS.sectionFullScreen>
      <GS.Container>
        <ProjectsHeader />
        <ProductsMain>
          <h2>Projetos</h2>
          <p>
            Nesta seção, você encontrará uma seleção dos meus projetos mais
            recentes e significativos.
          </p>
          <ProjectsContainer>
            <Projects projects={projectsList} />
          </ProjectsContainer>
        </ProductsMain>
      </GS.Container>
    </GS.sectionFullScreen>
  );
};
