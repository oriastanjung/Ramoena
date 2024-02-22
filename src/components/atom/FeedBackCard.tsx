import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";
import { IoStarSharp } from "react-icons/io5";

interface FeedBackCardProps {
  className?: string;
  stars: number;
  feedback: string;
  profile: string;
  name: string;
  job: string;
}

const FeedBackCard: FC<FeedBackCardProps> = ({
  className,
  feedback,
  job,
  name,
  profile,
  stars,
}) => {
  return (
    <div
      className={clsx(
        "bg-black rounded-3xl px-5 py-4 flex flex-col justify-between",
        className
      )}
    >
      <div>
        <div className="flex gap-1 items-center">
          {Array.from({ length: stars }).map((_, idx) => (
            <IoStarSharp key={idx} className="text-green-500 text-xl" />
          ))}
        </div>
        <p className="text-xl leading-relaxed mt-5 xl:w-3/4 line-clamp-3 ">{feedback}</p>
      </div>
      <div>
        <div className="mt-5 flex items-center gap-3">
          <div className="rounded-full overflow-hidden">
            <Image
              src={profile}
              alt={name}
              width={400}
              height={400}
              quality={100}
              className="w-12 h-12"
            />
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-100">{job}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
