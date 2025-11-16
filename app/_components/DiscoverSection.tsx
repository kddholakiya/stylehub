"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const DiscoverSection = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-2.png"
          alt="Jewelry Collection"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-4xl"
        >
          {/* Discover Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white uppercase mb-2 md:mb-3 tracking-widest font-semibold"
          >
            <Image src={"/image.png"} alt="Decorative" width={130} height={130} className="inline-block opacity-40  mr-2 mb-1 invert-100" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4 md:mb-5 leading-relaxed  px-4"
          >
            Discover timeless elegance with our stunning oxidized jewelry collection.
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed font-medium tracking-tight px-4 max-w-3xl mx-auto"
          >
             Elevate your Navratri look and sparkle on wedding nights with pieces crafted to captivate.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/shop"
              className="inline-block px-8 sm:px-10 md:px-12 lg:px-14 py-3 md:py-3.5 bg-white/90 hover:bg-white text-[#2B2B2B] font-medium text-sm md:text-base tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
            >
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverSection;