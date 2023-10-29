import { ApresentationContainer, FullContainer } from "./styles";

export const ProjectsHeader = () => {
  return (
    <ApresentationContainer>
      <span>Projetos Pessoais</span>
      <h1>
        Projetos <span>Desenvolvidos</span>
      </h1>
      <FullContainer>
        <p>Alguns dos projetos que fiz sozinho, do código, ao layout.</p>
        <p>
          Atualmente estou estudando Java, e pretendo fazer uma API e um app
          android.
        </p>
      </FullContainer>
      <FullContainer>
        <p>Desenvolvedor Web FullStack | React | Node | SQL | TypeScript</p>
      </FullContainer>
    </ApresentationContainer>
  );
};
