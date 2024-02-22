import React, { FC } from "react";
import DragableCarousel from "../atom/DragableCarousel";
import { PlaceType, PlacesData } from "@/constants/places";
import PlaceCard from "../atom/PlaceCard";

interface LatestProps {}

const Latest: FC<LatestProps> = ({}) => {
  return (
    <section className="w-full lg:px-4 xl:px-20 mt-9 pt-36 lg:pt-52 mb-24">
      <div className="flex w-full items-center justify-center flex-col">
        <h2 className="font-bold text-3xl">Our Latest Deals</h2>
        <p className="text-lg text-gray-100 text-center px-4 md:px-0">
          Explore the beauty of architecture and living love
        </p>
      </div>
      <div className="mt-7 w-full overflow-hidden">
        <DragableCarousel>
          {PlacesData.map((item: PlaceType, idx: number) => (
            <PlaceCard
              name={item.name}
              image={item.image}
              price={item.price}
              size={item.size}
              sizePeople={item.sizePeople}
              stars={item.stars}
              wifiSpeed={item.wifiSpeed}
              className="carousel-cell mr-8"
              key={idx}
            />
          ))}
        </DragableCarousel>
      </div>
    </section>
  );
};

export default Latest;
