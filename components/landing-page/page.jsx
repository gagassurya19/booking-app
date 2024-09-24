import Navbar from "./navbar"
import Hero from "./hero"
import FeaturedVenues from "./featured-venues"
import WhyChoose from "./why-choose"
import Testimoni from "./testimoni"
import ContactExpert from "./contact-expert"
import Footer from "../footer"
import AboutUs from "./aboutus"
export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <FeaturedVenues />
                <div id="wt" className="min-h-screen">
                    <WhyChoose />
                    <Testimoni />
                </div>
                <AboutUs />
                <ContactExpert />
            </main>
            <Footer />
        </div>
    )
}