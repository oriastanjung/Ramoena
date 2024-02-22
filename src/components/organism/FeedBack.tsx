import React, { FC } from "react";
import FeedBackCard from "../atom/FeedBackCard";

interface FeedBackProps {}

const FeedBack: FC<FeedBackProps> = ({}) => {
  return (
    <section className="w-full lg:px-4 xl:px-20 mt-9 pt-36 lg:pt-52 mb-24">
      <div className="flex w-full items-center justify-center flex-col">
        <h2 className="font-bold text-3xl">Happy Customers</h2>
        <p className="text-lg text-gray-100 text-center px-4 md:px-0">
          We’d love to come back again soon
        </p>
      </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 px-4 lg:px-0">
        <FeedBackCard
            className="w-full h-full"
            stars={4}
            job="Full-Time Traveler"
            name="Evelin Bie"
            profile="/feedback1.png"
            feedback="I was not so sure if there was a beautiful bedroom, but it was really great experience."
          />
        <FeedBackCard
            className="w-full h-full"
            stars={4}
            job="Full-Time Traveler"
            name="Evelin Bie"
            profile="/feedback1.png"
            feedback="Price was too low yet luxury."
          />
        <FeedBackCard
            className="w-full h-full"
            stars={4}
            job="Full-Time Traveler"
            name="Evelin Bie"
            profile="/feedback1.png"
            feedback="I was not so sure if there was a beautiful bedroom, but it was really great experience."
          />
        <FeedBackCard
            className="w-full h-full"
            stars={4}
            job="Full-Time Traveler"
            name="Evelin Bie"
            profile="/feedback1.png"
            feedback="It’s just amazing, will be back."
          />
        <FeedBackCard
            className="w-full h-full"
            stars={4}
            job="Full-Time Traveler"
            name="Evelin Bie"
            profile="/feedback1.png"
            feedback="I was not so sure if there was a beautiful bedroom, but it was really great experience."
          />
        <FeedBackCard
            className="w-full h-full"
            stars={4}
            job="Full-Time Traveler"
            name="Evelin Bie"
            profile="/feedback1.png"
            feedback="It’s just amazing, will be back."
          />
        <FeedBackCard
            className="w-full h-full"
            stars={4}
            job="Full-Time Traveler"
            name="Evelin Bie"
            profile="/feedback1.png"
            feedback="I was not so sure if there was a beautiful bedroom, but it was really great experience."
          />
        <FeedBackCard
            className="w-full h-full"
            stars={4}
            job="Full-Time Traveler"
            name="Evelin Bie"
            profile="/feedback1.png"
            feedback="During covid I was stayed here and I got a lot of full of supports that I need to keep my body healthy."
          />
        <FeedBackCard
            className="w-full h-full"
            stars={4}
            job="Full-Time Traveler"
            name="Evelin Bie"
            profile="/feedback1.png"
            feedback="I was not so sure if there was a beautiful bedroom, but it was really great experience."
          />
        
        </div>
      
    </section>
  );
};

export default FeedBack;
