import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Animação de piscar
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

// Tela de loading
const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Certifique-se de que o loader esteja no topo */
`;

// Logo animado
const Logo = styled.img`
  width: 200px;
  animation: ${blink} 1s infinite; /* Faz o logo piscar */
`;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const images = document.images;
    const totalImages = images.length;
    let loadedImages = 0;

    const handleImageLoad = async () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        await wait(1000);
        setIsLoading(false);
      }
    };

    Array.from(images).forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad); // Também conta erros
      }
    });
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen>
          <Logo src="assets/img/logo-2.png" alt="Logo" />
        </LoadingScreen>
      )}
    </>
  );
};

export default Loader;
