"use client";

import Image from "next/image";

export default function AboutSTEM() {
  return (
    <section className="relative bg-white py-32 overflow-hidden" id="about">

      {/* Subtle Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-emerald-100 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* ================= LEFT: CONTENT ================= */}
          <div className="lg:col-span-6">

            {/* Eyebrow */}
            <p className="text-sm font-semibold tracking-[0.2em] text-emerald-600 uppercase mb-6">
              About STEM Institute AI
            </p>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              What If Learning
              <span className="block">
                Lived Where You Already Are?
              </span>
            </h2>

            {/* Body */}
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed max-w-xl">
              <p>
                STEM Institute AI is a full STEM school built entirely
                inside WhatsApp.
              </p>

              <p>
                Every lesson, assignment, quiz, project, and certification
                happens in chat—powered by an intelligent AI agent designed
                to teach, guide, test, and support learners step by step.
              </p>
            </div>

            {/* Divider */}
            <div className="my-10 h-px w-24 bg-emerald-500/40" />

            {/* Value Statements */}
            <div className="space-y-3 text-slate-800 text-lg font-medium">
              <p>There are no apps to download.</p>
              <p>No complicated dashboards to learn.</p>
              <p className="text-emerald-600 font-semibold">
                If you can chat, you can learn.
              </p>
            </div>

          </div>

          {/* ================= RIGHT: VISUAL ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">

            <div className="relative">

              {/* Frame */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-emerald-100 via-white to-sky-100 blur-xl opacity-60" />

              {/* Card */}
              <div className="relative bg-white border border-slate-200 rounded-[28px] p-6 shadow-xl max-w-md">
                <Image
                  src="/images/hero/teacher.png"
                  alt="STEM Institute AI WhatsApp Learning Interface"
                  width={420}
                  height={420}
                  className="rounded-2xl"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
