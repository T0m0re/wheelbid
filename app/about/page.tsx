import Globe from "@/components/ui/Globe"

const About = () => {
  return (
    <main className="w-full max-w-5/6 mx-auto">
      <section className="w-full h-dvh flex flex-col lg:flex-row items-center flex-1">
        <div className="flex flex-col">
          <h2 className="font-shneBreit font-bold text-lg">ABOUT US</h2>
          <p className="font-shneBreit ">Whether you’re a first-time buyer, a dealer, or just someone looking for the best deal, WheelBid makes it simple to connect with vehicles you love at prices that make sense.</p>
        </div>
        <div className="flex-1">
          <Globe/>
        </div>
       
      </section>
    </main>
  )
}

export default About