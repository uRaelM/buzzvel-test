import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import TextBigImage from "../components/TextBigImage";
import ImageWithGrid from "../components/ImageWithGrid";
import TextBigImageButton from "../components/TextBigImageButton";
import SliderWithText from "../components/SliderWithText";
import Footer from "../components/Footer";

function Home() {
  // Lenis Smooth Scroll Config
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Helmet>
        <title>Soller - Sun to Power Your Home</title>
        <meta name="description" content="Get the Sun to Power Your Home." />
      </Helmet>
      {/* 
      Está reutilizando CallBtn
      Propriedades de Navbar: 

      logo(caminho para a imagem) 
      logoWidth(width para a logo) 
      logoHeight(height para a logo)
      textColor(Cor para os textos e para os links) 
      backgroundColor(cor para o background da navbar)
      callBtnColor(Cor do botão de chamada) 
      callBtnHoverColor(Cor do botão de chamada no hover) 
      callBtnText(Cor do texto do botão de chamada) 
      links(lista de li's da navbar) 
      */}
      <Navbar logo={"assets/img/logo.png"} logoHeight={"25px"} links={links} />
      {/* 
      Está reutilizando Balls e CallBtn

      Propriedades de MainSection: 

      textColor(Cor do texto)
      callBtnColor(Cor do botão de chamada) 
      callBtnHoverColor(Cor do botão de chamada no hover) 
      callBtnText(Cor do texto do botão de chamada) 
      testimonyText(Texto do testemunho)
      imgSrcTestimony(Foto da pessoa que fez o testemunho) 
      nameTestimony(Nome da pessoa que fez o testemunho)
      companyTestimony(Nome da empresa da pessoa que fez o testemunho)
      ballImage(qual bola será utilizada)
      innerImageBall(qual imagem ficará dentro da bola)
      */}
      <MainSection
        testimonyText={
          "“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”"
        }
        imgSrcTestimony={"assets/img/people/asian-girl.png"}
        nameTestimony={"Rwanda Melflor"}
        companyTestimony={"zerowaste.com"}
        ballImage={"assets/img/balls/light-blue.png"}
        innerImageBall={"assets/img/worker.png"}
      />
      {/*
      Está reutilizando Balls
      Propriedades de TextBigImage:

        title(Titulo a ser exebido),
        textColor(Cor do título e parágrafo),
        subtitle(Subtítulo a ser exibido),
        subTitleColor(Cor do subtítulo)
        paragraph(Parágrafo a ser exibido),
        image(Imagem central a ser exibida),
        imageHeight(algura da imagem ex 900px)
        imageWidth(width da imagem ex: 900px)
        ballOne(Imagem do primeiro objeto a ser exibido),
        ballTwo(Imagem do segundo objeto a ser exibido),
        textleft(Se estiver como verdadeiro o texto estará na esqueda)
        backgroundColor(Muda a cor do background)
      */}
      <TextBigImage
        title={"Pick the Sun"}
        subtitle={"No more waste"}
        paragraph={
          "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
        }
        image={"assets/img/devices/screen.png"}
        ballOne={"assets/img/balls/purple.png"}
        ballTwo={"assets/img/balls/orange.png"}
      />
      {/*
        Está reutilizando Balls
      
        title(Titulo a ser exebido),
        textColor(Cor do título e parágrafo),
        subtitle(Subtítulo a ser exibido),
        subTitleColor(Cor do subtítulo)
        paragraph(Parágrafo a ser exibido),
        titleTextArray(Titulos e textos para o grid)
        image(Imagem central a ser exibida),
        ballImage(Objeto a ser exibido),
        ballInnerImage(Imagem a ser exibida dentro do objeto),
        invert(Imagem true = imagem na direita)
      */}
      <ImageWithGrid
        title="Personalized services"
        subtitle="Services"
        paragraph="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
        ballImage={"assets/img/balls/dark-purple.png"}
        ballInnerImage={"assets/img/devices/cellphone-1.png"}
        titleTextArray={titleTextArray1}
      />
      <ImageWithGrid
        title="Powerful features"
        subtitle="System features"
        paragraph="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
        ballImage={"assets/img/balls/light-orange.png"}
        ballInnerImage={"assets/img/devices/cellphone-2.png"}
        titleTextArray={titleTextArray2}
        invert={true}
      />

      {/*
      Esta utilizando o componente Slider e reutilizando CallBtn

      title (titulo presente no slider)
      subtitle (subtitulo presente no slider)
      paragraph (paragrafo presente no slider)
      textColor (cor padrão do texto)
      subTitleColor (cor de destaque)
      testimoniesList (Lista com testimonyText, imgSrc, name e company, para cada testemunho)
      backgroundColor (cor do background)
      btnColor (cor dos botões)
      btnHoverColor (cor do texto do botão em hover)
      */}

      <SliderWithText
        title={"Make something awesome"}
        subtitle={"Join other Sun harvesters"}
        paragraph={
          "Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
        }
        btnColor={"#FCD34D"}
        btnHoverColor={"#78350F"}
        testimoniesList={testimonies}
      />

      {/*
      Está reutilizando TextBigImage, Balls e CallBtn

      title,
      textColor,
      subtitle,
      image,
      imageHeight,
      imageWidth,
      backgroundColor,
      textleft,
      subTitleColor,
      callBtnColor,
      callBtnHoverColor,
      bottomBtnText, (Texto abaixo do botão)
      ballImage,
      */}
      <TextBigImageButton
        title={"All the power that you need for your house is now available"}
        textColor={"#FFF"}
        subtitle={"Get the Sun to power your home"}
        image={"assets/img/devices/notebook.png"}
        imageHeight={"700px"}
        imageWidth={"1200px"}
        backgroundColor={"#7E22CE"}
        subTitleColor={"#FCD34D"}
        textleft={true}
        callBtnColor={"#FCD34D"}
        callBtnHoverColor={"#78350F"}
        bottomBtnText={"Egestas fringilla aliquam leo"}
        ballImage={"assets/img/balls/light-purple.png"}
      />

      {/*
      logo (Imagem a ser exibida)
      logoHeight (Tamanho da imagem)
      backgroundColor (cor do background)
      textColor (cor do texto)
      */}
      <Footer logo={"assets/img/logo-2.png"} />
    </>
  );
}

