import { useState } from "react";
import { KusakaKwaApp } from "../KusakaKwaApp";
import { WeatherApp } from "../WeatherApp";
import {
  ProjectsContainer,
  ProjectsList,
  ProjectsListContainer,
} from "./styles";

export const Projects = () => {
  const [project, setProject] = useState(1);

  return (
    <ProjectsContainer>
      <ProjectsListContainer>
        <ProjectsList>
          <button onClick={() => setProject(1)}>01</button>
          <button onClick={() => setProject(2)}>02</button>
        </ProjectsList>
      </ProjectsListContainer>
      {project === 1 ? (
        <>
          <h2>WeatherApp</h2>
          <p>
            Aplicativo que permite o usuário pesquisar a atual condições
            climaticas de qualquer cidade do mundo.
          </p>
          <WeatherApp />
        </>
      ) : null}

      {project === 2 ? (
        <>
          <h2>WeatherApp</h2>
          <p>
            Aplicativo que permite o usuário pesquisar a atual condições
            climaticas de qualquer cidade do mundo.
          </p>
          <KusakaKwaApp />
        </>
      ) : null}
    </ProjectsContainer>
  );
};
