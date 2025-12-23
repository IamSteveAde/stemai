"use client";

export default function HowLearningWorks() {
  return (
    <section className="relative bg-[#F5F7FA] py-40 overflow-hidden" id="how">

      {/* ===== ORBIT UNIVERSE BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[520px] h-[520px] rounded-full border border-slate-300/40 animate-orbit-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] rounded-full border border-emerald-300/40 animate-orbit-reverse" />
        <div className="absolute top-1/2 right-1/3 w-[220px] h-[220px] rounded-full border border-sky-300/40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="max-w-2xl mb-28">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-emerald-600 mb-4">
            How Learning Works
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            WhatsApp-First by Design
          </h2>

          <p className="text-slate-700 text-lg leading-relaxed">
            STEM Institute AI is not a website with WhatsApp support.
            <br />
            <span className="font-medium text-slate-900">
              It is a WhatsApp-native learning system.
            </span>
          </p>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="space-y-28">

          <TimelineItem
            number="01"
            title="Learn by Chatting"
            description="You interact with an AI tutor directly inside WhatsApp."
            items={[
              "Explains concepts in simple language",
              "Adapts to your pace and learning level",
              "Answers questions instantly",
              "Uses examples, visuals, and mini challenges",
            ]}
            footer="It feels like texting a very smart teacher—anytime."
          />

          <TimelineItem
            number="02"
            title="Personalized Learning Paths"
            description="Once you begin, the AI agent designs learning specifically for you."
            items={[
              "Assesses your current knowledge level",
              "Designs a personalized STEM roadmap",
              "Adjusts lessons based on performance",
              "Re-teaches concepts you struggle with",
            ]}
            footer="No two learners experience the same journey."
          />

          <TimelineItem
            number="03"
            title="Daily Micro-Lessons"
            description="Lessons are delivered in short, focused WhatsApp messages."
            items={[
              "5–10 minute learning blocks",
              "Voice notes, images, and text",
              "Real-world STEM applications",
              "Daily reminders to stay consistent",
            ]}
            footer="Built for students, professionals, and busy learners."
          />

          <TimelineItem
            number="04"
            title="Instant Quizzes & Feedback"
            description="Assessment happens naturally inside WhatsApp."
            items={[
              "Quick quizzes after lessons",
              "Instant grading with explanations",
              "Performance tracking",
              "Smart recommendations on what to revise",
            ]}
            footer="Learning becomes continuous—not stressful."
          />

          <TimelineItem
            number="05"
            title="Projects, Not Just Theory"
            description="You don’t just learn—you build."
            items={[
              "Mini projects guided step by step",
              "Real-life STEM challenges",
              "Practical thinking exercises",
              "AI-reviewed submissions",
            ]}
            footer="The focus is real skills, not memorization."
          />

          <TimelineItem
            number="06"
            title="Digital Certifications"
            description="When you complete a program:"
            items={[
              "Earn a digital certificate",
              "Shareable for school, work, and portfolios",
              "Backed by verified learning progress",
              "Issued entirely inside WhatsApp",
            ]}
          />

        </div>
      </div>

      {/* ===== GLOBAL ANIMATIONS ===== */}
      <style jsx global>{`
        @keyframes orbitSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-orbit-slow {
          animation: orbitSlow 90s linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbitReverse 120s linear infinite;
        }
      `}</style>

    </section>
  );
}

function TimelineItem({
  number,
  title,
  description,
  items,
  footer,
}: any) {
  return (
    <div className="grid md:grid-cols-12 gap-12 items-start">

      {/* ===== NUMBER + BROKEN CONNECTOR ===== */}
      <div className="md:col-span-2 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg shadow-lg">
          {number}
        </div>
        <div className="h-24 w-px bg-gradient-to-b from-slate-400 to-transparent mt-8" />
      </div>

      {/* ===== CONTENT CARD ===== */}
      <div className="md:col-span-10 bg-white rounded-[28px] p-12 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] border border-slate-200">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
          {title}
        </h3>

        <p className="text-slate-700 text-lg mb-8">
          {description}
        </p>

        <ul className="grid md:grid-cols-2 gap-4 text-slate-700 mb-8">
          {items.map((item: string, i: number) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        {footer && (
          <p className="text-slate-800 font-medium">
            {footer}
          </p>
        )}
      </div>

    </div>
  );
}
