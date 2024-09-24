import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
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
    )
}

