"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface CollectionCardProps {
  id: string;
  title: string;
  image: string;
  link: string;
}

const collections: CollectionCardProps[] = [
  {
    id: "bracelets",
    title: "BRACELETS",
    image: "/bracelate.png",
    link: "/collections/bracelets",
  },
  {
    id: "earrings",
    title: "EARRINGS",
    image: "/earrings.png",
    link: "/collections/earrings",
  },
  {
    id: "necklaces",
    title: "NECKLACES",
    image: "/necklace.png",
    link: "/collections/necklaces",
  },
  {
    id: "rings",
    title: "RINGS",
    image: "/ring.png",
    link: "/collections/rings",
  },
];

const PopularCollections = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#2B2B2B] mb-6 tracking-wide">
            POPULAR COLLECTIONS
          </h2>

          <div className="flex justify-center items-center gap-4">
            <div className="h-px w-20 bg-[#C9A87A]" />
            <span className="text-xl text-[#C9A87A] tracking-widest">★ ★ ★</span>
            <div className="h-px w-20 bg-[#C9A87A]" />
          </div>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8"
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              className="group"
            >
              <Link href={collection.link} className="block">

                {/* Card Container */}
                <div className="relative bg-white rounded-sm overflow-hidden shadow-md 
                hover:shadow-2xl transition-all duration-500 ease-out 
                transform hover:-translate-y-2 
                h-[320px] sm:h-[360px] md:h-[380px] flex flex-col">

                  {/* Image Section */}
                  <div className="relative w-full flex-1 bg-gradient-to-br from-gray-50 to-gray-100 
                  flex items-center justify-center p-2
                  group-hover:bg-gradient-to-br group-hover:from-[#FFF8F0] group-hover:to-[#F9EAD9]
                  transition-all duration-500">

                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        unoptimized
                        className="object-contain transform group-hover:scale-110 
                        transition-transform duration-500 ease-out"
                        priority={index < 2}
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="bg-white p-4 text-center flex-shrink-0">
                    <h3 className="text-base sm:text-lg font-serif font-normal text-[#2B2B2B] tracking-wider mb-2">
                      {collection.title}
                    </h3>

                    <div className="w-10 h-0.5 bg-[#C9A87A] mx-auto mb-2" />

                    <span className="text-[#C9A87A] text-xs sm:text-sm font-medium tracking-wide 
                    hover:text-[#a88758] transition-colors duration-300 inline-block group-hover:underline">
                      See the Collection
                    </span>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularCollections;
