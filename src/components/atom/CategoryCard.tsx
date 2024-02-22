import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const CategoryCard: FC<CategoryCardProps> = ({
  description,
  icon,
  title,
  className,
}) => {
  return (
    <div className="bg-gray-500 py-4 px-3 xl:py-6 xl:px-7 flex flex-row items-center gap-3 rounded-3xl cursor-pointer group">
      <div>
        <Image
          src={icon}
          alt={title}
          width={500}
          height={500}
          quality={100}
          className="w-9 h-9 object-cover object-center"
        />
      </div>
      <div>
        <p className="font-bold text-xl group-hover:underline duration-300 transition-all ease-in-out">{title}</p>
        <p className="text-gray-100">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
