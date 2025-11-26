"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  onSale?: boolean;
}

const menProducts: Product[] = [
  { id: "m1", name: "Oxidized Cuff", price: 120, image: "/explore/men-1.png" },
  { id: "m2", name: "Signet Ring", price: 150, image: "/explore/men-2.png", onSale: true },
  { id: "m3", name: "Beaded Bracelet", price: 95, image: "/explore/men-3.png" },
  { id: "m4", name: "Pendant Chain", price: 140, image: "/explore/men-4.png" },
];

const womenProducts: Product[] = [
  { id: "w1", name: "Kundan Necklace", price: 320, image: "/explore/women-1.png", onSale: true },
  { id: "w2", name: "Delicate Earrings", price: 90, image: "/explore/women-2.png" },
  { id: "w3", name: "Statement Ring", price: 210, image: "/explore/women-3.png" },
  { id: "w4", name: "Layered Necklace", price: 180, image: "/explore/women-4.png" },
];

export default function ExplorePage() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#F5F1EB] py-12 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2B2B2B] mb-4">Explore Collections</h1>
          <p className="text-[#5A5143] max-w-2xl mx-auto">Browse curated pieces for men and women — handcrafted oxidized jewelry designed for every style.</p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Men Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-[#2B2B2B]">For Men</h2>
                <p className="text-sm text-[#5A5143]">Bold oxidized pieces with masculine silhouettes and heirloom finish.</p>
              </div>
              <Link href="/collections/bracelets">
                <Button className="bg-[#3E3124] hover:bg-[#2E241B] text-[#F5E9D0]">Shop Men's</Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {menProducts.map((p) => (
                <div key={p.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center">
                    <Image src={p.image} alt={p.name} width={300} height={300} className="w-4/5 h-4/5 object-contain" unoptimized />
                    {p.onSale && <div className="absolute top-3 right-3 bg-[#C9A87A] text-white rounded-full w-10 h-10 flex items-center justify-center text-xs font-semibold">Sale</div>}
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-[#2B2B2B] truncate">{p.name}</h4>
                    <div className="text-[#C9A87A] font-semibold mt-2">${p.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Women Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-[#2B2B2B]">For Women</h2>
                <p className="text-sm text-[#5A5143]">Delicate and statement pieces curated for feminine elegance.</p>
              </div>
              <Link href="/collections/necklaces">
                <Button className="bg-[#3E3124] hover:bg-[#2E241B] text-[#F5E9D0]">Shop Women's</Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {womenProducts.map((p) => (
                <div key={p.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center">
                    <Image src={p.image} alt={p.name} width={300} height={300} className="w-4/5 h-4/5 object-contain" unoptimized />
                    {p.onSale && <div className="absolute top-3 right-3 bg-[#C9A87A] text-white rounded-full w-10 h-10 flex items-center justify-center text-xs font-semibold">Sale</div>}
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-[#2B2B2B] truncate">{p.name}</h4>
                    <div className="text-[#C9A87A] font-semibold mt-2">${p.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

