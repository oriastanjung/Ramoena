import React, { FC } from "react";
import Button from "../atom/Button";
import { CategoriesData, CategoryType } from "@/constants/categories";
import CategoryCard from "../atom/CategoryCard";
interface CategoriesProps {}

const Categories: FC<CategoriesProps> = ({}) => {
  return (
    <section className="mt-24 md:mt-48 bg-black py-14 px-4 lg:px-4 xl:px-20">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-3xl">Categories</h3>
          <p className="text-lg text-gray-100 mt-1">We provide everything</p>
        </div>
        <div>
          <Button isPrimary>Explore All</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {CategoriesData.map((item: CategoryType, idx: number) => (
          <CategoryCard
            description={item.description}
            icon={item.icon}
            title={item.title}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
