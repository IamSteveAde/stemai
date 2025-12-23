"use client";

export default function WhoItsFor() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-40" id="who">

      {/* ===== ATMOSPHERIC GLOWS ===== */}
      <div className="absolute -top-48 -left-48 w-[520px] h-[520px] rounded-full bg-emerald-500/15 blur-[200px]" />
      <div className="absolute bottom-[-260px] -right-48 w-[520px] h-[520px] rounded-full bg-sky-400/15 blur-[200px]" />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="max-w-3xl mb-24">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-emerald-400 mb-6">
            Who It’s For
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
            Who STEM Institute AI
            <br />
            Is Designed For
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            STEM Institute AI is built for individuals and institutions
            that want accessible, scalable, and practical STEM education—
            delivered through a tool people already trust: WhatsApp.
          </p>
        </div>

        {/* ===== AUDIENCE CARDS ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">

          <AudienceCard
            title="Secondary & Tertiary Students"
            accent="emerald"
          >
            Structured STEM learning that fits naturally around academic
            schedules without adding pressure.
          </AudienceCard>

          <AudienceCard
            title="Young Professionals"
            accent="sky"
          >
            Skill development designed to grow alongside demanding work
            and personal commitments.
          </AudienceCard>

          <AudienceCard
            title="Schools & Educators"
            accent="emerald"
          >
            A WhatsApp-native learning system that complements formal
            education and expands reach.
          </AudienceCard>

          <AudienceCard
            title="Governments & NGOs"
            accent="sky"
          >
            Low-barrier, scalable STEM education suitable for large
            populations and diverse communities.
          </AudienceCard>

          <AudienceCard
            title="Anyone with a Phone & WhatsApp"
            accent="emerald"
          >
            Learning that requires no additional tools—if you can chat,
            you can learn.
          </AudienceCard>

        </div>

        {/* ===== ACCESSIBILITY STATEMENT ===== */}
        <div className="max-w-xl space-y-4 text-slate-300 text-lg">
          <p>No laptops required.</p>
          <p>No technical background needed.</p>
        </div>

      </div>
    </section>
  );
}

function AudienceCard({
  title,
  children,
  accent,
}: {
  title: string;
  children: React.ReactNode;
  accent: "emerald" | "sky";
}) {
  return (
    <div className="relative group bg-white/5 backdrop-blur-xl border border-white/10  p-10 transition shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] hover:bg-white/10">

      {/* Accent Line */}
      <div
        className={`absolute top-0 left-0 h-[3px] w-20 rounded-full ${
          accent === "emerald"
            ? "bg-emerald-400"
            : "bg-sky-400"
        }`}
      />

      <h3 className="text-xl font-semibold text-white mb-4">
        {title}
      </h3>

      <p className="text-slate-300 leading-relaxed text-sm">
        {children}
      </p>
    </div>
  );
}
