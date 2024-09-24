import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Testimoni() {
    return (
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
    )
}

