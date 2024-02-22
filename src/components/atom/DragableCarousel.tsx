"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Flickity from "react-flickity-component";

interface DragableCarouselProps {
  children: ReactNode;
}

const DragableCarousel: FC<DragableCarouselProps> = ({ children }) => {
  return (
    <Flickity
    className="outline-none"
      options={{
        draggable: true,
        initialIndex: 0,
        pageDots: false,
        contain: true,
        prevNextButtons: false,
        lazyLoad: true
      }} // takes flickity options {}
    >
      {children}
    </Flickity>
  );
};

export default DragableCarousel;
