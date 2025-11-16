"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F1EB] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">StyleHub</h4>
            <p className="text-sm text-neutral-700">Discover timeless oxidized jewelry handcrafted for every occasion.</p>
          </div>

          <div>
            <h5 className="text-sm font-medium mb-3">Shop</h5>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>
                <Link href="/collections/bracelets" className="hover:text-[#C9A87A]">Bracelets</Link>
              </li>
              <li>
                <Link href="/collections/earrings" className="hover:text-[#C9A87A]">Earrings</Link>
              </li>
              <li>
                <Link href="/collections/necklaces" className="hover:text-[#C9A87A]">Necklaces</Link>
              </li>
              <li>
                <Link href="/collections/rings" className="hover:text-[#C9A87A]">Rings</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-medium mb-3">Company</h5>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>
                <Link href="/about" className="hover:text-[#C9A87A]">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C9A87A]">Contact Us</Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-[#C9A87A]">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-medium mb-3">Contact</h5>
            <p className="text-sm text-neutral-700 mb-3">support@stylehub.com</p>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="#">Sign In</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="/cart">Cart</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} StyleHub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-neutral-700 hover:text-[#C9A87A]">Instagram</a>
            <a href="#" className="text-neutral-700 hover:text-[#C9A87A]">Pinterest</a>
            <a href="#" className="text-neutral-700 hover:text-[#C9A87A]">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
