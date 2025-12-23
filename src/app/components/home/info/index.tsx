"use client";

import { ArrowRight } from "lucide-react";

export default function WhyWhatsAppAndCTA() {
  return (
    <section className="relative bg-white py-40 overflow-hidden">

      {/* ===== SUBTLE DECORATIVE ELEMENTS ===== */}
      <div className="absolute -top-48 -right-48 w-[520px] h-[520px] rounded-full bg-emerald-100 blur-[200px]" />
      <div className="absolute bottom-[-260px] -left-48 w-[520px] h-[520px] rounded-full bg-sky-100 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-40">

        {/* ================= WHY WHATSAPP ================= */}
        <div className="max-w-3xl" id="get-started">

          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-emerald-600 mb-6">
            Why WhatsApp
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
            Education Should Meet Learners
            <br />
            Where They Already Are
          </h2>

          <ul className="space-y-4 text-slate-700 text-lg max-w-xl">
            <li>• Already installed on billions of phones</li>
            <li>• Works efficiently on low data</li>
            <li>• Familiar, simple, and accessible</li>
            <li>• Removes technical barriers to education</li>
          </ul>

          <p className="mt-8 text-slate-700 text-lg max-w-xl">
            Education should meet learners where they are—not force them to adapt.
          </p>
        </div>

        {/* ================= GET STARTED ================= */}
        <div className="grid lg:grid-cols-12 gap-20 items-start " >

          {/* Steps */}
          <div className="lg:col-span-7 space-y-10">

            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-emerald-600">
              Get Started
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Get Started in 3 Simple Steps
            </h3>

            <div className="space-y-8 text-slate-700 text-lg">

              <Step
                number="01"
                title="Save Our WhatsApp Number"
                text="Add STEM Institute AI to your contacts."
              />

              <Step
                number="02"
                title='Send “START”'
                text="Our AI tutor responds instantly."
              />

              <Step
                number="03"
                title="Begin Learning"
                text="Your personalized STEM journey begins immediately."
              />

            </div>

            

          </div>

          {/* CTA Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-3xl p-12 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.15)]">

              <h4 className="text-2xl font-semibold text-slate-900 mb-4">
                Start Learning Today
              </h4>

              <p className="text-slate-700 mb-8">
                Everything you need to learn STEM—delivered through WhatsApp,
                guided by AI, and built for real-world learning.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition"
              >
                Start on WhatsApp
                <ArrowRight size={18} />
              </a>

            </div>
          </div>

        </div>

       
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center shadow">
        {number}
      </div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-slate-700">{text}</p>
      </div>
    </div>
  );
}
