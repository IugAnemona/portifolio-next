import * as S from "./styles";
import * as GS from "../../styles";
import Image from "next/image";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { MenuLinks } from "./MenuLinks";
import { RedesLinks } from "./RedesLinks";

export const Menu = () => {
  return (
    <S.Section>
      <GS.WithoutContainer>
        <S.Header>
          <S.Logo href="/">
            <Image
              src="/icon.png"
              width={100}
              height={100}
              title="Logo Anemona"
              alt="Logo Anemona"
            />
          </S.Logo>
          <S.Nav>
            <S.List>
              <S.LinkRede href="/">
                <li>Sobre</li>
              </S.LinkRede>
              <S.LinkRede href="/projects">
                <li>Projetos</li>
              </S.LinkRede>
              <S.LinkRede href="/" target="_blank">
                <li>Projetos</li>
              </S.LinkRede>
            </S.List>
          </S.Nav>
          <RedesLinks />
          <MenuLinks />
        </S.Header>
      </GS.WithoutContainer>
    </S.Section>
  );
};
