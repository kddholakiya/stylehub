"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Mock submit
    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
      <h1 className="text-4xl font-semibold text-[#2B2B2B] mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-[#5A5143] mb-6">Have a question or want to collaborate? Send us a message and we'll get back to you within 1-2 business days.</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-[#5A5143]">support@oxyjewels.example</p>
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-[#5A5143]">+1 (555) 987-6543</p>
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-[#5A5143]">123 Jewelry Lane, Silver City</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-sm mb-1">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2 h-32" />
          </div>

          <div>
            <Button type="submit" className="bg-[#3E3124] hover:bg-[#2E241B] text-[#F5E9D0]">
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

