'use client'
import Globe from "@/components/ui/Globe"
import Image from "next/image"
import Toyota from '../../public/icons/Toyota_carlogo.svg'
import Visa from '../../public/icons/Visa.svg'
import Alianze from '../../public/icons/Allianz.svg'
import Paypal from '../../public/icons/PayPal.svg'
import Porsche from '../../public/icons/Porsche.svg'
import Benz from '../../public/icons/Mercedes-Benz.svg'
import Baker from '../../public/icons/Baker_McKenzie.svg'
import Maguire from '../../public/images/about-man.jpg'
import KunleAfo from '../../public/images/about-man-1.jpg'
import TechBro from '../../public/images/about-man-3.jpg'
import JJC from '../../public/images/about-woman.jpg'
import OgunMeps from '../../public/images/about-woman-1.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import { CornerDownRight } from "lucide-react"
import { useState } from "react"

function CarouselSize() {
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)


  return (
    <Carousel
      opts={{
        align: "start",
      }}
      setApi={(api) => {
        if(!api) return

        setCount(api.scrollSnapList().length)

        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", ()=>{
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }}
      className="w-full"
    >
      <div className="flex flex-col gap-4">
      <CarouselContent className="gap-4">
          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
              <div className="rounded-md">
                <div className="aspect-square p-0 relative">
                  <Image src={Maguire} alt="Harry Maguire" width={200} height={400} className="w-full rounded-md"/> 
                <div className="absolute left-0 right-0 bottom-0 bg-linear-to-t from-emerald-400/70 to-emerald-200/10 max-h-1/4 px-2 py-4 rounded-b-md">
                    <div className="flex flex-col items-start justify-between">
                      <h3 className="font-shneBreit font-medium text-sm capitalize text-white">CEO & CoFounder</h3>
                      <p className="font-shneBreit font-bold text-xl">Harry Mags</p>
                      <Link href="#">
                        <p className="underline">LinkedIn</p>
                      </Link>
                    </div>
                </div>
                </div>
              </div>
          </CarouselItem>

          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
              <div className="rounded-md">
                <div className="aspect-square p-0 relative">
                  <Image src={KunleAfo} alt="Harry Maguire" width={200} height={400} className="w-full rounded-md"/> 
                <div className="absolute left-0 right-0 bottom-0 bg-linear-to-t from-emerald-400/70 to-emerald-200/10 max-h-1/4 px-2 py-4 rounded-b-md">
                    <div className="flex flex-col items-start justify-between">
                      <h3 className="font-shneBreit font-medium text-sm capitalize text-white">CTO</h3>
                      <p className="font-shneBreit font-bold text-xl">Kunle Affo</p>
                      <Link href="#">
                        <p className="underline">LinkedIn</p>
                      </Link>
                    </div>
                </div>
                </div>
              </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
              <div className="rounded-md">
                <div className="aspect-square p-0 relative">
                  <Image src={JJC} alt="Harry Maguire" width={200} height={400} className="w-full rounded-md"/> 
                <div className="absolute left-0 right-0 bottom-0 bg-linear-to-t from-emerald-400/70 to-emerald-200/10 max-h-1/4 px-2 py-4 rounded-b-md">
                    <div className="flex flex-col items-start justify-between">
                      <h3 className="font-shneBreit font-medium text-sm capitalize text-white">Head Of Logistics</h3>
                      <p className="font-shneBreit font-bold text-xl">JJC</p>
                      <Link href="#">
                        <p className="underline">LinkedIn</p>
                      </Link>
                    </div>
                </div>
                </div>
              </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
              <div className="rounded-md">
                <div className="aspect-square p-0 relative">
                  <Image src={OgunMeps} alt="Harry Maguire" width={200} height={400} className="w-full rounded-md"/> 
                <div className="absolute left-0 right-0 bottom-0 bg-linear-to-t from-emerald-400/70 to-emerald-200/10 max-h-1/4 px-2 py-4 rounded-b-md">
                    <div className="flex flex-col items-start justify-between">
                      <h3 className="font-shneBreit font-medium text-sm capitalize text-white">Head Of Service</h3>
                      <p className="font-shneBreit font-bold text-xl">OgunMeps</p>
                      <Link href="#">
                        <p className="underline">LinkedIn</p>
                      </Link>
                    </div>
                </div>
                </div>
              </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
              <div className="rounded-md">
                <div className="aspect-square p-0 relative">
                  <Image src={TechBro} alt="Harry Maguire" width={200} height={400} className="w-full rounded-md"/> 
                <div className="absolute left-0 right-0 bottom-0 bg-linear-to-t from-emerald-400/70 to-emerald-200/10 max-h-1/4 px-2 py-4 rounded-b-md">
                    <div className="flex flex-col items-start justify-between">
                      <h3 className="font-shneBreit font-medium text-sm capitalize text-white">Head of tech</h3>
                      <p className="font-shneBreit font-bold text-xl">Alesh Tomore</p>
                      <Link href="#">
                        <p className="underline">LinkedIn</p>
                      </Link>
                    </div>
                </div>
                </div>
              </div>
          </CarouselItem>

          
      </CarouselContent>

      <div className="w-full flex items-center justify-between gap-6">
        <div className="flex-1 flex items-center justify-center">
          <span className="w-full h-[3.5] bg-gray-500 rounded-2xl relative z-2"
          >
            <span className="absolute left-0 top-0 bg-emerald-500 h-[3.5] z-3 transition-all duration-500 ease-in-out" 
            style={{width:  `${(current / count) * 100}%`}}></span>
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <CarouselPrevious className="relative bg-emerald-700 text-white rounded-md" />
          <CarouselNext className="relative bg-emerald-700 text-white rounded-md"/>
        </div>
          
      </div>
      </div>
    </Carousel>
  )
}


