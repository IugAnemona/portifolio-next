import { WeatherApp } from "../WeatherApp";
import {
  ProjectsContainer,
  ProjectsList,
  ProjectsListContainer,
} from "./styles";

export const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsListContainer>
        <ProjectsList>
          <li>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
        </ProjectsList>
      </ProjectsListContainer>
      <h2>WeatherApp</h2>
      <p>
        Aplicativo que permite o usuário pesquisar a atual condições climaticas
        de qualquer cidade do mundo. Usei Vue.js para receber dados da Weather
        API transformar em um JSON, manipular os dados do JSON e jogar no DOM do
        Html.
      </p>
      <WeatherApp />
    </ProjectsContainer>
  );
};
