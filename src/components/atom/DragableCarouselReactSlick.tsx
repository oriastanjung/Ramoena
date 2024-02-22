import React, { FC, ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface DragableCarouselProps {
  children: ReactNode;
}

const DragableCarousel: FC<DragableCarouselProps> = ({ children }) => {
  return (
    <Slider
      autoplay
      centerMode
      dots={false}
      slidesToShow={4}
      slidesToScroll={1}
      initialSlide={0}
      draggable={true}
      focusOnSelect={false}
    >
      {children}
    </Slider>
  );
};

export default DragableCarousel;
