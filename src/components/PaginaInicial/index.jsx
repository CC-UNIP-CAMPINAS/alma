import React from "react";
import "./styles.css";
import carroselImg1 from "../../assets/img/carrosel/1.png";
import carroselImg2 from "../../assets/img/carrosel/2.png";
import carroselImg3 from "../../assets/img/carrosel/3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function PaginaInicial() {
  return (
    <div className="containerimagens">
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <img src={carroselImg1} alt="1"></img>
        <img src={carroselImg2} alt="2"></img>
        <img src={carroselImg3} alt="3"></img>
      </Carousel>{" "}
    </div>
  );
}
