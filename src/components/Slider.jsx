import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Autoplay } from "swiper/modules";
import Testemony from "./Testimony";
import Arrow from "./icons/Arrow";

const Slider = ({ testimoniesList, btnColor }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    console.log(swiperInstance);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [swiperInstance]);

  const handleAutoPlay = (swiper) => {
    if (swiper && swiper.autoplay.running) {
      swiper.autoplay.stop();
      setTimeout(() => {
        swiper.autoplay.start();
      }, 3000);
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      setDirection("next");
      swiperInstance.slideNext();
      handleAutoPlay(swiperInstance);
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      setDirection("prev");
      swiperInstance.slidePrev();
      handleAutoPlay(swiperInstance);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrev();
    }
  };

  return (
    <Swiper
      style={swiperContainer}
      grabCursor={true}
      spaceBetween={100}
      slidesPerView={5}
      loop={true}
      onSwiper={(swiper) => setSwiperInstance(swiper)}
      onTouchEnd={() => handleAutoPlay(swiperInstance)}
      onKeyPress={() => handleAutoPlay(swiperInstance)}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: direction === "prev",
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      speed={800}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      modules={[Keyboard, Autoplay]}
    >
      {/* SwiperSlide para cada card */}
      {testimoniesList.map((testimony, index) => (
        <SwiperSlide key={index}>
          <Card>
            <Testemony
              testimonyText={testimony.testimonyText}
              imgSrc={testimony.imgSrc}
              name={testimony.name}
              company={testimony.company}
            />
          </Card>
        </SwiperSlide>
      ))}
      <div style={{ display: "flex" }}>
        <Buttons btnColor={btnColor} onClick={handlePrev}>
          <Arrow color={btnColor} />
        </Buttons>
        <Buttons btnColor={btnColor} onClick={handleNext}>
          <div style={{ rotate: "180deg", marginBottom: "0.2rem" }}>
            <Arrow color={btnColor} />
          </div>
        </Buttons>
      </div>
    </Swiper>
  );
};

const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #333;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
  cursor: pointer;
  padding: 2rem;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);

  .swiper-slide-active & {
    transform: scale(1.05);
  }
`;

const swiperContainer = {
  overflow: "visible",
  width: "calc(100% + 8rem)",
};

const Buttons = styled.div`
  border: ${(props) =>
    props.btnColor ? `2px solid ${props.btnColor}` : "2px solid #581C87"};
  height: 50px;
  width: 50px;
  margin: 4rem 2rem 0 0;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Slider;
