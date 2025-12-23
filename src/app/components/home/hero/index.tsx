"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1020] pt-35 md:pt-40 pb-32">

      {/* Soft AI Glows */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-emerald-500/25 blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-120px] h-[420px] w-[420px] rounded-full bg-sky-400/25 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-14 items-center">

        {/* ================= LEFT: TEXT ================= */}
        <div className="lg:col-span-6 space-y-6 text-left">

          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
            A Full STEM School
            <span className="block text-emerald-400">
              Inside WhatsApp
            </span>
          </h1>

          <p className="max-w-xl text-slate-300 text-base md:text-lg leading-relaxed">
            Learn STEM by chatting with an AI tutor—lessons, quizzes, projects,
            and certificates, all inside WhatsApp.
          </p>

          <div className="space-y-1 text-slate-400 text-sm md:text-base">
            <p>No apps.</p>
            <p>No portals.</p>
            <p>No friction.</p>
            <p className="text-slate-300">
              Just real learning—where you already are.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-6">

            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl transition"
            >
              Start Learning on WhatsApp
              <ArrowRight size={18} />
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/5 transition"
            >
              See How It Works
              <ArrowRight size={18} />
            </a>

          </div>

          <p className="text-xs text-slate-400 pt-2">
            Takes less than 30 seconds • No sign-up forms
          </p>

        </div>

        {/* ================= RIGHT: IMAGE ================= */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">

          {/* Glass Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-4 w-[88%] md:w-[75%]">

            <Image
              src="/images/hero/mockup.png"
              alt="STEM Institute AI WhatsApp Learning Interface"
              width={520}
              height={520}
              className="rounded-2xl object-contain"
            />

          </div>

          {/* Floating Accent */}
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-emerald-400/20 blur-xl" />

        </div>

      </div>
    </section>
  );
}
