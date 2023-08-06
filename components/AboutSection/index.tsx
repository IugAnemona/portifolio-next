import * as GS from "../../styles";
import { AboutCard } from "../AboutCard";
import { AboutMain } from "../AboutMain";
import { AboutTechnologies } from "../AboutTecnologies";
import { AboutContainer } from "./styles";
import { Apresentation } from "../Apresentation";

export const About = () => {
  return (
    <GS.sectionFullScreen>
      <Apresentation />
      <AboutContainer>
        <AboutCard />
        <AboutMain />
        <AboutTechnologies />
      </AboutContainer>
    </GS.sectionFullScreen>
  );
};
