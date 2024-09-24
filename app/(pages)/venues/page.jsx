import VenueCards from "./venue-cards"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Filter from "./filter"
export default function Venues() {
    return (
      <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Filter />
            <VenueCards />
            <Footer />
        </div>
    )
}