import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ContactExpert() {
    return (
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
    )
}

