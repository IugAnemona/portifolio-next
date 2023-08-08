import Head from "next/head";

import { Menu } from "@/components/Menu";
import { ProjectsContainer } from "../components/ProjectsContent";
import { Footer } from "@/components/Footer";
import { MenuLinks } from "@/components/Menu/MenuLinks";

export default function Page() {
  return (
    <>
      <Head>
        <title>Guilherme Alves</title>
      </Head>
      <Menu />
      <ProjectsContainer />
      <MenuLinks />
      <Footer />
    </>
  );
}
