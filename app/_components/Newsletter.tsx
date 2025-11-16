"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to an API or newsletter provider
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide mb-4">
          NEWSLETTER
        </h3>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-1 w-12 bg-[#C9A87A]" />
          <div className="text-[#C9A87A] text-lg">★ ★ ★</div>
          <div className="h-1 w-12 bg-[#C9A87A]" />
        </div>

        <p className="text-base sm:text-lg text-neutral-700 mb-8">
          We promise only send the good things
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center w-full"
          aria-label="Subscribe to newsletter"
        >
          <div className="relative w-full max-w-3xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              aria-label="Email address"
              className="w-full rounded-md border border-neutral-200 px-4 py-4 pr-20 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C9A87A]/40"
            />

            <Button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#C9A87A] hover:bg-[#A88860] text-white rounded-md px-4 h-10"
            >
              {/* paper plane svg */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
>              
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>
        </form>

        {sent && (
          <div className="mt-6 text-sm text-green-600">Thanks — we added you to our list!</div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
