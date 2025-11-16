"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  onSale: boolean;
}

const products: Product[] = [
  {
    id: "product-1",
    title: "Silver Circle Necklace", // Based on the first image (necklace)
    image: "/new-prod-1.png",
    price: 259.0,
    originalPrice: 300.0,
    onSale: true,
  },
  {
    id: "product-2",
    title: "Elegant Diamond Ring", // Based on the second image (diamond ring)
    image: "/new-prod-2.png",
    price: 200.0,
    originalPrice: 300.0,
    onSale: false,
  },
  {
    id: "product-3",
    title: "Butterfly Hoop Earrings", // Based on the third image (butterfly earrings)
    image: "/new-prod-3.png",
    price: 250.0,
    originalPrice: 300.0,
    onSale: true,
  },
  {
    id: "product-4",
    title: "Oxidized Peacock Ring", // Based on your request for an oxidized ring title
    image: "/new-prod-4.png", // Assuming this is a placeholder or you meant to reuse an image
    price: 200.0,
    originalPrice: 300.0,
    onSale: false,
  },
];

const NewProducts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-[#f9f7f4] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2B2B2B] mb-6">
            NEW PRODUCTS
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-1 w-12 bg-[#C9A87A]" />
            <span className="text-3xl text-[#C9A87A]">★ ★ ★</span>
            <div className="h-1 w-12 bg-[#C9A87A]" />
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group flex flex-col items-center w-full max-w-xs"
            >
              {/* Product Card - Square */}
              <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 flex items-center justify-center">

                {/* Sale Badge */}
                {product.onSale && (
                  <div className="absolute top-4 right-4 z-10 w-12 h-12 bg-[#A88860] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-semibold">Sale</span>
                  </div>
                )}

                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                  unoptimized
                />
              </div>

              {/* Product Info */}
              <h3 className="text-base sm:text-lg font-medium text-[#2B2B2B] mt-4 mb-2 text-center hover:text-[#C9A87A] transition-colors duration-300">
                {product.title}
              </h3>

              {/* Pricing */}
              <div className="flex items-center gap-3">
                <span className="text-lg sm:text-xl font-semibold text-[#C9A87A]">
                  ${product.price.toFixed(2)}
                </span>

                {product.originalPrice > product.price && (
                  <span className="text-sm sm:text-base text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewProducts;
