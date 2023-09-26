import * as S from "./styles";
import * as GS from "../../styles";
import Image from "next/image";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { MenuLinks } from "./MenuLinks";
import { RedesLinks } from "./RedesLinks";
import { useState, useEffect } from "react";

export const Menu = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 10; // Define o ponto de rolagem para mudar a cor (100px no exemplo)
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Section>
      <GS.WithoutContainer>
        <S.Header scroll={scrolling}>
          <S.Logo scroll={scrolling} href="/">
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
              <S.LinkRede scroll={scrolling} href="/">
                <li>Home</li>
              </S.LinkRede>
              <S.LinkRede scroll={scrolling} href="/projects">
                <li>Projetos</li>
              </S.LinkRede>
              <S.LinkRede scroll={scrolling} href="/">
                <li>Sobre Mim</li>
              </S.LinkRede>
            </S.List>
          </S.Nav>
          <RedesLinks />
        </S.Header>
      </GS.WithoutContainer>
    </S.Section>
  );
};
