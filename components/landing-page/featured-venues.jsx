import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturedVenues() {
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
        }
    ]
    return (
        <section id="venues" className="w-full min-h-screen py-24 bg-gray-50 flex items-center">
        <div className="px-4 md:px-6 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
          >
            Featured Venues
          </motion.h2>
          <div className="container mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {buildings.map((building, index) => (
              <motion.div
                key={building.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
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
                    <Button className="w-full text-lg" asChild>
                      <Link href={`/venues/${building.id}`}>Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" asChild>
              <Link href="/venues">View More</Link>
            </Button>
          </div>
        </div>
      </section>
    )
}

