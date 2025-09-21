'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import HeroImage from "../public/images/heroImg.png"
import HeroImage1 from "../public/images/heroImg1.png"
import HeroImage2 from "../public/images/heroImage2.png"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Lamborgini, { Benz, BMW, Chevrolet, Ford, SvgIcon } from "@/public/icons/HeroIcons"
const HeroCarousel = () => {
  
  return(
    <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
          })
        ]}
      // orientation="vertical"
      className="w-full"
    >
      <CarouselContent className="w-full">
        <CarouselItem className="w-full">
            <Image src={HeroImage} alt="hero car" width={600} height={600}/>
        </CarouselItem>
        <CarouselItem className="basis-1/1">
            <Image src={HeroImage1} alt="hero car" width={600} height={600}/>
        </CarouselItem>
        <CarouselItem className="basis-1/1">
            <Image src={HeroImage2} alt="hero car" width={600} height={600}/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

const Hero = () => {
  return (
    <section className="w-full max-w-5/6 mx-auto flex flex-col">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col  flex-1 items-start justify-between gap-4 gap-y-6">
            <p className="font-shneBreit font-medium text-black border-y-1 rounded-xs border-black p-1">Best place to get the <span className="font-bold ">Cars</span></p>
            <h1 className="font-shneBreit font-bold text-5xl">Bid. Win. Drive.</h1>
            <h3 className="font-shneBreit text-xl">Your gateway to affordable cars through transparent, fast, and exciting online auctions.</h3>
            <div className="flex items-center gap-6">
                <Button className="cursor-pointer">Start Bidding</Button>
                <Button variant='outline' className="cursor-pointer">Browse Auction</Button>
            </div>
        </div>
        <div className="flex-1">
            <HeroCarousel/>
        </div>
      </div>

      <div className="flex items-center justify-center justify-self-end gap-8 border-y-2 rounded-xs border-black py-4 md:mt-15">
        <Lamborgini/>
        <BMW/>
        <Benz/>
        <SvgIcon/>
        <Ford/>
        <Chevrolet/>
      </div>
    </section>
  )
}
export default Hero