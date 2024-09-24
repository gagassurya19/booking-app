import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import { MenuIcon } from "lucide-react"
import { LogIn, UserPlus } from "lucide-react"

export default function Navbar() {
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
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center">
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
                        onClick={(e) => handleNavClick(e, 'wt')}
                    >
                        Testimonials
                    </a>
                    <a
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="#testimonials"
                        onClick={(e) => handleNavClick(e, 'aboutus')}
                    >
                        Our Team
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
            </div>
        </header>
    )
}