const About = () => {
  return (
    <main className="w-full">
      <section className="bg-emerald-200/25 w-full h-dvh flex items-center justify-between">
        <div className="flex flex-col lg:flex-row w-full max-w-5/6 mx-auto">
          <div className="flex flex-col gap-4 pt-14">
            <h2 className="font-shneBreit font-bold text-lg text-black">ABOUT US</h2>
            <p className="font-shneBreit text-2xl font-medium md:max-w-2/3 capitalize">Whether you’re a first-time buyer, a dealer, or just someone looking for the best deal, WheelBid makes it simple to connect with vehicles you love at prices that make sense.</p>
          </div>
        <div className="flex-1">
          <Globe/>
        </div>
      </div>
      </section>
      
      <section className="w-full max-w-4/6 mx-auto py-10">
        <div className="flex items-center justify-between">
          <h2 className="font-shneBreit font-bold text-lg text-black w-1/4 self-start">Our Mission:</h2>
          <div className="flex- flex-col items-start flex-1">
            <p className="text-xl font-shneBreit font-medium mb-4">To make car ownership accessible and enjoyable by giving everyone the chance to win their perfect car through fair, transparent, and hassle-free online auctions.</p>
            <p className="text-xl font-shneBreit font-medium">At WheelBid, we’re redefining how people buy and sell cars. We’ve built a transparent, fast, and exciting online car auction platform where every bid brings you closer to your dream ride.</p>
          </div>
        </div>
       
       <div className="py-10 border-y-1 border-black my-12">
        <div className="flex flex-col items-center justify-between gap-6">
          <h3 className="font-shneBreit font-bold text-xl text-black">Proudly Partnered With Industry Leaders</h3>
          <div className="w flex flex-wrap items-center justify-center gap-3">
            <Image src={Toyota} alt="toyota" width={100} height={100} className="grayscale hover:grayscale-0 transition duration-300"/>
            <Image src={Visa} alt="toyota" width={100} height={100} className="grayscale hover:grayscale-0 transition duration-300"/>
            <Image src={Alianze} alt="toyota" width={100} height={100} className="grayscale hover:grayscale-0 transition duration-300"/>
            <Image src={Paypal} alt="toyota" width={100} height={100} className="grayscale hover:grayscale-0 transition duration-300"/>
            <Image src={Porsche} alt="toyota" width={100} height={100} className="grayscale hover:grayscale-0 transition duration-300"/>
            <Image src={Benz} alt="toyota" width={100} height={100} className="grayscale hover:grayscale-0 transition duration-300"/>
            <Image src={Baker} alt="toyota" width={100} height={100} className="grayscale hover:grayscale-0 transition duration-300"/>
          </div>
        </div>
       </div>
      </section>

       <section className="w-full max-w-4/6 mx-auto py-10">
        <div className="flex flex-col items-start gap-10">
          <div className="w-full">
            <h3 className="capitalize font-shneBreit font-bold text-lg text-black mb-2">Say Hello to our team</h3>
            <p className="uppercase font-shneBreit text-sm font-medium">Build by a group of me myself and I</p>
          </div>

          <div className="w-full ">
            <CarouselSize/> 
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:justify-baseline ">
            <div className="flex-1 flex flex-col items-start justify-between gap-2">
              <h3 className="capitalize font-shneBreit font-bold text-lg text-black mb-2">Careers</h3>
              <p className="uppercase font-shneBreit text-sm font-medium">Help safeguard the global auctioning system</p>
              <Link href="/careers" className="hover:text-emerald-900">
              <span className="inline-flex items-center justify-center gap-1">
                <CornerDownRight className="text-black/60"/>
                <span className="underline">See open roles</span>
              </span>
              </Link>
            </div>
            <div className="flex-1">
              <p>At Wheelbid, you’ll be working in a dynamic, fast-paced environment where creativity and problem-solving go hand in hand. From team brainstorming sessions to hands-on projects, we ensure every role contributes to our mission of making car auctions seamless.</p>
            </div>
          </div>

          <div>

          </div>
        </div>
       </section>
    </main>
  )
}

export default About