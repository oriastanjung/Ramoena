import Benefits from "@/components/organism/Benefits";
import Categories from "@/components/organism/Categories";
import FeedBack from "@/components/organism/FeedBack";
import Hero from "@/components/organism/Hero";
import Latest from "@/components/organism/Latest";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Latest />
      <Categories />
      <Benefits />
      <FeedBack />
    </main>
  );
}
