import { BsLinkedin } from "react-icons/bs";
import * as S from "./styles";
import { AiFillHome, AiFillProject } from "react-icons/ai";

export const MenuLinks = () => {
  return (
    <S.RedesContainer>
      <S.RedesContent>
        <S.LinkRede href="/">
          <AiFillHome />
        </S.LinkRede>
        <S.LinkRede href="/projects">
          <AiFillProject />
        </S.LinkRede>
        <S.LinkRede
          href="https://www.linkedin.com/in/guilherme-alves-25109624a/"
          target="_blank"
        >
          <BsLinkedin />
        </S.LinkRede>
      </S.RedesContent>
    </S.RedesContainer>
  );
};
