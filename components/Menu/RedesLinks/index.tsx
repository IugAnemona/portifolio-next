import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import * as S from "./styles";

export const RedesLinks = () => {
  return (
    <S.RedesContainer>
      <S.RedesContent>
        <S.LinkRede
          href="https://www.linkedin.com/in/guilherme-alves-25109624a/"
          target="_blank"
        >
          <BsLinkedin />
        </S.LinkRede>
        <S.LinkRede href="https://github.com/IugAnemona" target="_blank">
          <BsGithub />
        </S.LinkRede>
        <S.LinkRede
          href="https://www.instagram.com/guianemona/"
          target="_blank"
        >
          <BsInstagram />
        </S.LinkRede>
      </S.RedesContent>
      <S.VerticalText>Follow Me</S.VerticalText>
    </S.RedesContainer>
  );
};
