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

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>

          <CarouselItem className="">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <Image src={Maguire} alt="Harry Maguire" width={500} height={500} className="w-full"/> 
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
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
      
      <section className="w-full max-w-4/6 mx-auto py-20">
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

       <section className="w-full max-w-4/6 mx-auto py-20">
        <div className="flex flex-col items-start">
          <div className="w-full">
            <h3 className="capitalize font-shneBreit text-lg text-black/70">Say Hello to our team</h3>
            <p className="uppercase font-shneBreit text-sm">Build by a group of me myself and I</p>
          </div>
          <div className="w-full ">
            <CarouselSize/> 
          </div>
        </div>
       </section>
    </main>
  )
}

export default About