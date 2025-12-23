"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { getImgPath } from "@/utils/pathUtils";

export default function Header() {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Sticky detection — desktop only
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setSticky(window.scrollY > 40);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on outside click
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "#about" },
    { name: "How Learning Works", href: "#how" },
    { name: "Who It’s For", href: "#who" },
    { name: "Get Started", href: "#get-started" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          sticky
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
            : "bg-black/40 backdrop-blur-lg"
        }
      `}
    >
      {/* ===== SUBTLE ORBIT GLOWS ===== */}
      {!sticky && (
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="absolute top-0 left-24 w-56 h-56 bg-emerald-500/15 blur-[120px] rounded-full" />
          <div className="absolute top-0 right-24 w-56 h-56 bg-sky-400/15 blur-[120px] rounded-full" />
        </div>
      )}

      <div className="relative z-20 max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={getImgPath("/images/logo/stem.svg")}
            alt="STEM Institute AI Logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:flex">
          <a
            href="https://api.whatsapp.com/send?text=START"
            className="px-6 py-3 rounded-full text-sm font-semibold
              bg-emerald-500 hover:bg-emerald-400 text-black transition"
          >
            Start on WhatsApp
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setNavbarOpen(true)}
          className="lg:hidden p-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* ===== MOBILE DRAWER ===== */}
    {/* ===== MOBILE DRAWER ===== */}
<div
  ref={mobileMenuRef}
  className={`fixed top-0 right-0 h-full w-[80%] max-w-sm z-50
    bg-black
    text-white
    transition-transform duration-300
    ${navbarOpen ? "translate-x-0" : "translate-x-full"}
  `}
>

        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <span className="text-sm font-semibold tracking-wider uppercase">
            Menu
          </span>

          <button
            onClick={() => setNavbarOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-8 px-6 py-10">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setNavbarOpen(false)}
              className={`text-lg font-medium transition
                ${
                  pathname === item.href
                    ? "text-emerald-400"
                    : "text-slate-200 hover:text-emerald-400"
                }
              `}
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://api.whatsapp.com/send?text=START"
            className="mt-6 px-6 py-4 bg-emerald-500 text-black rounded-full text-center font-semibold hover:bg-emerald-400 transition"
          >
            Start Learning on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
