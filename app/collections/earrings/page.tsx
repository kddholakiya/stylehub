"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface EarringProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  onSale?: boolean;
  category: string;
}

const earringsData: EarringProduct[] = [
  {
    id: "1",
    name: "Oxidized Silver Studs",
    price: 150,
    originalPrice: 200,
    image: "/1.png",
    onSale: true,
    category: "studs",
  },
  {
    id: "2",
    name: "Dangle Drop Earrings",
    price: 180,
    image: "/2.png",
    category: "dangles",
  },
  {
    id: "3",
    name: "Hoop Earrings",
    price: 120,
    image: "/3.png",
    category: "hoops",
  },
  {
    id: "4",
    name: "Chandelier Earrings",
    price: 220,
    originalPrice: 280,
    image: "/4.png",
    onSale: true,
    category: "chandeliers",
  },
  {
    id: "5",
    name: "Cluster Earrings",
    price: 160,
    image: "/5.png",
    category: "clusters",
  },
  {
    id: "6",
    name: "Statement Earrings",
    price: 200,
    image: "/6.png",
    category: "statement",
  },
  {
    id: "7",
    name: "Minimalist Earrings",
    price: 90,
    image: "/7.png",
    category: "minimalist",
  },
  {
    id: "8",
    name: "Kundan Earrings",
    price: 250,
    originalPrice: 320,
    image: "/8.png",
    onSale: true,
    category: "kundan",
  },
];

const categories = ["All", "studs", "dangles", "hoops", "chandeliers", "clusters", "statement", "minimalist", "kundan"];

export default function EarringsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(300);

  const filteredEarrings = earringsData.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const priceMatch = item.price <= priceRange;
    return categoryMatch && priceMatch;
  });

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full bg-[#F5F1EB]  py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#2B2B2B] mb-4">
            Earrings Collection
          </h1>
          <p className="text-lg sm:text-xl text-[#5A5143] max-w-2xl mx-auto">
            Discover our exquisite range of oxidized earrings, crafted to enhance every moment.
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="bg-[#e6e5e1] p-6 rounded-lg">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-[#2B2B2B]">Category</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded transition-all ${
                        selectedCategory === category
                          ? "bg-[#C9A87A] text-white font-medium"
                          : "text-[#5A5143] hover:bg-[#E8D4B0]"
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#2B2B2B]">Price Range</h3>
                <Slider
                  min={0}
                  max={300}
                  step={1}
                  value={[priceRange]}
                  onValueChange={(value) => setPriceRange(value[0])}
                  className="w-full"
                />
                <p className="mt-2 text-sm text-[#5A5143]">Up to ${priceRange}</p>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            {filteredEarrings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEarrings.map((earring, index) => (
                  <motion.div
                    key={earring.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    {/* Product Card */}
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      {/* Image Container */}
                      <div className="relative w-full aspect-square bg-white hover:bg-[#C8BDA7] overflow-hidden flex items-center justify-center">
                        <Image
                          src={`/Earring/${earring.image}`}
                          alt={earring.name}
                          width={300}
                          height={300}
                          className="w-4/5 h-4/5 object-cover group-hover:scale-110 transition-transform duration-300"
                          unoptimized
                        />

                        {/* Sale Badge */}
                        {earring.onSale && (
                          <div className="absolute top-4 right-4 bg-[#C9A87A] text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-semibold">
                            Sale
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h4 className="text-base font-medium text-[#2B2B2B] mb-2 truncate">
                          {earring.name}
                        </h4>

                        {/* Pricing */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-lg font-semibold text-[#C9A87A]">
                            ${earring.price}
                          </span>
                          {earring.originalPrice && (
                            <span className="text-sm text-neutral-400 line-through">
                              ${earring.originalPrice}
                            </span>
                          )}
                        </div>

                        {/* Add to Cart Button */}
                        <Button className="w-full bg-[#3E3124] hover:bg-[#2E241B] text-[#F5E9D0] rounded-md py-2">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-lg text-neutral-500">No earrings found in this price range.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
