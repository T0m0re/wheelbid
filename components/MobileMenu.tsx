import { Button } from "@/components/ui/button";
import { X } from "lucide-react"
import Link from "next/link";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
};

const MobileMenu = ({isMobileMenuOpen, setIsMobileMenuOpen}: MobileMenuProps) => {
  return (
    <main className="absolute top-0 w-full h-[100dvh] flex flex-col items-start gap-8 bg-white pt-4 px-4">
        <div className="w-full flex items-center justify-between ">
            <h2 className="font-bold text-xl">Menu</h2>
            <X className="w-8 h-8" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>
        </div>

        <div className="flex flex-col gap-6">
            <ul className="flex flex-col justify-between gap-3 list-none">
                <li className="">
                    <Link href="/auction" className="font-medium text-xl text-gray-700">Auction</Link>
                </li>
                <li className="">
                    <Link href="/auction" className="font-medium text-xl text-gray-700">Feature Auction</Link>
                </li>
                <li className="">
                    <Link href="/auction" className="font-medium text-xl text-gray-700">Ended Auction</Link>
                </li>
            </ul>
            <Button>Auction a Car</Button>
            <ul className="flex flex-col justify-between gap-3 list-none">
                <li className="">
                    <Link href="/auction" className="font-medium text-xl text-gray-700">Membership</Link>
                </li>
                <li className="">
                    <Link href="/auction" className="font-medium text-xl text-gray-700">Blog</Link>
                </li>
            </ul>
        </div>
    </main>
  )
}
export default MobileMenu