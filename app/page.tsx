import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Amenities } from "@/components/amenities"
import { Photos } from "@/components/photos"
import { Location } from "@/components/location"
import { Guestbook } from "@/components/guestbook"
import { Inquiries } from "@/components/inquiries"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* <TopBar /> */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Photos />
        <Location />
        <Guestbook />
        <Inquiries />
      </main>
      <Footer />
    </div>
  )
}
