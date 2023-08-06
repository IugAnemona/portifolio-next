import Head from "next/head";

import * as GS from "../styles";
import { Menu } from "@/components/Menu";
import { About } from "@/components/AboutSection";
import { Apresentation } from "../components/Apresentation";
import { ProjectsContainer } from "../components/ProjectsContent";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Head>
        <title>Guilherme Alves</title>
      </Head>
      <Menu />
      <ProjectsContainer />
      <Footer />
    </>
  );
}
