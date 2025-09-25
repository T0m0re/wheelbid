'use client'
import Image from "next/image"
import { Card } from "./ui/card"
import HeroImage from "../public/images/auctionImg.jpg"
import Link from "next/link"

const carData = [
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
    {
    "make": "Lamborghini",
    "model": "Gallardo Superleggera",
    "year": 2008,
    "location": "Calgary, AB, Canada",
    "imageUrl":  HeroImage
    },
]

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useScreenSize } from "@/lib/useScreenSize"

import { useState } from "react"

const AuctionDropDown = () => {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="font-bold text-lg border-1 border-black/60 rounded-md px-2 py-1">
            <p className="inline-flex gap-3 items-center">
                Auction <ChevronDown/> 
            </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                <DropdownMenuItem>Live Auction</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Featured Auction</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/auction/end" className="font-medium text-base">Past Auction</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const Auction = () => {
    const width = useScreenSize()
    const [carStartYear, setCarStartYear] = useState("")
    const [carEndYear, setCarEndYear] = useState("")

    const handleStartYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCarStartYear(event.target.value)
    }
    const handleEndYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCarEndYear(event.target.value)
    }
  return (
    <section className="w-full max-w-5/6 mx-auto my-8">
        <div className="mb-3">
        
            {width < 768 ? 
                <AuctionDropDown/> : 
                <h2 className="font-bold text-lg">Auctions</h2>
            }
            <div className="flex flex-col lg:flex-row items-start justify-between gap-3 my-2">
                <div className="flex items-start gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="border-1 py-1 px-3 font-normal rounded-sm">
                            {carStartYear && carEndYear ? 
                                `${carStartYear} - ${carEndYear}`: 
                                "Year"
                            }
                            
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            
                                <div className="flex items-center justify-between gap-2 p-2">
                                    <fieldset>
                                        <select value={carStartYear} onChange={handleStartYearChange} name="start-year" id="start-year" className="font-bold p-2 border-1 border-black/50 rounded-sm">
                                            <option value="2000">2000</option>
                                            <option value="2001">2001</option>
                                            <option value="2002">2002</option>
                                            <option value="2003">2003</option>
                                            <option value="2004">2004</option>
                                            <option value="2005">2005</option>
                                            <option value="2006">2006</option>
                                            <option value="2007">2007</option>
                                            <option value="2008">2008</option>
                                            <option value="2009">2009</option>
                                            <option value="2010">2010</option>
                                            <option value="2011">2011</option>
                                            <option value="2012">2012</option>
                                            <option value="2013">2013</option>
                                            <option value="2014">2014</option>
                                            <option value="2015">2015</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                        </select>
                                    </fieldset>
                                    <span>-</span>
                                    <fieldset>
                                        <select value={carEndYear} onChange={handleEndYearChange} name="end-year" id="end-year" className="font-bold p-2 border-1 border-black/50 rounded-sm">
                                            <option value="2010">2010</option>
                                            <option value="2011">2011</option>
                                            <option value="2012">2012</option>
                                            <option value="2013">2013</option>
                                            <option value="2014">2014</option>
                                            <option value="2015">2015</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                        </select>
                                    </fieldset>
                                </div>
                           
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="border-1 py-1 px-3 font-normal rounded-sm">
                            <p className="inline-flex gap-1 items-center">
                                Transmission <ChevronDown className="w-4 h-4"/> 
                            </p>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>All</DropdownMenuItem>
                            <DropdownMenuItem>Automatic</DropdownMenuItem>
                            <DropdownMenuItem>Manual</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="border-1 py-1 px-3 font-normal rounded-sm">
                            <p className="inline-flex gap-1 items-center">
                                Body Style <ChevronDown className="w-4 h-4"/> 
                            </p>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>Sedan</DropdownMenuItem>
                            <DropdownMenuItem>Hatchback</DropdownMenuItem>
                            <DropdownMenuItem>SUV</DropdownMenuItem>
                            <DropdownMenuItem>Crossover</DropdownMenuItem>
                            <DropdownMenuItem>Coupe</DropdownMenuItem>
                            <DropdownMenuItem>Wagon</DropdownMenuItem>
                            <DropdownMenuItem>Sports</DropdownMenuItem>
                            <DropdownMenuItem>Pickup Truck</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="flex items-start justify-between gap-4">
                    <Link href="/?sorted/no-reserve" className="text-sm text-gray-700 hover:underline">No Reserve</Link>
                    <Link href="/?sorted/no-reserve" className="text-sm text-gray-700 hover:underline">Newly listed</Link>
                    <Link href="/?sorted/no-reserve" className="text-sm text-gray-700 hover:underline">Ending Soon</Link>
                    <Link href="/?sorted/no-reserve" className="text-sm text-gray-700 hover:underline">Low mileage</Link>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {carData.map((cars, i)=> (
                <li key={i} className="list-none">
                    <Link href={`/auction/${cars.year}`}>
                    <Card className="w-full rounded-b-none">
                        <div className="w-full relative">
                            <Image src={cars.imageUrl} alt={cars.make} title={cars.make} width={321} height={210} className="rounded-t-xl w-full"/>
                        </div>
                        <div className="flex flex-col items-start gap-0.5 px-2 py-2 ">
                            <h2 className="font-bold text-lg">{cars.make}</h2>
                            <h3 className="font-medium text-sm">
                                <span className="inline-flex items-center gap-1">
                                    <span className="bg-black text-white text-[9px] font-bold p-1 rounded-xs">INSPECTED</span> 
                                    <span className="bg-emerald-200 text-[9px] font-bold p-1 rounded-xs">NO RESERVE</span>
                                </span>
                                {cars.model}
                            </h3>
                            <p className="text-sm">{cars.year}</p>
                            <p className="text-sm">{cars.location}</p>
                        </div>
                    </Card>
                    </Link>
                </li>
            ))}
        </div>
    </section>
  )
}
export default Auction