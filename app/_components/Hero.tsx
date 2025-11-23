    

    "use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full bg-[url('/background.png')] bg-cover bg-center overflow-hidden">
      {/* Overlay for brightness control */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.7)]" />

      <div className="relative z-10 container mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-stretch justify-between px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-10 sm:py-14 md:py-20 gap-10 md:gap-12">

        {/* --- Left Text Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 justify-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#2B2B2B] leading-snug sm:leading-tight">
            Where Tradition <br className="hidden sm:block" /> Meets Timeless Grace
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5A5143] max-w-sm sm:max-w-md md:max-w-lg leading-relaxed">
            Explore our exclusive oxidized jewelry designed to celebrate every shade of elegance.
          </p>

          <div className="flex justify-center lg:justify-start w-full pt-3">
            <Button className="bg-[#3E3124] text-[#F5E9D0] hover:bg-[#2E241B] transition-all duration-300 rounded-full px-5 sm:px-7 md:px-8 py-2.5 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg">
              Explore More
            </Button>
          </div>
        </motion.div>

        {/* --- Right Image Section --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full lg:w-1/2 flex justify-center items-center py-6 sm:py-10 lg:py-0"
        >
          {/* Background shape */}
          <div className="relative w-48 sm:w-64 md:w-72 lg:w-96 h-64 sm:h-80 md:h-[420px] lg:h-[520px] bg-[#F9EAD9] rounded-[60px] sm:rounded-[72px] shadow-md overflow-hidden">
            <Image
              src="/model_1.png"
              alt="Style Hub Model"
              fill
              className="object-cover"
              style={{ objectPosition: "40% 50%" }}
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
