'use client'
import Auction from "@/components/Auction";
import Hero from "../../components/Hero";


export default function Home() {
 
  return (
    <main className="">
      <section className="w-full h-dvh bg-emerald-200 flex items-center">
        <Hero/>
      </section>
      <section id="auction" className="pt-8">
      <Auction/>
      </section>
    </main>
  );
}
