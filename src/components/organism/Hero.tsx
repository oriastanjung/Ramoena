import React , {FC} from "react"

interface HeroProps {
}

const Hero : FC<HeroProps> = ({}) => {
  return (
      <div className="min-h-screen bg-hero bg-cover bg-center w-full"> Hero </div>
  );
}

export default Hero