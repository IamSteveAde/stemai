"use client";

import Link from "next/link";
import Image from "next/image";
import { getImgPath } from "@/utils/pathUtils";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0F16] text-white pt-24 pb-12 overflow-hidden">

      {/* Subtle Orbit Pattern */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]">
        <svg viewBox="0 0 800 800" className="w-[1000px] h-[1000px]">
          <circle cx="400" cy="400" r="160" stroke="#ffffff" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="280" stroke="#ffffff" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="380" stroke="#ffffff" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6">

        {/* ================= TOP FOOTER ================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">

          {/* Brand */}
          <div className="max-w-sm">
            <Image
              src={getImgPath("/images/logo/stem.svg")}
              alt="STEM Institute AI Logo"
              width={180}
              height={50}
              className="mb-6"
            />

            <p className="text-gray-400 leading-relaxed">
              STEM Institute AI is a WhatsApp-native learning institution
              powered by AI—delivering STEM education through simple,
              conversational learning.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-16">

            {/* Explore */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-lg">
                Explore
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/#about" className="text-gray-400 hover:text-emerald-400 transition">
                    About STEM Institute AI
                  </Link>
                </li>
                <li>
                  <Link href="/#how" className="text-gray-400 hover:text-emerald-400 transition">
                    How Learning Works
                  </Link>
                </li>
                <li>
                  <Link href="/#who" className="text-gray-400 hover:text-emerald-400 transition">
                    Who It’s For
                  </Link>
                </li>
                <li>
                  <Link href="/policy" className="text-gray-400 hover:text-emerald-400 transition">
                    Policies & Privacy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-lg">
                Connect
              </h4>

              <ul className="space-y-3">
                <li>
                  <a
                    href="https://api.whatsapp.com/send?text=START"
                    className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start Learning on WhatsApp
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-white/10 my-10" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>
            © {new Date().getFullYear()} STEM Institute AI. All rights reserved.
          </p>

          <p className="text-gray-500">
            Learning made conversational.
          </p>
        </div>

      </div>
    </footer>
  );
}