const links = [
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Solution", href: "/solution" },
  { name: "Services", href: "/services" },
  { name: "Configure", href: "/configure" },
];

const titleTextArray1 = [
  {
    title: "Et mauris",
    paragraph:
      "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
  },
  {
    title: "Eget sit",
    paragraph:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
  },
  {
    title: "Imperdiet pellentesque",
    paragraph:
      "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.",
  },
  {
    title: "Non libero",
    paragraph:
      "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.",
  },
];

const titleTextArray2 = [
  {
    title: "Erat sit",
    paragraph:
      "Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.",
  },
  {
    title: "Ullamcorper arcu",
    paragraph:
      "Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.",
  },
  {
    title: "Et pellentesque",
    paragraph:
      "Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.",
  },
  {
    title: "Amet egestas",
    paragraph:
      "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
  },
];

const testimonies = [
  {
    testimonyText:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    imgSrc: "assets/img/people/girl-in-dark.png",
    name: "Jane Cooper",
    company: "10KWh",
  },
  {
    testimonyText:
      "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    imgSrc: "assets/img/people/business-man.png",
    name: "Ralph Edwards",
    company: "32Kwh",
  },
  {
    testimonyText:
      "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    imgSrc: "assets/img/people/asian-girl.png",
    name: "Courtney Henry",
    company: "6KWh",
  },
  {
    testimonyText:
      "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    imgSrc: "assets/img/people/korean-boy.png",
    name: "Cameron Williamson",
    company: "12KWh",
  },
  {
    testimonyText:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    imgSrc: "assets/img/people/girl-in-dark.png",
    name: "Jane Cooper",
    company: "10KWh",
  },
  {
    testimonyText:
      "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    imgSrc: "assets/img/people/business-man.png",
    name: "Ralph Edwards",
    company: "32Kwh",
  },
  {
    testimonyText:
      "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    imgSrc: "assets/img/people/asian-girl.png",
    name: "Courtney Henry",
    company: "6KWh",
  },
  {
    testimonyText:
      "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    imgSrc: "assets/img/people/korean-boy.png",
    name: "Cameron Williamson",
    company: "12KWh",
  },
  // Adicione mais testemunhos aqui...
];

export default Home;
