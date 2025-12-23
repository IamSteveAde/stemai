"use client";

import { Brain, MessageCircle, Clock, Award } from "lucide-react";

export default function WhyItWorks() {
  return (
    <section className="relative py-24 bg-[#0B1020] border-t border-white/5">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why STEM Institute AI Works
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Built with intention. Designed around how people actually learn.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Feature
            icon={<Brain size={26} />}
            title="AI-Powered Personal Tutor"
            text="An intelligent tutor that adapts to your pace and supports you throughout your learning journey."
          />

          <Feature
            icon={<MessageCircle size={26} />}
            title="100% WhatsApp-Native Learning"
            text="Learn entirely inside WhatsApp—lessons, quizzes, projects, and feedback in one familiar place."
          />

          <Feature
            icon={<Clock size={26} />}
            title="5–10 Minute Daily Lessons"
            text="Short, focused sessions designed for consistency without overwhelm."
          />

          <Feature
            icon={<Award size={26} />}
            title="Verified Digital Certificates"
            text="Earn credible certificates you can share with schools, employers, and institutions."
          />

        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
      <div className="mb-4 text-emerald-400">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
