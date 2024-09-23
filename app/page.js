'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, CheckCircle, MapPin, Users, LogIn, UserPlus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"

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

export default function LandingPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-white bg-opacity-90 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="#">
          <MapPin className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-xl">EventSpace</span>
        </Link>
        <nav className="ml-auto hidden sm:flex items-center gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#venues"
            onClick={(e) => handleNavClick(e, 'venues')}
          >
            Venues
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#features"
            onClick={(e) => handleNavClick(e, 'features')}
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#testimonials"
            onClick={(e) => handleNavClick(e, 'testimonials')}
          >
            Testimonials
          </a>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth/signin">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/signup">
              <UserPlus className="mr-2 h-4 w-4" /> Register
            </Link>
          </Button>
        </nav>
        <div className="sm:hidden ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="#venues"
                  onClick={(e) => handleNavClick(e, 'venues')}
                >
                  Venues
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="#features"
                  onClick={(e) => handleNavClick(e, 'features')}
                >
                  Features
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="#testimonials"
                  onClick={(e) => handleNavClick(e, 'testimonials')}
                >
                  Testimonials
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/auth/signin">
                  <Button variant="ghost" size="sm">
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </Button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/auth/signup">
                  <Button size="sm">
                    <UserPlus className="mr-2 h-4 w-4" /> Register
                  </Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1">
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <Image
              src="/assets/hero.jpg"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="filter brightness-50"
            />
          </motion.div>
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Find Your Perfect <span className="relative inline-block">
                Event Venue
                <motion.span
                  initial={{ width: 0, left: 0 }}
                  animate={{ width: "100%", left: 0 }}
                  transition={{ duration: 2, delay: 1 }}
                  className="absolute inset-0 bg-primary transform -z-10 mx-2"
                  style={{ originX: 0 }}
                />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 mx-auto max-w-[700px] text-xl sm:text-2xl text-grey-200"
            >
              Browse and book unique spaces for your next event. From intimate gatherings to grand celebrations, we have the ideal venue for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex justify-center gap-4"
            >
              <Button asChild size="lg" className="text-lg">
                <Link href="#venues" onClick={(e) => handleNavClick(e, 'venues')}>Explore Venues</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-primary text-lg">
                How It Works
              </Button>
            </motion.div>
          </div>
        </section>
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
                      <Button className="w-full text-lg">Book Now</Button>
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
        <section id="features" className="w-full py-24 bg-white">
          <div className="px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
            >
              Why Choose EventSpace
            </motion.h2>
            <div className="container mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <Users className="h-16 w-16 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Variety of Spaces</h3>
                <p className="text-gray-500">From intimate rooms to grand halls, find the perfect fit for your event.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <Calendar className="h-16 w-16 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
                <p className="text-gray-500">Simple online booking process with real-time availability.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <CheckCircle className="h-16 w-16 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Verified Venues</h3>
                <p className="text-gray-500">All spaces are vetted for quality and accurately represented.</p>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-24 bg-gray-50">
          <div className="px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
            >
              What Our Clients Say
            </motion.h2>
            <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Perfect for Our Conference</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      "We found the ideal venue for our tech conference. The booking process was smooth, and the space exceeded our expectations."
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm font-medium">- Sarah L., Tech Company CEO</p>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Stunning Wedding Venue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      "EventSpace helped us discover a beautiful location for our wedding. The variety of options made it easy to find exactly what we wanted."
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm font-medium">- Michael & Jessica, Newlyweds</p>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Great for Corporate Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      "We use EventSpace regularly for our company's events. The consistent quality and ease of booking keep us coming back."
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm font-medium">- Robert T., Event Coordinator</p>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-24 bg-primary text-primary-foreground">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Need Help Finding the Perfect Venue?</h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of event experts is here to assist you in finding the ideal space for your next event.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-sm space-y-2"
              >
                <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90" size="lg">
                  Contact an Expert
                </Button>
                <p className="text-xs text-primary-foreground/80">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2023 EventSpace Inc. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}