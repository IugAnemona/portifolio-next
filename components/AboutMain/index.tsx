import { TypeAnimation } from "react-type-animation";
import { AboutMainContent, AboutMainSection } from "./styles";

export const AboutMain = () => {
  return (
    <AboutMainSection>
      <AboutMainContent>
        <h2>Sobre</h2>
        <p>
          Meu nome é Guilherme Alves, trabalho com manutenção de computadores e
          Help desk.
        </p>
        <p>
          Sou um desenvolvedor web iniciante, entusiasmado e com grande
          interesse em aprender e crescer na área. Tenho conhecimentos em HTML e
          CSS, JavaScript, React e Vuejs e estou em busca de uma oportunidade
          para iniciar minha carreira como desenvolvedor front-end.
        </p>
        <p>
          Estou familiarizado com os conceitos fundamentais do desenvolvimento
          web. Atualmente uso Tailwind CSS e React para criar Aplicações web
          Mobile First, e ao longo do desenvolvimento, expandindo para outros
          tamanhos de tela.
        </p>
      </AboutMainContent>
    </AboutMainSection>
  );
};
