import Image from "next/image";
import React , {FC} from "react"

interface HeroProps {
}

const Hero : FC<HeroProps> = ({}) => {
  return (
    <section className="min-h-screen relative w-full">
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="relative top-56 z-10">
        content hero
      </div>
    </section>
  );
}

export default Hero