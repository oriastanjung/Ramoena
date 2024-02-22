import React, { FC } from "react";
import Image from "next/image";
import clsx from "clsx";
import { HiOutlineUsers } from "react-icons/hi2";

interface BenefitCardProps {
  title: string;
  count: string;
  image: string;
  className?: string;
}

const BenefitCard: FC<BenefitCardProps> = ({
  count,
  title,
  image,
  className,
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
        alt={title}
        width={800}
        height={600}
        className="relative top-0 z-5 w-64 h-52 xl:w-96 xl:h-52 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
        quality={100}
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full pt-28 pb-5 px-5 flex flex-col gap-2 md:gap-0 md:flex-row justify-between">
        <p className="xl:w-6/12 font-bold xl:text-xl">{title}</p>
        <p className="text-sm flex gap-2 items-center">
          <HiOutlineUsers className="text-xl" />
          {count}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
