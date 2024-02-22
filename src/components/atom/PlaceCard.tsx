import { PlaceType } from "@/constants/places";
import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";
import { IoStarSharp } from "react-icons/io5";
import { BiShapeSquare } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoWifiOutline } from "react-icons/io5";

interface PlaceCardProps extends PlaceType {
  className?: string;
}

const PlaceCard: FC<PlaceCardProps> = ({
  className,
  image,
  name,
  price,
  size,
  sizePeople,
  stars,
  wifiSpeed,
}) => {
  return (
    <div
      className={clsx(
        "rounded-3xl overflow-hidden group cursor-pointer relative top-0",
        className
      )}
    >
      <Image
        src={image}
        alt={name}
        width={800}
        height={600}
        className="relative top-0 z-5 w-80 h-96 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
        quality={100}
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full pt-28 px-5 flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div>
            <p className="font-bold text-xl group-hover:underline">{name}</p>
            <p className="font-semibold text-sm">
              ${price}
              <span className="font-normal">/mo</span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <IoStarSharp className="text-green-500 text-xl" />
            {stars}/5
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <BiShapeSquare className="text-xl" /> {size} sqft
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineUsers className="text-xl" /> {sizePeople} 
          </div>
          <div className="flex items-center gap-1">
            <IoWifiOutline  className="text-xl" /> {wifiSpeed} gbps
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
