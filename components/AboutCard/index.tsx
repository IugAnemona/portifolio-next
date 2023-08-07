import Image from "next/image";
import {
  CardContainer,
  ContactContent,
  Contacts,
  ContactsInfo,
  Occupation,
  Sociais,
  Sociaislink,
} from "./styles";
import { BsFillTelephoneFill, BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillMail, AiOutlinePlus, AiOutlinePlusSquare } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const AboutCard = () => {
  return (
    <CardContainer>
      <Image height={270} width={270} src={"/icon.png"} alt="Foto Power" />
      <Occupation>Fullstack Developer</Occupation>
      <Sociais>
        <Sociaislink href="https://github.com/IugAnemona">
          <BsGithub />
        </Sociaislink>
        <Sociaislink href="https://www.instagram.com/guianemona/">
          <BsInstagram />
        </Sociaislink>
        <Sociaislink href="https://www.linkedin.com/in/guilherme-alves-25109624a/">
          <BsLinkedin />
        </Sociaislink>
      </Sociais>
      <Contacts>
        <ContactContent>
          <BsFillTelephoneFill />
          <ContactsInfo>
            <h3>Telefone</h3>
            <p>(31) 9 9672-1678</p>
          </ContactsInfo>
        </ContactContent>
        <ContactContent>
          <AiFillMail />
          <ContactsInfo>
            <h3>E-mail</h3>
            <p>guilhermealvescoc@gmail.com</p>
          </ContactsInfo>
        </ContactContent>
        <ContactContent>
          <BsFillTelephoneFill />
          <ContactsInfo>
            <h3>Telefone</h3>
            <p>(31) 9 9672-1678</p>
          </ContactsInfo>
        </ContactContent>
      </Contacts>
    </CardContainer>
  );
};
