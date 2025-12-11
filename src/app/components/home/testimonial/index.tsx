"use client";

import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { getImgPath } from "@/utils/pathUtils";

export default function SecurityTrust() {
  const partners = [
    { name: "Leadway", logo: "/images/logo/chuks.png" },
    { name: "AIICO", logo: "/images/logo/chuks.png" },
    { name: "AXA Mansard", logo: "/images/logo/chuks.png" },
    { name: "Allianz", logo: "/images/logo/chuks.png" },
  ];

  return (
    <section
      className="relative py-24 sm:py-28 bg-[#f8fafc] overflow-hidden"
      id="security"
    >
      {/* Responsive background rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.12]">
        <svg
          viewBox="0 0 800 800"
          className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] md:w-[950px] md:h-[950px]"
        >
          <circle cx="400" cy="400" r="140" stroke="#94a3b8" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="230" stroke="#cbd5e1" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="320" stroke="#e2e8f0" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="390" stroke="#f1f5f9" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto lg:max-w-screen-xl px-6">

        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 text-center sm:text-left mx-auto sm:mx-0">
          <div className="flex justify-center sm:justify-start items-center gap-3 mb-5">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <span className="uppercase tracking-[0.2em] text-primary font-medium">
              Security & Trust
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-midnight_text mb-4 leading-tight">
            Your security is our highest priority.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We use enterprise-grade security and WhatsApp’s end-to-end encryption —
            the same protection trusted by major financial institutions.
          </p>
        </div>

        {/* Trust badges – fully responsive */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mb-14">
          {[
            "SSL Secured",
            "ISO-Compliant",
            "Data Encrypted"
          ].map((label, i) => (
            <div
              key={i}
              className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm 
                flex items-center gap-2 text-sm sm:text-base"
            >
              <span className="text-green-600 text-lg sm:text-xl">✔</span>
              <span className="text-gray-700 font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Partner logos – responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center grayscale opacity-90 
                         hover:opacity-100 hover:grayscale-0 transition"
            >
              <Image
                src={getImgPath(p.logo)}
                alt={p.name}
                width={140}
                height={50}
                className="object-contain w-[90px] sm:w-[120px] md:w-[150px]"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
