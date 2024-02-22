import React, { FC } from "react";
import BenefitItem from "../atom/BenefitItem";
import BenefitCard from "../atom/BenefitCard";
import Button from "../atom/Button";
import { BsChatText } from "react-icons/bs";
interface BenefitsProps {}

const Benefits: FC<BenefitsProps> = ({}) => {
  return (
    <section className="mt-24 md:mt-48 px-4 lg:px-4 xl:px-20 flex flex-col gap-10 lg:gap-0 lg:flex-row  items-center lg:items-start lg:justify-between">
      <div>
        <h3 className="font-bold text-3xl mb-8 text-center lg:text-start ">
          Huge Benefits That <br /> Make You Feel Happier
        </h3>
        <div className="flex flex-col gap-6">
          <BenefitItem data="Checking faster without depositing" />
          <BenefitItem data="24/7 security guarding your place" />
          <BenefitItem data="Fast-internet access without lagging" />
          <BenefitItem data="High standard of layout of houses" />
          <BenefitItem data="All other benefits, we promise" />
        </div>
        <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
          <Button className="flex items-center gap-1.5" isPrimary><BsChatText className="text-xl" />Call Sales</Button>
          <Button isSecondary>All Benefits</Button>
        </div>
      </div>
      <div className=" grid grid-rows-2 gap-8">
        <div className="grid grid-cols-2 gap-8">
          <BenefitCard
            count="18,309"
            image="/benefit1.png"
            title="House for Office and Living"
          />
          <BenefitCard
            count="84,209"
            image="/benefit2.png"
            title="House Nearby with Mall"
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <BenefitCard
            count="22,409"
            image="/benefit3.png"
            title="House Historical Building"
          />
          <BenefitCard
            count="47,583"
            image="/benefit4.png"
            title="Landed House with Park"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
