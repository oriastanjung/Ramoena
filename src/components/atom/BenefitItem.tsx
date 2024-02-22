import React, { FC } from "react";
import { FaCircleCheck } from "react-icons/fa6";
interface BenefitItemProps {
  className?: string;
  data: string;
}

const BenefitItem: FC<BenefitItemProps> = ({ className, data }) => {
  return (
    <div className="flex flex-row items-center gap-3 text-lg font-semibold" >
      <FaCircleCheck className="text-green-500 w-8 h-8 bg-white rounded-full" />
      {data}
    </div>
  );
};

export default BenefitItem;
