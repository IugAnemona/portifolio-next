import * as GS from "../../styles";
import { ProjectsHeader } from "./ProjectsHeader";
import { Projects } from "./Projects";
import { WeatherApp } from "./WeatherApp";

export const ProjectsContainer = () => {
  return (
    <GS.sectionFullScreen>
      <GS.Container>
        <ProjectsHeader />
        <Projects />
      </GS.Container>
    </GS.sectionFullScreen>
  );
};
