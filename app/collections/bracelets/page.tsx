"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface BraceletProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  onSale?: boolean;
  category: string;
}

const braceletsData: BraceletProduct[] = [
  {
    id: "1",
    name: "Oxidized Silver Bangle",
    price: 180,
    originalPrice: 250,
    image: "/1.png",
    onSale: true,
    category: "bangles",
  },
  {
    id: "2",
    name: "Charm Bracelet",
    price: 220,
    image: "/2.png",
    category: "charm",
  },
  {
    id: "3",
    name: "Tennis Bracelet",
    price: 300,
    image: "/3.png",
    category: "tennis",
  },
  {
    id: "4",
    name: "Beaded Bracelet",
    price: 150,
    originalPrice: 200,
    image: "/4.png",
    onSale: true,
    category: "beaded",
  },
  {
    id: "5",
    name: "Link Bracelet",
    price: 280,
    image: "/5.png",
    category: "link",
  },
  {
    id: "6",
    name: "Cuff Bracelet",
    price: 190,
    image: "/6.png",
    category: "cuff",
  },
  {
    id: "7",
    name: "Minimalist Bracelet",
    price: 110,
    image: "/7.png",
    category: "minimalist",
  },
  {
    id: "8",
    name: "Statement Bracelet",
    price: 320,
    originalPrice: 420,
    image: "/8.png",
    onSale: true,
    category: "statement",
  },
];

const categories = ["All", "bangles", "charm", "tennis", "beaded", "link", "cuff", "minimalist", "statement"];

export default function BraceletsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(400);

  const filteredBracelets = braceletsData.filter((item) => {
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
        className="relative w-full bg-[#F5F1EB] py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#2B2B2B] mb-4">
            Bracelets Collection
          </h1>
          <p className="text-lg sm:text-xl text-[#5A5143] max-w-2xl mx-auto">
            Discover our exquisite range of oxidized bracelets, crafted to enhance every wrist.
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
                  max={400}
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
            {filteredBracelets.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBracelets.map((bracelet, index) => (
                  <motion.div
                    key={bracelet.id}
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
                          src={`/Bracelate/${bracelet.image}`}
                          alt={bracelet.name}
                          width={250}
                          height={250}
                          className="w-4/5 h-4/5 object-cover group-hover:scale-110 transition-transform duration-300"
                          unoptimized
                        />

                        {/* Sale Badge */}
                        {bracelet.onSale && (
                          <div className="absolute top-4 right-4 bg-[#C9A87A] text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-semibold">
                            Sale
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h4 className="text-base font-medium text-[#2B2B2B] mb-2 truncate">
                          {bracelet.name}
                        </h4>

                        {/* Pricing */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-lg font-semibold text-[#C9A87A]">
                            ${bracelet.price}
                          </span>
                          {bracelet.originalPrice && (
                            <span className="text-sm text-neutral-400 line-through">
                              ${bracelet.originalPrice}
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
                <p className="text-lg text-neutral-500">No bracelets found in this price range.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
