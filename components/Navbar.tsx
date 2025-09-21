'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Menu } from "lucide-react"
import { useState } from "react"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-800 tracking-tight">WheelBid</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
            <HoverCard>
              <HoverCardTrigger asChild>
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
          <Link 
            href="/blog" 
            className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
          >
            Blog
          </Link>

        </div>
          <div className="flex items-center gap-3">
            <Button className="cursor-pointer">
              Sign Up
            </Button>
            <Menu className="w-10 h-10 md:hidden font-bold" onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}/>
          </div>
      </div>

      {isMobileMenuOpen && <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>}
    </nav>
  )
}
export default Navbar