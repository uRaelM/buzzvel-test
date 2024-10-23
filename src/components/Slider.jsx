import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; // Import dos módulos necessários
import Testemony from "./testimony/Testimony";

const Slider = ({ testimoniesList }) => {
  return (
    <Swiper
      grabCursor={true}
      spaceBetween={50}
      slidesPerView={5}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      speed={800}
      modules={[Pagination]}
    >
      {/* SwiperSlide para cada card */}
      {testimoniesList.map((testimony, index) => (
        <SwiperSlide key={index}>
          <div style={cardStyle}>
            <Testemony
              testimonyText={testimony.testimonyText}
              imgSrc={testimony.imgSrc}
              name={testimony.name}
              company={testimony.company}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Estilos para os cards
const cardStyle = {
  width: "300px",
  height: "400px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.4s ease",
  cursor: "pointer",
  padding: "2rem",
};

export default Slider;
