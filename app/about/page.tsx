"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#F5F1EB] py-16 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2B2B2B] mb-4">About Us</h1>
          <p className="max-w-3xl mx-auto text-[#5A5143] text-lg md:text-xl">
            At OxyJewels we craft timeless oxidized jewelry that brings a touch of heritage to modern style. Our pieces are handcrafted with care, honoring traditional techniques while embracing contemporary design.
          </p>
        </div>
      </motion.section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2B2B2B] mb-4">Our Craft</h2>
            <p className="text-[#5A5143] mb-6">Each piece is crafted by skilled artisans using time-honored methods. We source materials responsibly and prioritize durability and beauty.</p>
            <ul className="text-[#5A5143] space-y-2">
              <li>• Handcrafted techniques</li>
              <li>• Ethically sourced materials</li>
              <li>• Small-batch production</li>
            </ul>

            <div className="mt-8">
              <Button className="bg-[#3E3124] hover:bg-[#2E241B] text-[#F5E9D0]">Learn More</Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
              <Image src="/about-photo.png" alt="Crafting" width={720} height={480} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f9f7f4] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-4">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Quality</h4>
              <p className="text-sm text-[#5A5143]">We ensure each item meets high standards for longevity and finish.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Sustainability</h4>
              <p className="text-sm text-[#5A5143]">We minimize waste and work with responsible suppliers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Community</h4>
              <p className="text-sm text-[#5A5143]">We support artisan communities and celebrate craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

