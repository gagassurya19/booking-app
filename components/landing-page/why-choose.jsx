import { motion } from "framer-motion"
import { Users, Calendar, CheckCircle } from "lucide-react"

export default function WhyChoose() {
    return (
        <section id="features" className="w-full py-28 bg-white">
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
    )
}

