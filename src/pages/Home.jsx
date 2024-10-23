import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import TextBigImage from "../components/TextBigImage";
import ImageWithGrid from "../components/ImageWithGrid";
import TextBigImageButton from "../components/TextBigImageButton";
import SliderWithText from "../components/SliderWithText";

function Home() {
  return (
    <>
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

      <SliderWithText
        title={"Make something awesome"}
        subtitle={"Join other Sun harvesters"}
        paragraph={
          "Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
        }
        callBtnColor={"#FCD34D"}
        callBtnHoverColor={"#78350F"}
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
    testimonyText: "Great service! Highly recommend.",
    imgSrc: "/path/to/image1.jpg",
    name: "John Doe",
    company: "Company A",
  },
  {
    testimonyText: "Amazing experience, will come back for sure.",
    imgSrc: "/path/to/image2.jpg",
    name: "Jane Smith",
    company: "Company B",
  },
  {
    testimonyText: "Very professional and top-notch quality.",
    imgSrc: "/path/to/image3.jpg",
    name: "Alex Johnson",
    company: "Company C",
  },
  // Adicione mais testemunhos aqui...
];

export default Home;
