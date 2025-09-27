import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// app/(auth)/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  // keep this minimal — no html or body tags here
  return (
    <div className="">
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}
