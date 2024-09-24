import {
    FaApple,
    FaDiscord,
    FaRedditAlien,
    FaTelegramPlane,
    FaTwitter,
    FaAndroid
} from 'react-icons/fa';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const sections = [
    {
        title: 'Product',
        links: [
            { name: 'Overview', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Marketplace', href: '#' },
            { name: 'Features', href: '#' },
            { name: 'Integrations', href: '#' },
            { name: 'Pricing', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About', href: '#' },
            { name: 'Team', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Contact', href: '#' },
            { name: 'Privacy', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'Help', href: '#' },
            { name: 'Sales', href: '#' },
            { name: 'Advertise', href: '#' },
        ],
    },
];

const Footer = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto">
                <footer className='mx-10'>
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <div className='mb-8 mr-auto h-7 md:mb-0'>
                            <Link className="flex items-center justify-center" href="#">
                                <MapPin className="h-6 w-6 mr-2 text-primary" />
                                <span className="font-bold text-xl">EventSpace</span>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 md:flex-row md:items-center">
                            <p className="text-lg font-medium">
                                Playstore and Appstore Coming Soon.
                            </p>
                            <div className="flex gap-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-lg bg-primary p-2.5"
                                >
                                    <FaApple className="size-7 text-background" />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-lg bg-primary p-2.5"
                                >
                                    <FaAndroid className="size-7 text-background" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-14" />
                    <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold">{section.title}</h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="font-medium hover:text-primary"
                                        >
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div>
                            <h3 className="mb-4 font-bold">Legal</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Term of Services</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                            <div className='hidden md:block'>
                                <h3 className="mb-4 mt-8 font-bold">Social</h3>
                                <ul className="flex items-center space-x-6 text-muted-foreground">
                                    <li className="font-medium hover:text-primary">
                                        <a href="#">
                                            <FaDiscord className="size-6" />
                                        </a>
                                    </li>
                                    <li className="font-medium hover:text-primary">
                                        <a href="#">
                                            <FaRedditAlien className="size-6" />
                                        </a>
                                    </li>
                                    <li className="font-medium hover:text-primary">
                                        <a href="#">
                                            <FaTwitter className="size-6" />
                                        </a>
                                    </li>
                                    <li className="font-medium hover:text-primary">
                                        <a href="#">
                                            <FaTelegramPlane className="size-6" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='block md:hidden'>
                            <h3 className="mb-4 mt-8 font-bold">Social</h3>
                            <ul className="flex items-center space-x-6 text-muted-foreground">
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaDiscord className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaRedditAlien className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaTwitter className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaTelegramPlane className="size-6" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Separator className="my-14" />
                    <p className="text-sm text-muted-foreground">
                        © 2024 EventSpace. All rights reserved.
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Footer;
