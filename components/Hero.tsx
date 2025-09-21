'use server'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import HeroImage from "../public/images/heroImg.png"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const HeroCarousel = () => {
  
  return(
    <Carousel
        plugins={[
          Autoplay({
            delay: 2000
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
            <Image src={HeroImage} alt="hero car" width={600} height={600}/>
        </CarouselItem>
        <CarouselItem className="basis-1/1">
            <Image src={HeroImage} alt="hero car" width={600} height={600}/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

const Hero = () => {
  return (
    <section className="w-full max-w-5/6 mx-auto flex items-center justify-between">
        <div className="w-1/2 flex flex-col items-start justify-between gap-3">
            <p className="font-shneBreit font-medium text-black border-1 border-black/50 rounded-lg p-1">Best place to get the <span>Cars</span></p>
            <h1 className="font-shneBreit font-bold text-5xl">Bid. Win. Drive.</h1>
            <h3 className="font-shneBreit text-2xl">Your gateway to affordable cars through transparent, fast, and exciting online auctions.</h3>
            <div className="flex items-center gap-6">
                <Button>Start Bidding</Button>
                <Button variant='outline'>Browse Auction</Button>
            </div>
        </div>
        <div className="w-1/2">
            <HeroCarousel/>
        </div>
    </section>
  )
}
export default Hero