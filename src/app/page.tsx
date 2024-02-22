import Categories from "@/components/organism/Categories";
import Hero from "@/components/organism/Hero";
import Latest from "@/components/organism/Latest";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Latest />
      <Categories />
    </main>
  );
}
