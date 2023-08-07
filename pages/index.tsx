import Head from "next/head";

import * as GS from "../styles";
import { Menu } from "@/components/Menu";
import { About } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { AiOutlinePlus } from "react-icons/ai";

export default function Page() {
  return (
    <>
      <Head>
        <title>Guilherme Alves</title>
      </Head>
      <Menu />
      <About />
      <Footer />
    </>
  );
}
