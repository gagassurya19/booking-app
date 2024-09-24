import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const people = [
  {
    id: "1301223164",
    name: "Gagas Surya Laksana",
    role: "Frontend & Backend",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
    image: "/teams/gagas.jpeg",
  },
  {
    id: "1301223240",
    name: "Maulana Cahya Magista",
    role: "Frontend",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
    image: "/teams/magista.jpeg",
  },
  {
    id: "1301223219",
    name: "M. Rafi Raihan Akbar",
    role: "Database",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-6.webp",
    image: "/teams/akbar.jpeg",
  },
  {
    id: "1301223102",
    name: "Zuhair Nashif A.",
    role: "Database",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
    image: "/teams/nashif.jpeg",
  },
  {
    id: "1301223292",
    name: "Azrian Risqi Radhitya",
    role: "Database",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
    image: "/teams/azrian.jpeg",
  }
];

const Team1 = () => {
  return (
    <motion.section
      id="aboutus"
      className="min-h-screen py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Meet our team
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          We are a passionate team dedicated to revolutionizing the way people interact with technology.
          Our project aims to create intuitive, accessible, and powerful tools that empower users to achieve more.
        </p>
      </div>
      <div className="mx-auto lg:w-1/2 mt-16 grid gap-x-8 gap-y-16 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {people.map((person, index) => (
          <motion.div
            key={person.id}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{person.name}</p>
            <p className="text-center text-muted-foreground">{person.role}</p>
            <p className="text-center text-muted-foreground">{person.id}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Team1;
