'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-800 tracking-tight">WheelBid</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
            <HoverCard>
              <HoverCardTrigger>
                 <Link 
                  href="/auction" 
                  className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
                >
                  Auction
                </Link>
              </HoverCardTrigger>
              <HoverCardContent align="start" sideOffset={20}>
                <div className="flex flex-col justify-between gap-4">
                  <Link href="/auction/live" className="text-gray-600 font-medium hover:text-gray-700 transition-color">Live Auction</Link>
                  <Link href="/auction/featured" className="text-gray-600 font-medium hover:text-gray-700 transition-color">Featured Auction</Link>
                  <Link href="/auction/past" className="text-gray-600 font-medium hover:text-gray-700 transition-color">Past Auction</Link>
              </div>
              </HoverCardContent>
            </HoverCard>
          <Link 
            href="/sell" 
            className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
          >
            Sell Car
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
          >
            About Us
          </Link>
          <Link 
            href="/membership" 
            className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
          >
            Membership
          </Link>

          <Button className="cursor-pointer">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar