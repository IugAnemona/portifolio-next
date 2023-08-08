import Head from "next/head";

import { Menu } from "@/components/Menu";
import { About } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { MenuLinks } from "@/components/Menu/MenuLinks";

export default function Page() {
  return (
    <>
      <Head>
        <title>Guilherme Alves</title>
      </Head>
      <Menu />
      <About />
      <MenuLinks />
      <Footer />
    </>
  );
}
