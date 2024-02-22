import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface HeroBadgeProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  className? : string
}

const HeroBadge: FC<HeroBadgeProps> = ({ icon, subtitle, title,className }) => {
  return(
    <div className={clsx("flex gap-4 items-center",className)}>
        <div>
            {icon}
        </div>
        <div className="flex flex-col xl:gap-1">
            <p className="text-xl xl:text-3xl font-bold">{title}</p>
            <p className="text-gray-100 ">{subtitle}</p>
        </div>
     </div>

  )
};

export default HeroBadge;
