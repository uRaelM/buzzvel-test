import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";

const links = [
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Solution", href: "/solution" },
  { name: "Services", href: "/services" },
  { name: "Configure", href: "/configure" },
];

function Home() {
  return (
    <>
      {/* 
      Propriedades de Navbar: 
      links(li's da navbar) 
      logo(caminho para a imagem) 
      logoWidth(width para a logo) 
      logoHeight(height para a logo)
      textColor(Cor para os textos e para os links) 
      backgroundColor(cor para o background da navbar)
      */}
      <Navbar
        logo={"assets/img/logo.png"}
        logoHeight={"25px"}
        logoWidth={"100%"}
        links={links}
      />
      <MainSection />
    </>
  );
}

export default Home;
