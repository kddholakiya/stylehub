"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Command,
  ContactRound,
  House,
  Settings2,
  ShoppingCart,
  Menu,
  X,
  LogIn,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="w-full flex items-center justify-between px-6 py-3 shadow-md bg-white relative z-50">
      {/* 🔹 Left: Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-1 text-lg font-bold">
          <Image
            src="/Logo.png"
            width={80}
            height={80}
            alt="Logo"
            className="object-contain"
          />
        </Link>
      </div>

      {/* 🔹 Middle: Navigation Menu (hidden on mobile) */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap space-x-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} flex items-center gap-1`}
              >
                <Link href="/">
                  <div className="flex gap-1 leading-tight">
                    <House size={14} strokeWidth={1.5} />
                    <span>Home</span>
                  </div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/explore">
                  <div className="flex gap-1 leading-tight">
                    <Command size={14} strokeWidth={1.5} />
                    <span>Explore</span>
                  </div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">
                  <div className="flex gap-1 leading-tight">
                    <ContactRound size={14} strokeWidth={1.5} />
                    <span>About Us</span>
                  </div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/contact">
                  <div className="flex gap-1 leading-tight">
                    <ContactRound size={14} strokeWidth={1.5} />
                    <span>Contact Us</span>
                  </div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* 🔹 Right: Cart & Sign In */}
      <div className="flex items-center gap-3">
        <Link
          href="/sign-in"
          className="hidden md:inline-block px-4 py-2 text-sm font-medium rounded-md  hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 transition-colors"
        >
          Sign In
        </Link>

        <Link href="/cart" className="relative">
          <ShoppingCart
            size={22}
            strokeWidth={1.75}
            className="hover:text-gray-500"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
            2
          </span>
        </Link>

        {/* 🔹 Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-3 md:hidden transition-all duration-300">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <House size={16} strokeWidth={1.5} /> Home
          </Link>
          <Link
            href="/explore"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <Command size={16} strokeWidth={1.5} /> Explore
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <ContactRound size={16} strokeWidth={1.5} /> About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <ContactRound size={16} strokeWidth={1.5} /> Contact Us
          </Link>
          <Link
            href="/sign-in"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <LogIn size={16} strokeWidth={1.5} /> Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
