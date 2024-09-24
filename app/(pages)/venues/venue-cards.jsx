import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function VenueCards() {
    const buildings = [
        {
            id: 1,
            name: "Downtown Loft",
            image: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 150,
            price: 1000,
            amenities: ["WiFi", "Catering", "AV Equipment"],
            address: "123 Main St, Downtown"
        },
        {
            id: 2,
            name: "Waterfront Hall",
            image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 300,
            price: 2000,
            amenities: ["Parking", "Outdoor Space", "Stage"],
            address: "456 Harbor View, Seaside"
        },
        {
            id: 3,
            name: "Garden Pavilion",
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 200,
            price: 1500,
            amenities: ["Gardens", "Catering", "Parking"],
            address: "789 Green Ave, Suburbia"
        },
        {
            id: 4,
            name: "Mountain View Lodge",
            image: "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 100,
            price: 800,
            amenities: ["Mountain Views", "Fireplace", "Outdoor Space"],
            address: "321 Pine Rd, Wilderness"
        },
        {
            id: 5,
            name: "City Center Hotel",
            image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 250,
            price: 3000,
            amenities: ["Hotel", "Restaurant", "Conference Rooms"],
            address: "555 City Center, Metropolis"
        },
        {
            id: 6,
            name: "Beachfront Resort",
            image: "https://images.unsplash.com/photo-1507525428034-8717edc887ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 180,
            price: 2200,
            amenities: ["Beachfront", "Pool", "Gym"],
            address: "777 Sand Blvd, Paradise"
        },
        {
            id: 7,
            name: "Rustic Barn",
            image: "https://images.unsplash.com/photo-1555417303-0232892d228b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 120,
            price: 1800,
            amenities: ["Barn", "Farm", "Outdoor Space"],
            address: "999 Farm Rd, Countryside"
        },
        {
            id: 8,
            name: "Historic Castle",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 80,
            price: 2500,
            amenities: ["Castle", "Historic", "Gardens"],
            address: "111 Castle Hill, History"
        },
        {
            id: 9,
            name: "Modern Skyscraper",
            image: "https://images.unsplash.com/photo-1522708323590-96e9d185919a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 500,
            price: 5000,
            amenities: ["Skyscraper", "City Views", "Conference Rooms"],
            address: "999 Tower St, Metropolis"
        },
        {
            id: 10,
            name: "Vineyard Estate",
            image: "https://images.unsplash.com/photo-1560448208-9b94570ba800?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 100,
            price: 1200,
            amenities: ["Vineyard", "Wine Tasting", "Outdoor Space"],
            address: "123 Vineyard Rd, Wine Country"
        },
        {
            id: 11,
            name: "Mountain View Lodge",
            image: "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            capacity: 100,
            price: 800,
            amenities: ["Mountain Views", "Fireplace", "Outdoor Space"],
            address: "321 Pine Rd, Wilderness"
        }
    ]
    return (
        <section id="venues" className="py-10">
            <div className="px-4 md:px-6 mx-auto">
                <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {buildings.map((building) => (
                        <div key={building.id}>
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <Image
                                    src={building.image}
                                    alt={building.name}
                                    width={600}
                                    height={400}
                                    className="w-full object-cover h-64"
                                />
                                <CardHeader>
                                    <CardTitle className="text-2xl">{building.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold text-primary">${building.price}</p>
                                    <p className="text-sm text-gray-500 mb-4">per day</p>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <Users className="mr-2 h-5 w-5 text-primary" />
                                            <span>Capacity: {building.capacity}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="mr-2 h-5 w-5 text-primary" />
                                            <span>{building.address}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {building.amenities.map((amenity, index) => (
                                                <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Link href={`/venues/${building.id}`} passHref className="w-full">
                                        <Button className="w-full text-lg">
                                            Book Now
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
