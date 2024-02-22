import Image from "next/image";
import React, { FC } from "react";
import HeroBadge from "../atom/HeroBadge";
import KosIcon from "@/assets/icons/KosIcon";
import PeopleHappyIcon from "@/assets/icons/PeopleHappyIcon";
import SecurityIcon from "@/assets/icons/SecurityIcon";
import CountriesIcon from "@/assets/icons/CountriesIcon";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="min-h-[90vh] relative w-full ">
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="relative top-40 md:top-52 xl:top-64 2xl:top-72 z-10 px-4 lg:px-4 xl:px-20 w-full ">
        <h2 className="font-bold text-5xl xl:text-6xl lg:w-7/12 xl:w-7/12 2xl:w-5/12 leading-relaxed">
          Find Glorious Living And Loving Space
        </h2>
        <p className="text-lg lg:w-1/3 xl:w-3/12 mt-3 leading-loose">
          Discovering magnificent existence, and Embracing affectionate realms
        </p>
        <form className="mt-12 flex flex-row xl:w-7/12 2xl:w-4/12">
          <input
            placeholder="Search by city or country..."
            className="text-lg xl:text-xl bg-black outline-none md:w-5/12 xl:w-9/12 px-6 py-4 xl:px-8 xl:py-5 rounded-s-[50px] "
            type="text"
          />
          <div className="2xl:w-3/12 bg-green-500 flex items-center justify-center rounded-e-[50px] font-semibold text-black text-lg xl:text-xl px-6 xl:px-10 py-4 xl:py-5">
            <button>Explore</button>
          </div>
        </form>
        <div className="w-full bg-black mt-24 md:mt-32 xl:mt-40 rounded-[20px] px-4 py-3 md:px-8 xl:px-12 md:py-7 grid grid-cols-2 md:grid-cols-4 md:place-items-center gap-4 md:gap-0">
          <HeroBadge className="md:border-r md:pr-10 xl:pr-20 2xl:pr-32 border-[#353535]" title="382M" subtitle="Hotel Available" icon={<KosIcon className="w-12 h-12 xl:w-16 xl:h-16" />} />
          <HeroBadge className="md:border-r md:pr-10 xl:pr-20 2xl:pr-32 border-[#353535]" title="9/10" subtitle="People Happy" icon={<PeopleHappyIcon className="w-12 h-12 xl:w-16 xl:h-16"  />} />
          <HeroBadge className="md:border-r md:pr-10 xl:pr-20 2xl:pr-32 border-[#353535]" title="100%" subtitle="High Security" icon={<SecurityIcon className="w-12 h-12 xl:w-16 xl:h-16"  />} />
          <HeroBadge className="md:pr-10 xl:pr-20 2xl:pr-32 " title="183" subtitle="Countries" icon={<CountriesIcon className="w-12 h-12 xl:w-16 xl:h-16"  />} />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
