import Image from "next/image";
import React , {FC} from "react"

interface HeroProps {
}

const Hero : FC<HeroProps> = ({}) => {
  return (
    <div className="min-h-screen relative w-full">
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />{" "}
    </div>
  );
}

export default Hero